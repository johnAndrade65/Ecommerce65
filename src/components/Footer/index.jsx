import React from "react";

//Componente Footer mais conhecido como Rodapé do site
const Footer = () => {
  return (
    <footer className="Footer">
      <div className="container">
        <div className="footer-content">
          <h3>Informações</h3>
          <ul>
            <li>
              <a href="#">Sobre nós</a>
            </li>
            <li>
              <a href="#">Política de Privacidade</a>
            </li>
            <li>
              <a href="#">Termos e Condições</a>
            </li>
          </ul>
        </div>
        <div className="footer-content">
          <h3>Suporte ao cliente</h3>
          <ul>
            <li>
              <a href="">Central de ajuda</a>
            </li>
            <li>
              <a href="">Contato</a>
            </li>
            <li>
              <a href="">FAQ</a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
