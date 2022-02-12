import React from "react";

function Food({food, onSelectFood}) {
  return (
    <div>
      <br />
      <h4>{food.title}</h4>
      <img src={food.image} onClick={e=>onSelectFood(food.id)} alt="" />
    </div>
  );
}

export default Food;