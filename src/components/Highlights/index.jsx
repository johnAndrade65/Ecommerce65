import React from "react";

//Importação de images como componentes para serem renderizadas no Highlights/destaques
import Eletronics from "../../assets/eletronics.webp";
import Kitchen from "../../assets/kitchen.webp";
import Bathroom from "../../assets/bathroom.jpg";
import Pets from "../../assets/pets.jpg";

const Highlights = () => {
  return (
    <div className="Highlights" id="highlights">
      <div className="container">
        <div className="highlight-item">
          <img src={Eletronics} alt="" />
        </div>
        <div className="highlight-item">
          <img src={Kitchen} alt="" />
        </div>
        <div className="highlight-item">
          <img src={Bathroom} alt="" />
        </div>
        <div className="highlight-item">
          <img src={Pets} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Highlights;
