import React from "react";
import Price from "./Price";

function Products({name,description,price}) {
    return (
        <div>
            <h1>{name}</h1>
            <p>{description}</p>
            <Price price={price} />
        </div>
    );
}

export default Products