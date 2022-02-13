import React from "react";
import {Route, Switch} from "react-router-dom";
import FoodFromAPI from "./FoodFromAPI";
import MyFoodPortfolio from "./MyFoodPortfolio";
import Home from "./Home";
import NavBar from "./NavBar";

function App() {
  return (
    <div>
      <NavBar />
      <Switch>
        <Route path="/foodfromAPI">
          <FoodFromAPI />
        </Route>
        <Route path="/myfoodportfolio">
          <MyFoodPortfolio />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
      </Switch>
    </div>
  );
}

export default App;