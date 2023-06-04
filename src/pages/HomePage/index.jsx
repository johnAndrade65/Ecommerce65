import React from 'react';

import { ProductsContext } from '../../contexts';
import { useContext } from 'react';

//Importação dos componentes
import Carousel from '../../components/Carousel';
import Highlights from './../../components/Highlights';
import Promotions from './../../components/Promotions';
import Products from './../../components/Products';

//Página dedicada a páginia inicial da nossa web aplicação
const HomePage = () => {

  const { products } = useContext(ProductsContext);

  return (
    <div>
      <Carousel/>
      <Highlights products={products}/>
      <Promotions products={products}/>
      <Products products={products}/>
    </div>
  );
};

export default HomePage;