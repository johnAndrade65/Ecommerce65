import React from "react";

//Contexto usado para o compartilhamento de dados entre nossa aplicação
import { ProductsContext } from "../../contexts";
import { useContext } from "react";

//Componente "Products" onde será exibido algusn dos produtos disponiveis
const Products = () => {
  const { products } = useContext(ProductsContext);

  const randomProducts = Object.keys(products).sort(() => Math.random() - 0.5);

  return (
    <div className="products-container" id="products">
      <h2>Produtos em alta!</h2>
      <div className="container">
        {randomProducts.slice(0, 8).map((productId) => {
          const product = products[productId];
          return (
            <div key={productId} className="product">
              <img src={product.img} alt={product.name} />
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

export default Products;
