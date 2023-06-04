import React from "react";

//Importação de images como componentes para serem renderizadas no Highlights/destaques
import { ProductsContext } from "../../contexts";
import { useContext } from 'react';

//Importação das imagens
import EletronicsImg from '../../assets/eletronics.webp';
import BathroomImg from '../../assets/bathroom.jpg';
import KitchenImg from '../../assets/kitchen.webp';
import PetsImg from '../../assets/pets.jpg';

const Highlights = () => {

  const { products } = useContext(ProductsContext);

  return (
    <div className="Highlights" id="highlights">
      <div className="container">
        <div className="highlight-item">
          <img src={EletronicsImg} alt={products.name.eletronics} />
        </div>
        <div className="highlight-item">
          <img src={BathroomImg} alt={products.name.bathroom}/>
        </div>
        <div className="highlight-item">
          <img src={KitchenImg} alt={products.name.kitchen}/>
        </div>
        <div className="highlight-item">
          <img src={PetsImg} alt={products.name.pets}/>
        </div>
      </div>
    </div>
  );
};

export default Highlights;
