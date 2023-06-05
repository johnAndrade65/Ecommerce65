import { useState, createContext } from "react";

export const ProductsContext = createContext({});

//Uso do Context Api para compartilhar os valores do usestate "products" com outros componentes
const ProductsProvider = ({ children }) => {
  const [products, setProducts] = useState({
    1: {
      name: "Eletronicos",
      price: 10,
      description: "Produtos eletronico..",
      img:  "/public/assets/eletronics.png",
    },
    2: {
      name: "Cozinha",
      price: 20,
      description: "Produtos de cozinha..",
      img: "/public/assets/kitchen.png",
    },
    3: {
      name: "Banheiro",
      price: 20,
      description: "Produtos para banheiro..",
      img: "/public/assets/bathroom.png",
    },
    4: {
      name: "Pets",
      price: 10,
      description: "Produtos para Pets..",
      img:  "/public/assets/pets.png",
    }
  });

  return (
    <ProductsContext.Provider value={{ products }}>
      {children}
    </ProductsContext.Provider>
  );
};

export default ProductsProvider;
