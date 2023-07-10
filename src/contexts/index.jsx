import { useState, createContext } from "react";

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
      name: "Eletronicos",
      description: "Produtos eletronico..",
      img: EletronicsImg,
      price: "15,00 R$"
    },
    2: {
      name: "Cozinha",
      description: "Produtos de cozinha..",
      img: KitchenImg,
      price: "13,00 R$"
    },
    3: {
      name: "Banheiro",
      description: "Produtos para banheiro..",
      img: BathroomImg,
      price: "10,00 R$"
    },
    4: {
      name: "Pets",
      description: "Produtos para Pets..",
      img: PetsImg,
      price: "8,00 R$"
    },
    5: {
      name: "Eletronicos 2",
      description: "Produtos eletronico..",
      img: EletronicsImg,
      price: "17,00 R$"
    },
    6: {
      name: "Cozinha 2",
      description: "Produtos de cozinha..",
      img: KitchenImg,
      price: "9,00 R$"
    },
    7: {
      name: "Banheiro 2",
      description: "Produtos para banheiro..",
      img: BathroomImg,
      price: "10,00 R$"
    },
    8: {
      name: "Pets 2",
      description: "Produtos para Pets..",
      img: PetsImg,
      price: "50,00 R$"
    },
  });

  //useState criada para armazenar o valor de um produto a ser exibido no componente ChosenProduct(Produto escolhido)
  const [productsDataVar, setProductsDataVar] = useState("");

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

  return (
    <ProductsContext.Provider
      value={{
        products,
        getProductData,
        productsDataVar,
        setProductsDataVar,
        capitalizeFirstLetter
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
};

export default ProductsProvider;
