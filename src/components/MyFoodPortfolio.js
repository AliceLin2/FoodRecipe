import React, { useEffect, useState } from "react";
import PortfolioList from "./PortfolioList"

function MyFoodPortfolio() {
  const [food, setFood] = useState([])

  function fetchFood(){
    fetch(`http://localhost:3000/food`)
    .then((r) => r.json())
    .then((data) => {
      setFood(data);
    });
  }
  useEffect(()=>{
    fetchFood()
  },[])

  return (
    <div>
        <PortfolioList food={food} onFetchFood={fetchFood}/>
    </div>
  ); 
}

export default MyFoodPortfolio;