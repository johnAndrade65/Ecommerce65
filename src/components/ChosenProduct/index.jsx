import React from "react";
import { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { ProductsContext } from "../../contexts";

const ChosenProduct = () => {
  const { productsDataVar, getProductData, products, capitalizeFirstLetter } = useContext(ProductsContext);
  //Uso do useParams para obter o valor do parametro "ProductName" dá URL: /productdetails/:productName
  const { productUrlName } = useParams();

  useEffect(() => {
    //Buscar os dados do produto com base no nome da URL
    const productNameUpperCase = capitalizeFirstLetter(productUrlName);

    const product = Object.values(products).find(
      (p) => p.name === productNameUpperCase
    );
    if (product) {
      //Se o produto for encontrado a function getProducts vai obter os dados(name, img, description e etc do produto) do produto de acordo com o valor da URL passada
      getProductData(product.name, product.img, product.description, product.price);
    }
  }, [productUrlName, products]);

  const productPurchased = () => {
    alert(`O produto "${productsDataVar.name}" foi comprado com sucesso!`)
  }

  return (
    <div className="container" id="ChosenProduct">
      <img src={productsDataVar.img} alt="" />
      <div>
        <h1>{productsDataVar.name}</h1>
        <p>{productsDataVar.price}</p>
        <p>{productsDataVar.description}</p>
        <button onClick={productPurchased}>Comprar!</button>
      </div>
    </div>
  );
};

export default ChosenProduct;
