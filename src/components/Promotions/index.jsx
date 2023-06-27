import React from "react";

//Contexto usado para o compartilhamento de dados entre nossa aplicação
import { ProductsContext } from "../../contexts";
import { useContext } from "react";

//Componente "Promotions" onde será exibido alguns dos produtos em promoção
const Promotions = () => {
  const { products } = useContext(ProductsContext);

  return (
    <div className="products-container" id="promotions">
      <h2>Queima de estoque!</h2>
      <div className="container">
        {Object.keys(products).slice(0, 4).map((productId) => {
          const product = products[productId];
          return (
            <div key={productId} className="product">
              <img src={product.img} alt="" />
              <h3>{product.name}</h3>
              <p>{product.description}</p>
              <button>Comprar agora</button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Promotions;
