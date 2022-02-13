import React from "react";
const style = {
  display: "inline-block",
  width: "500px",
  padding: "20px",
  margin: "0 10px 10px",
  color: "black",
  fontSize: "20px"
};

function Food({food, onSelectFood}) {
  return (
    <div style={style}>
      <br />
      <h4>{food.title}</h4>
      <img src={food.image} onClick={e=>onSelectFood(food.id)} alt="" />
    </div>
  );
}

export default Food;