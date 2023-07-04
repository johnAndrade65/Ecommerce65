import React from "react";

//Importação dos componentes
import Carousel from "../../components/Carousel";
import Highlights from "./../../components/Highlights";
import Promotions from "./../../components/Promotions";
import Products from "./../../components/Products";

//Contexto usado para o compartilhamento de dados entre nossa aplicação
import { ProductsContext } from "../../contexts/";
import { useContext } from "react";

//Página dedicada a páginia inicial da nossa web aplicação
const HomePage = () => {

  const { productsDataVar } = useContext(ProductsContext);

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
