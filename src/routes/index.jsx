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

//Rotas/caminhos para páginas com react router
const RoutesApp = () => {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route
            path="/productdetails/:productName"
            element={<ProductsDetails />}
          />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
};

export default RoutesApp;
