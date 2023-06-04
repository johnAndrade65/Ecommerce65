import React from "react";

//Contexto usado para o compartilhamento de dados entre nossa aplicação
import { ProductsContext } from "../../contexts";
import { useContext } from 'react';

//Importação das imagens dos produtos
import EletronicsImg from '../../assets/eletronics.webp';
import KitchenImg from '../../assets/kitchen.webp';

//Componente "Products" onde será exibido algusn dos produtos disponiveis
const Products = () => {

  const { products } = useContext(ProductsContext);

  return (
    <div className="products-container" id="products">
      <h2>Produtos em alta!</h2>
      <div className="container">
        <div className="product">
          <img src={KitchenImg} alt={products.name.kitchen} />
          <h3>{products.name.kitchen}</h3>
          <p>Lorem ipslum lorem ipslum..</p>
          <button>Eu quero!</button>
        </div>
        <div className="product">
          <img src={EletronicsImg}  alt={products.name.eletronics} />
          <h3>{products.name.eletronics}</h3>
          <p>Lorem ipslum lorem ipslum..</p>
          <button>Eu quero!</button>
        </div>
        <div className="product">
          <img src={EletronicsImg}  alt={products.name.eletronics} />
          <h3>{products.name.eletronics}</h3>
          <p>Lorem ipslum lorem ipslum..</p>
          <button>Eu quero!</button>
        </div>
        <div className="product">
          <img src={KitchenImg} alt={products.name.kitchen} />
          <h3>{products.name.kitchen}</h3>
          <p>Lorem ipslum lorem ipslum..</p>
          <button>Eu quero!</button>
        </div>
      </div>
    </div>
  );
};

export default Products;
