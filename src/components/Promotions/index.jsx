import React from "react";

//Contexto usado para o compartilhamento de dados entre nossa aplicação
import { ProductsContext } from "../../contexts";
import { useContext } from 'react';

//Importação das imagens dos produtos
import EletronicsImg from '../../assets/eletronics.webp';
import KitchenImg from '../../assets/kitchen.webp';

//Componente "Promotions" onde será exibido alguns dos produtos em promoção
const Promotions = () => {

  const { products } = useContext(ProductsContext);

  return (
    <div className="products-container" id="promotions">
      <h2>Queima de estoque!</h2>
      <div className="container">
        <div className="product">
          <img src={EletronicsImg} alt={products.name.eletronics} />
          <h3>{products.name.eletronics}</h3>
          <p>Lorem ipslum lorem ipslum..</p>
          <button>Eu quero!</button>
        </div>
        <div className="product">
          <img src={KitchenImg}  alt={products.name.kitchen} />
          <h3>{products.name.kitchen}</h3>
          <p>Lorem ipslum lorem ipslum..</p>
          <button>Eu quero!</button>
        </div>
        <div className="product">
          <img src={KitchenImg}  alt={products.name.kitchen} />
          <h3>{products.name.kitchen}</h3>
          <p>Lorem ipslum lorem ipslum..</p>
          <button>Eu quero!</button>
        </div>
        <div className="product">
          <img src={EletronicsImg} alt={products.name.eletronics} />
          <h3>{products.name.eletronics}</h3>
          <p>Lorem ipslum lorem ipslum..</p>
          <button>Eu quero!</button>
        </div>
      </div>
    </div>
  );
};

export default Promotions;
