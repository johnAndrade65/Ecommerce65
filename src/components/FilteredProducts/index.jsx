import React from "react";

//Contexto usado para o compartilhamento de dados entre nossa aplicação
import { ProductsContext } from "../../contexts";
import { useContext } from "react";

//Link do react router dom para acessar outrass páginas sem necessidade de recarregar o site
import { Link } from "react-router-dom";

//Componente "Products" onde será exibido alguns dos produtos disponiveis
const FilteredProducts = () => {
  const { products, categorySelectedName } = useContext(ProductsContext);
  
  //Variavel que irá filtrar os produtos do object "products" de acordo com o valor do useState "categorySelectedName" que representa o valor dá categoria selecionada
  const filteredProducts = Object.entries(products)
  .filter(([key, product]) => product.name.startsWith(categorySelectedName))
  .map(([key, product]) => product);

  return (
    <div className="products-container" id="products">
      <h2>{categorySelectedName ? `Categoria ${categorySelectedName}` : "Todas as categorias"}</h2>
      <div className="container">
        {filteredProducts.map((product) => {
          return (
            <div key={product.id} className="product">
              <img src={product.img} alt={product.name} />
              <h3>{product.name}</h3>
              <p className="product-description">{product.description}</p>
              <p className="product-price">{product.price}</p>
              <Link
                to={`/productdetails/${product.name.toString().toLowerCase()}`}
                className="link-buy"
              >
                <button>Comprar agora</button>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );}

export default FilteredProducts;
