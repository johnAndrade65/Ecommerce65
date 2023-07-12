import React, { useContext, useEffect } from "react";
import { ProductsContext } from "../../contexts";

//Importação dos componentes
import Carousel from "../../components/Carousel";
import Categories from "./../../components/Categories";
import Promotions from "./../../components/Promotions";
import Products from "./../../components/Products";

//Página dedicada a páginia inicial da nossa web aplicação
const HomePage = () => {
  const { categorySelectedName, setCategorySelectedName } = useContext(ProductsContext);

  //Será chamado ao renderizar a página "HomePage" para zerar o valor do useState que armazena a categoria selecionada
  useEffect(() =>{ 
    setCategorySelectedName("");
     }, [categorySelectedName]); 

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
