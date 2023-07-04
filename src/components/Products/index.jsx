import React from "react";

//Contexto usado para o compartilhamento de dados entre nossa aplicação
import { ProductsContext } from "../../contexts";
import { useContext } from "react";

//Link do react router dom para acessar outrass páginas sem necessidade de recarregar o site
import { Link } from "react-router-dom";

//Componente "Products" onde será exibido alguns dos produtos disponiveis
const Products = () => {
  const { products, handleButton, productsDataVar } = useContext(ProductsContext);

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
              <Link to={`/productdetails/${productsDataVar.name}`} className="link-buy">
                <button
                  onClick={() =>
                    handleButton(product.name, product.img, product.description)
                  }
                >
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

export default Products;
