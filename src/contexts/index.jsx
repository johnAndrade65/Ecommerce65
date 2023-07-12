import { useState, createContext, useEffect } from "react";

//Imagens dos produtos
import EletronicsImg from "./../../public/assets/eletronics.png";
import BathroomImg from "./../../public/assets/bathroom.png";
import KitchenImg from "./../../public/assets/kitchen.png";
import PetsImg from "./../../public/assets/pets.png";

//Exportando o context de dados para ser acessados em outros elementos da aplicação
export const ProductsContext = createContext({});

//Uso do Context Api para compartilhar os valores do usestate "products" com outros componentes
const ProductsProvider = ({ children }) => {
  const [products, setProducts] = useState({
    1: {
      id: 1,
      name: "Eletronicos",
      description: "Produtos eletronico..",
      img: EletronicsImg,
      price: "15,00 R$"
    },
    2: {
      id: 2,
      name: "Cozinha",
      description: "Produtos de cozinha..",
      img: KitchenImg,
      price: "9,00 R$"
    },
    3: {
      id: 3,
      name: "Banheiro",
      description: "Produtos para banheiro..",
      img: BathroomImg,
      price: "10,00 R$"
    },
    4: {
      id: 4,
      name: "Pets",
      description: "Produtos para Pets..",
      img: PetsImg,
      price: "8,00 R$"
    },
    5: {
      id: 5,
      name: "Eletronicos 2",
      description: "Produtos eletronico..",
      img: EletronicsImg,
      price: "17,00 R$"
    },
    6: {
      id: 6,
      name: "Cozinha 2",
      description: "Produtos de cozinha..",
      img: KitchenImg,
      price: "13,00 R$"
    },
    7: {
      id: 7,
      name: "Banheiro 2",
      description: "Produtos para banheiro..",
      img: BathroomImg,
      price: "15,00 R$"
    },
    8: {
      id: 8,
      name: "Pets 2",
      description: "Produtos para Pets..",
      img: PetsImg,
      price: "50,00 R$"
    },
    9: {
      id: 9,
      name: "Eletronicos 3",
      description: "Produtos eletronico..",
      img: EletronicsImg,
      price: "20,00 R$"
    },
    10: {
      id: 10,
      name: "Cozinha 3",
      description: "Produtos de cozinha..",
      img: KitchenImg,
      price: "19,00 R$"
    },
    11: {
      id: 11,
      name: "Banheiro 3",
      description: "Produtos para banheiro..",
      img: BathroomImg,
      price: "35,00 R$"
    },
    12: {
      id: 12,
      name: "Pets 3",
      description: "Produtos para Pets..",
      img: PetsImg,
      price: "65,00 R$"
    }
  });

  //useState criada para armazenar o valor de um produto a ser exibido no componente ChosenProduct(Produto escolhido)
  const [productsDataVar, setProductsDataVar] = useState("");

  //useState criada para armazenar o valor do nome dá categoria selecionada
  const [ categorySelectedName, setCategorySelectedName ] = useState("");
  
  //Arrow function para obter os dados do produto selecionado para comprar
  const getProductData = (name, img, description, price) => {
    const newProductData = { name, img, description, price };

    //Atualizar o valor do useState "productDataVar"
    setProductsDataVar(newProductData);
  };

  //Arrow function criada para transformar a primeira letra do valor de alguma variavel em maiuscula
  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  //Arrow function criada para pegar o nome dá categoria selecionada e armazenar no useState "categorySelectedName"
  const getCategoryName = (categoryName) => {
     //Atualizar o valor do useState "categorySelectedName"
    setCategorySelectedName(categoryName);
  };

  return (
    <ProductsContext.Provider
      value={{
        products,
        getProductData,
        productsDataVar,
        setProductsDataVar,
        capitalizeFirstLetter,
        categorySelectedName,
        getCategoryName
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
};

export default ProductsProvider;
