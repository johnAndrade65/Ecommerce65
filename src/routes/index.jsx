import React from "react";

//Importação React-router-dom
import { BrowserRouter, Route, Routes } from "react-router-dom";

//Importação das páginas
import HomePage from "./../pages/HomePage";
import ProductsPage from "./../pages/ProductsPage";
import ProductsDetails from "../pages/ProductsDetails";

//Importação dos componentes
import Header from "./../components/Header";
import Footer from "./../components/Footer";

//Importação dos dados do useContext
import { useContext, useState, useEffect } from "react";
import { ProductsContext } from "../contexts/";

//Rotas/caminhos para páginas com react router
const RoutesApp = () => {
  const { productsDataVar } = useContext(ProductsContext);

  const [productUrl, setProductUrl] = useState('');

  useEffect(() => {
    setProductUrl(productsDataVar.name);
    console.log(productUrl);
  }, [productsDataVar.name]);

  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route
            path={`/productdetails/:productUrl`}
            element={<ProductsDetails />}
          />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
};

export default RoutesApp;
