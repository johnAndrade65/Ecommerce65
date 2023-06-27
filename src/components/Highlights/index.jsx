import React from "react";

//Importação de images como componentes para serem renderizadas no Highlights/destaques
import { ProductsContext } from "../../contexts";
import { useContext } from 'react';

const Highlights = () => {

  const { products } = useContext(ProductsContext);

  return (
    <div className="Highlights" id="highlights">
      <div className="container">
        <div className="highlight-item">
          <img src={products[1].img} alt={products[1].name} />
        </div>
        <div className="highlight-item">
          <img src={products[3].img} alt={products[3].name}/>
        </div>
        <div className="highlight-item">
          <img src={products[2].img} alt={products[2].name}/>
        </div>
        <div className="highlight-item">
          <img src={products[4].img} alt={products[4].name}/>
        </div>
      </div>
    </div>
  );
};

export default Highlights;
