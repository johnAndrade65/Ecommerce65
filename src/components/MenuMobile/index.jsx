import React, { useState } from "react";

//Icone do menu para dispositivos moveis
import MenuMobileIcon from "../../assets/menu-icon.png";

//Componente Link do react-router-dom para apontar qual página deve ir quando clicado
import { Link } from "react-router-dom";

const MenuMobile = () => {
  //useState para definir o estado menuOpen como false
  const [menuOpen, setMenuOpen] = useState(false);

  //Função para manipular o estado do menuOpen
  const handdleMenu = () => {
    setMenuOpen(!menuOpen); //Inverte o valor do state menuOpen
  };

  return (
    <div className="MenuMobile">
      <button onClick={handdleMenu}>
        <img src={MenuMobileIcon} alt="" />
      </button>
      {menuOpen && (
        <div className="menu-mobile-content">
          <h1>
            <Link to="/">Ecommerce65</Link>
          </h1>
          <button onClick={handdleMenu}>X</button>
          <ul className="menu-mobile-items">
            <li>
              <Link to="/products">Produtos</Link>
            </li>
            <li>
              <a href="#promotions">Promoções</a>
            </li>
            <li>
              <a href="#highlights">Categorias</a>
            </li>
            <li>
              <Link>Login</Link>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default MenuMobile;
