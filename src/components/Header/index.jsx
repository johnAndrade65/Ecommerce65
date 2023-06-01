import React from "react";

//importação dos componentes Menu para o Header
import MenuDefault from "../MenuDefault";
import MenuMobile from "../MenuMobile";

import { Link } from "react-router-dom";

//Importação do useState e useEffects
import { useState, useEffect } from "react";

const Header = () => {
  //State para verificar a largura da tela
  const [isWideScreen, setIsWideScreen] = useState(window.innerWidth > 1000);

  //useEffect verificar se a largura da tela voltou ao padrão
  useEffect(() => {
    const handleResize = () => {
      setIsWideScreen(window.innerWidth > 1000);
    };

    window.addEventListener("resize", handleResize);

    // Limpa o event listener quando o componente é desmontado
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);


  //Retornando componente com condicional para verificar qual menu será exibido
  return (
    <header className="Header-bg">
      <div className="container">
        <h1><Link to="/">Ecommerce65</Link></h1>
        <div className="header-menu">
          {isWideScreen ? <MenuDefault /> : <MenuMobile />}
        </div>
      </div>
    </header>
  );
};

export default Header;
