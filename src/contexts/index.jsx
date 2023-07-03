import { useState, useEffect, createContext } from "react";

//Imagens dos produtos
import EletronicsImg from "./../../public/assets/eletronics.png";
import BathroomImg from "./../../public/assets/bathroom.png";
import KitchenImg from "./../../public/assets/kitchen.png";
import PetsImg from "./../../public/assets/pets.png";

//Exportando o context de dados para ser acessados em outros elementos da aplicação
export const ProductsContext = createContext({});

//Uso do Context Api para compartilhar os valores do usestate "products" com outros componentes
const ProductsProvider = ({ children }) => {
  const initialProductsDataVar = {
    name: "",
    img: "",
    description: "",
  };

  const [products, setProducts] = useState({
    1: {
      name: "Eletronicos",
      description: "Produtos eletronico..",
      img: EletronicsImg,
    },
    2: {
      name: "Cozinha",
      description: "Produtos de cozinha..",
      img: KitchenImg,
    },
    3: {
      name: "Banheiro",
      description: "Produtos para banheiro..",
      img: BathroomImg,
    },
    4: {
      name: "Pets",
      description: "Produtos para Pets..",
      img: PetsImg,
    },
    5: {
      name: "Eletronicos 2",
      description: "Produtos eletronico..",
      img: EletronicsImg,
    },
    6: {
      name: "Cozinha 2",
      description: "Produtos de cozinha..",
      img: KitchenImg,
    },
    7: {
      name: "Banheiro 2",
      description: "Produtos para banheiro..",
      img: BathroomImg,
    },
    8: {
      name: "Pets 2",
      description: "Produtos para Pets..",
      img: PetsImg,
    }
  });

  //useState para armazenar os dados do produto escolhido e exibi-lo
  const [productsDataVar, setProductsDataVar] = useState(
    initialProductsDataVar
  );

  useEffect(() => {
    //Recuperar o valor armazenado do local storage
    const storedProductsDataVar = localStorage.getItem("productsDataVar");

    //Verificar se o valor existe no local storage e definir o estado
    if (storedProductsDataVar) {
      setProductsDataVar(JSON.parse(storedProductsDataVar));
    }
  }, []);

  const handleButton = (name, img, description) => {
    const newProductsDataVar = { name, img, description };

    //Atualizar o estado
    setProductsDataVar(newProductsDataVar);

    //Armazenar o valor no local storage
    localStorage.setItem("productsDataVar", JSON.stringify(newProductsDataVar));
  };

  return (
    <ProductsContext.Provider
      value={{ products, handleButton, productsDataVar }}
    >
      {children}
    </ProductsContext.Provider>
  );
};

export default ProductsProvider;
