import React from "react";

//Importação de images como componentes para serem renderizadas no Highlights/destaques
import { ProductsContext } from "../../contexts";
import { useContext } from "react";
import { Link } from "react-router-dom";

const Categories = () => {
  const { products, getCategoryName } = useContext(ProductsContext);

  return (
    <div className="Categories" id="categories">
      <div className="container">
        <Link to={"/categories"}>
          <button className="categories-item" onClick={() => getCategoryName(products[1].name)}>
            <img src={products[1].img} alt={products[1].name} />
          </button>
        </Link>
        <Link to={"/categories"}>
          <button className="categories-item" onClick={() => getCategoryName(products[2].name)}>
            <img src={products[2].img} alt={products[2].name} />
          </button>
        </Link>
        <Link to={"/categories"}>
          <button className="categories-item" onClick={() => getCategoryName(products[3].name)}>
            <img src={products[3].img} alt={products[3].name} />
          </button>
        </Link>
        <Link to={"/categories"}>
          <button className="categories-item" onClick={() => getCategoryName(products[4].name)}>
            <img src={products[4].img} alt={products[4].name} />
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Categories;
