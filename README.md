﻿﻿# Ecommerce65

<p>Ainda em construção! criado por para aplicar conceitos de React JS + React hooks + React router-dom!</p>

## Front-end desenvolvido com React JS

<p>Deploy: https://ecommerce65.netlify.app</p>
<img src="./public/assets/Readme.jpg"/></br>

## Skills usadas

<div style="display: inline_block"><br/>
    <img alt="react" src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB"/>
</div>

## Correção de bugs, versão 0.0.3.1:

<ol>
  <li>- Quando acessar a página "HomePage" o valor dá categoria selecionada anteriormente será zerado.</li>
  <li>- Criação do esqueleto xhtml da página de Login.</li>
  <li>- Criação do componente "FilteredProducts", onde irá exibir os produtos filtrados.</li>
  <li>- Criação do página "CategoryPage", onde irá exibir o compoenente "FilteredProducts".</li>
  <li>- Criação da arrow function "getCategoryName" para obter o nome dá categoria selecionada.</li>
  <li>- Mudança no nome do componente "Highlights"(anteriormente) para "Categories"(Nome atual).</li>
  <li>- Adição do método "Link" do react-router-dom no Navbar do site para acessar a página "CategoryPage".</li>
</ol>

## versão 0.0.3.1, ainda em construção:

<ol>
  <li>- Correção no CSS3 do ".products-container .container .product" dos componentes Products e Promotions.</li>
  <li>- Mudança no CSS, antes usavamos "display: flex" para organizar o layout de "#ChosenProduct div {}", agora usamos o "display: grid".</li>
  <li>- Adição de preços nos produtos, tanto nas páginas "HomePage", "ProductsPage" como também na página "ProductsDetails".</li>
  <li>- Mudança na forma de usar a arrow function "getProductData()", agora usampos ela para pegar o produto de acordo com a URL acessada, essa arrow function não é  mais usada diretamente atráves do botão "Comprar" nas páginas "HomePage" e "ProductsPage".</li>
  <li>- Criação de URLS personalizadas para os produtos atráves do React router dom.</li>
  <li>- Possibilidade de acessar algum produto especifico atráves dá sua URL personalizada.</li>
  <li>- Verificação do parametro da URL para pesquisar os dados desse produto e exibi-lo no componente "Chosen Product".</li>
  <li>- Componente" ChosenProduct" irá exibir o produto selecionado na página principal.</li>
  <li>- Página "ProductsDetails" irá exibir o componente "ChosenProduct".</li>
  <li>- Resposividade criada para a página "ProductsDetails".</li>
  <li>- As urls personalizadas para cada produto ainda estão em desenvolvimento, aguarde por futuras atualizações.</li>
  <li>- Componente Promotions só irá renderizar os 4 primeiros produtos do objeto "products".</li>
  <li>- Componente Products irá renderizar apenas 6 produtos por vez, em ordem aleatoria do objeto "products" que simula um JSON.</li>
  <li>- Correção de erros de estilização no componente "Products" e "Promotions" no botão de "comprar agora" na versão mobile onde o texto estava estourando para fora do botão.</li>
  <li>- Mudanças de estilização no componente "Products" e "Promotions" nas resoluções maiores que 1000vw(largura), agora usamos "display:grid" para organizar os produtos, anteriormente usavamos "display:flex".</li>
  <li>- Seções Header, Banner, Products, Highlights e Footer.</li>
  <li>- Responsividade com diversos tamanhos de tela!.</li>
  <li>- Banners já funcionando!.</li>
  <li>- Botão do menu mobile já funcionando!.</li>
  <li>- Duas páginas disponiveis, página Home e página Products.</li>
  <li>- Adição de animações criadas com CSS puro, sem dependência de bibliotecas externas.</li>
  <li>- Uso do display-grid para organizar os produtos em 2X2(2 linhas X 2 colunas).</li>
  <li>- Correção de bug no tamanho da font-text da logo(Estava muito pequena em alguns dispositivos).</li>
  <li>- Uso de Context api e props para compartilhar dados entre os componentes.</li>
  <li>- Uso do método "map" para percorrer o objeto que simula um JSON para pegar os dados dos produtos e renderizar-los.</li>
  <li>- Compartilhamento de dados atráves do Context api e props.</li>
</ol>

## Rodar o Ecommerce:

<ol>
  <li>Crie a (tela-de-comandos/prompt) no diretorio principal do projeto.</li>
  <li>Instale as dependencias: npm install</li>
  <li>Rode projeto: npm run dev</li>
</ol>
