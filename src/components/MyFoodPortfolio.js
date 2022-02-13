import React, { useEffect, useState } from "react";
import PortfolioList from "./PortfolioList"
import Recipe from "./Recipe"
import {Route, useRouteMatch} from "react-router-dom"

function MyFoodPortfolio() {
  const [food, setFood] = useState([])
  const match = useRouteMatch()
  console.log(match.url)
  useEffect(()=>{
    fetch(`http://localhost:3000/food`)
    .then((r) => r.json())
    .then((data) => {
      setFood(data);
    });
  },[])

  return (
    <div>
        <PortfolioList food={food}/>
        <Route exact path={match.url}>
          <h3>Choose a movie from the list above</h3>
        </Route>
        <Route path={`${match.url}/:recipeId`}>
          <Recipe food={food}/>
        </Route>
    </div>
  ); 
}

export default MyFoodPortfolio;