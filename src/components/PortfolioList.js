import React from "react";
import {Link, Route, useRouteMatch, Switch} from "react-router-dom"
import Recipe from "./Recipe"

function PortfolioList({food, onFetchFood}) {
    const foodList = food.map(({id, title}) => (
        <li key={id}>
            <Link to={`/myfoodportfolio/${id}`}>{title}</Link>
        </li>
        ));

    let {path} = useRouteMatch()
    return (
        <div>
            <ul>{foodList}</ul>
            
            <Switch>
                <Route exact path={path}>
                    <h3>Please select a recipe.</h3>
                </Route>
                <Route path={`${path}/:recipeId`}>
                    <Recipe food={food} onFetchFood={onFetchFood}/>
                </Route>
             </Switch>
        </div>
        );
}

export default PortfolioList;