import React from "react";
import Food from "./Food"

function MenuList({food, searchTerm, onSelectFood}) {

  function allFood() {
    if (!!searchTerm) {
      return food.map((f) => {
        if (f.title.toLowerCase().includes(searchTerm)) {
          return <Food food={f} key={f.id} onSelectFood={onSelectFood}/>;
        } 
      });
    }
    return food.map((f) => (
      <Food food={f} key={f.id} onSelectFood={onSelectFood}/>
    ));
  }

  return (
    <div>
      {allFood()}
    </div>
  );
}

export default MenuList;