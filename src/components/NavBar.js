import React from "react";
import { NavLink } from "react-router-dom";

const linkStyles = {
  display: "inline-block",
  width: "200px",
  padding: "12px",
  margin: "0 6px 6px",
  background: "blue",
  textDecoration: "none",
  color: "white",
};

function NavBar() {
  return (
    <div>
      <NavLink
        to="/"
        exact
        style={linkStyles}
        activeStyle={{
          background: "darkblue",
        }}
      >
        Home
      </NavLink>
      <NavLink
        to="/foodfromAPI"
        exact
        style={linkStyles}
        activeStyle={{
          background: "darkblue",
        }}
      >
        FoodFromAPI
      </NavLink>
      <NavLink
        to="/myfoodportfolio"
        exact
        style={linkStyles}
        activeStyle={{
          background: "darkblue",
        }}
      >
        MyFoodPortfolio
      </NavLink>
    </div>
  );
}

export default NavBar;