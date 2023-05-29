import React from "react";

import Produtos from "../../assets/eletronics.webp";

//Componente "Promotions" onde será exibido alguns dos produtos em promoção
const Promotions = () => {
  return (
    <div className="products-container" id="promotions">
      <h2>Queima de estoque!</h2>
      <div className="container">
        <div className="product">
          <img src={Produtos} alt="" />
          <h3>Titulo exemplo</h3>
          <p>Lorem ipslum lorem ipslum..</p>
          <button>Eu quero!</button>
        </div>
        <div className="product">
          <img src={Produtos} alt="" />
          <h3>Titulo exemplo</h3>
          <p>Lorem ipslum lorem ipslum..</p>
          <button>Eu quero!</button>
        </div>
        <div className="product">
          <img src={Produtos} alt="" />
          <h3>Titulo exemplo</h3>
          <p>Lorem ipslum lorem ipslum..</p>
          <button>Eu quero!</button>
        </div>
        <div className="product">
          <img src={Produtos} alt="" />
          <h3>Titulo exemplo</h3>
          <p>Lorem ipslum lorem ipslum..</p>
          <button>Eu quero!</button>
        </div>
      </div>
    </div>
  );
};

export default Promotions;
