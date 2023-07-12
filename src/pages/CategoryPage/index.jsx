import React from 'react'

import Categories from '../../components/Categories';
import FilteredProducts from '../../components/FilteredProducts';

//Página onde será exibido as categorias e os produtos filtrados
const CategoryPage = () => {
  return (
    <div>
        <Categories/>
        <FilteredProducts/>
    </div>
  )
}

export default CategoryPage;
