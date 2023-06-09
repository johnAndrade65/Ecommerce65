import React from "react";

import { Link } from "react-router-dom";

//Contexto usado para o compartilhamento de dados entre nossa aplicação
import { ProductsContext } from "../../contexts";
import { useContext } from "react";

//Componente "Promotions" onde será exibido alguns dos produtos em promoção
const Promotions = () => {
  const { products, getProductData } = useContext(ProductsContext);

  return (
    <div className="products-container" id="promotions">
      <h2>Queima de estoque!</h2>
      <div className="container">
        {Object.keys(products)
          .slice(0, 4)
          .map((productId) => {
            const product = products[productId];
            return (
              <div key={productId} className="product">
                <img src={product.img} alt={product.name} />
                <h3>{product.name}</h3>
                <p className="product-description">{product.description}</p>
                <p className="product-price">{product.price}</p>
                <Link
                  to={`/productdetails/${product.name
                    .toString()
                    .toLowerCase()}`}
                  className="link-buy"
                >
                  <button>
                    Comprar agora
                  </button>
                </Link>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Promotions;
