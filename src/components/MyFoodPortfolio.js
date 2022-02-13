import React, { useEffect, useState } from "react";
import PortfolioList from "./PortfolioList"

function MyFoodPortfolio() {
  const [food, setFood] = useState([])

  useEffect(()=>{
    fetch(`http://localhost:3000/food`)
    .then((r) => r.json())
    .then((data) => {
      setFood(data);
    });
  },[food])

  return (
    <div>
        <PortfolioList food={food}/>
    </div>
  ); 
}

export default MyFoodPortfolio;