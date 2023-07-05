import React from "react";
import { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { ProductsContext } from "../../contexts";

const ChosenProduct = () => {
  const { productsDataVar, getProductData, products } = useContext(ProductsContext);
  //Uso do useParams para obter o valor do parametro "ProductName" dá URL: /productdetails/:productName
  const { productName } = useParams();

  useEffect(() => {
    //Buscar os dados do produto com base no nome da URL
    const product = Object.values(products).find(
      (p) => p.name === productName
    );
    if (product) {
      //Se o produto for encontrado a function getProducts vai obter os dados(name, img e description) do produto de acordo com o valor da URL passada
      getProductData(product.name, product.img, product.description);
      console.log(product);
    }
  }, [productName, products]);

  return (
    <div className="container" id="ChosenProduct">
      <img src={productsDataVar.img} alt="" />
      <div>
        <h1>{productsDataVar.name}</h1>
        <p>{productsDataVar.description}</p>
        <button>Comprar!</button>
      </div>
    </div>
  );
};

export default ChosenProduct;
