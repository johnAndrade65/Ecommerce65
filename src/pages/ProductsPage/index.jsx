import React from "react";

//Importação dos componentes
import Products from './../../components/Products';
import Promotions from './../../components/Promotions';

//Página dedicada a exposição dos produtos dá nossa web aplicação
const ProductsPage = () => {

  return (
    <div className="Products">
      <Promotions/>
      <Products/>
    </div>
  );
};

export default ProductsPage;