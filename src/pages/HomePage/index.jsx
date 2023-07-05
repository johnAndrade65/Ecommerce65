import React from "react";

//Importação dos componentes
import Carousel from "../../components/Carousel";
import Highlights from "./../../components/Highlights";
import Promotions from "./../../components/Promotions";
import Products from "./../../components/Products";

//Página dedicada a páginia inicial da nossa web aplicação
const HomePage = () => {

  return (
    <div>
      <Carousel />
      <Highlights />
      <Promotions />
      <Products />
    </div>
  );
};

export default HomePage;
