import React from "react";
import {Link} from "react-router-dom"

function PortfolioList({food}) {
    const foodList = food.map(({id, title}) => (
        <li key={id}>
            <Link to={`/myfoodportfolio/${id}`}>{title}</Link>
        </li>
        ));

    return (<ul>{foodList}</ul>);
}

export default PortfolioList;