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
      img:  EletronicsImg,
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
      img:  PetsImg,
    },
    5: {
      name: "Eletronicos 2",
      description: "Produtos eletronico..",
      img:  EletronicsImg,
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
      img:  PetsImg,
    }
  });

  return (
    <ProductsContext.Provider value={{ products }}>
      {children}
    </ProductsContext.Provider>
  );
};

export default ProductsProvider;
