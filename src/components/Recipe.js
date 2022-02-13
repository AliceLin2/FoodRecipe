import React, {useState} from "react";
import {useParams} from "react-router-dom"

function Recipe({food}) {
  const [editMode, setEditMode] = useState(false)
  const {recipeId} = useParams() 
  const [newRating, setNewRating] = useState(0)
  
  const match = food.forEach(f=>{
      console.log(f.id===recipeId)
      if(f.id===recipeId){
        return f
      }
  })
  //console.log(match)
  const ingredientList = food[recipeId-1].ingredients.map(i=>{
    return <li key={i.name}>{i.original}</li>
  })

  function handleUpdate(){
      if(editMode===false){
        setEditMode(!editMode)
      }else{
          fetch(`http://localhost:3000/food/${food[recipeId-1].id}`,{
              method:"PATCH",
              headers:{
                  "Content-Type":"application/json"
              },
              body:JSON.stringify({
                  ...food[recipeId-1],
                  rating: newRating
              })
          })
          .then(r=>r.json())
          .then(data=>{
              setEditMode(!editMode)
            })
      }
  }

  function handleDelete(){
    fetch(`http://localhost:3000/food/${food[recipeId-1].id}`,{
        method:"DELETE"
    })
  }

  return (
    <div>
      <h2>{food[recipeId-1].title}</h2>
      <label>Delete Recipe: </label>
      <button name="delete" onClick={e=>handleDelete(e)}>Delete</button>
      <br/>
      <br/>
      <label>Update Rating: </label>
      <button name="edit" onClick={e=>handleUpdate(e)}>{editMode?"Save":"Edit"}</button>
      {editMode?
            <input 
                placeholder={"Please enter a new rating"} 
                onChange={e=>{
                    setNewRating(parseInt(e.target.value))
                }}></input>
            :
            <p>{`Rating: ${food[recipeId-1].rating}`}</p>
      }
      <br/>
      <img src={food[recipeId-1].image} alt="recipe" />
      {ingredientList}
    </div>
  );
}

export default Recipe;