import React from "react";

//Importação dos componentes
import Carousel from "../../components/Carousel";
import Categories from "./../../components/Categories";
import Promotions from "./../../components/Promotions";
import Products from "./../../components/Products";

//Página dedicada a páginia inicial da nossa web aplicação
const HomePage = () => {

  return (
    <div>
      <Carousel />
      <Categories />
      <Promotions />
      <Products />
    </div>
  );
};

export default HomePage;
