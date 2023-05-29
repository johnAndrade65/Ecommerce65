import React from "react";

//Importação de imagens
import Produtos from "../../assets/kitchen.webp";

//Componente "Products" onde será exibido algusn dos produtos disponiveis
const Products = () => {
  return (
    <div className="products-container" id="products">
      <h2>Produtos em alta!</h2>
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

export default Products;
