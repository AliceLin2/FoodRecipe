import React, {useState} from "react";

function RecipeDetail({selectedFood}) {
  const ingredients = selectedFood.extendedIngredients.map(i=>{
    return <li key={i.name}>{i.original}</li>
  })
 
  function handleCollect(){
    fetch('http://localhost:3000/db',{
      method: 'POST',
      headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json'
      },
      body: JSON.stringify({
        "title": selectedFood.title,
        "image": selectedFood.image,
        "ingredients": selectedFood.ingredients
      })
    })
    .then(res=>res.json())
    .then(data=>{
        console.log(data)
  })
  }

  return (
    <div>
      <h3>See a recipe for {selectedFood.title}!</h3>
      <ul>
        {ingredients}
      </ul>
      <button onClick={handleCollect}>Collect</button>
    </div>
  );
}

export default RecipeDetail;
