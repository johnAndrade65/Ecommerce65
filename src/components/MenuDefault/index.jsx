import React from 'react';

//Importação do icone do perfil de usuario
import ProfileImg from "../../assets/Profile-picture.png";

//Menu default
const MenuDefault = () => {
  return (
    <div className='header-menu'>
        <ul>
            <li>
              <a href="#products">Produtos</a>
            </li>
            <li>
              <a href="#promotions">Promoções</a>
            </li>
            <li>
              <a href="#highlights">Categorias</a>
            </li>
            <li>
              <a href="">Sobre</a>
            </li>
          </ul>
          <div className="user-icon">
            <img src={ProfileImg} alt="user-picture" />
          </div>
    </div>
  )
}

export default MenuDefault;