import React from "react";
import {useParams} from "react-router-dom"

function Recipe({food}) {
  const {recipeId} = useParams()

  return (
    <div>
      <br />
      <h1>hello!!!</h1>
      <h4>{food[recipeId].title}</h4>
      <img src={food[recipeId].image} alt="" />
    </div>
  );
}

export default Recipe;