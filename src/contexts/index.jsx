import { useState, createContext } from "react";

export const ProductsContext = createContext({});

//Uso do Context Api para compartilhar os valores do usestate "products" com outros componentes
const ProductsProvider = ({children}) => {
    
    const [products, setProducts] = useState({
        name: {
          eletronics: "Eletronicos",
          kitchen: "Cozinha"
        }
      });

    return(
        <ProductsContext.Provider value={{products}}>
            {children}
        </ProductsContext.Provider>
    )
}

export default ProductsProvider;