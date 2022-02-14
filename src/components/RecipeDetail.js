import React, {useState} from "react";

function RecipeDetail({selectedFood, onShowDetail}) {
  const [rating, setRating] = useState(10)
  let ingredients = []
  selectedFood.extendedIngredients.map(i=>{
    ingredients.push({"name":i.name, "original":i.original})
  })
  
  const ingredientList = ingredients.map(i=>{
    return <li key={i.original}>{i.original}</li>
  })

  function handleCollect(e){
    e.preventDefault()
    fetch('http://localhost:3000/food',{
      method: 'POST',
      headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json'
      },
      body: JSON.stringify({
        "title": selectedFood.title,
        "image": selectedFood.image,
        "ingredients": ingredients,
        "rating": rating
      })
    })
    .then(res=>res.json())
    .then(data=>{
        onShowDetail(false)
    })
  }

  return (
    <div>
      <h3>See a recipe for {selectedFood.title}!</h3>
      <ul>
        {ingredientList}
      </ul>
      <form onSubmit={handleCollect}>
        <label >From 1 to 10: choose most likely you would try this recipe!</label>
        <select name="rating" value={rating} onChange={e=>setRating(e.target.value)}>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
          <option value="7">7</option>
          <option value="8">8</option>
          <option value="9">9</option>
          <option value="10">10</option>
        </select>
        <input type="submit" value="Collect"/>
      </form>
    </div>
  );
}

export default RecipeDetail;
