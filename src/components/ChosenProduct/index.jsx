import React from "react";

import { useContext } from "react";
import { ProductsContext } from "../../contexts";

const ChosenProduct = () => {
  const { products, productsDataVar } = useContext(ProductsContext);

  return (
    <div className="container" id="ChosenProduct">
      <img src={productsDataVar.img} alt="" />
      <div>
        <h1>{productsDataVar.name}</h1>
        <p>{productsDataVar.description}</p>
        <button>Comprar!</button>
      </div>
    </div>
  );
};

export default ChosenProduct;
