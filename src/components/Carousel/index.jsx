import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import ImgBanner from '../../../public/assets/banner.jpg';

//Carousel criado com a biblioteca "slick-carousel para agilizar o desenvolvimento do carousel"
const Carousel = () => {

    //Configurações do carousel
    const settings = {
      dots: true, //Exibe os pontos de navegação do carousel
      infinite: true, //Navegação contínua
      speed: 500, //Velocidade de transição do carousel
      slidesToShow: 1, //Número de slides a serem exibidos ao mesmo tempo
      slidesToScroll: 1, //Número de slides a serem rolados por vez
      responsive: [
        {
          breakpoint: 768, //Responsividade para telas menores
          settings: {
            slidesToShow: 1
          }
        },
        {
          breakpoint: 480, //Responsividade para telas ainda menores
          settings: {
            slidesToShow: 1
          }
        }
      ]
    };
  
    return (
      <Slider className='Carousel' {...settings}>
        <div>
          <img src={ImgBanner} alt="Imagem 1" />
        </div>
        <div>
          <img src={ImgBanner} alt="Imagem 2" />
        </div>
        <div>
          <img src={ImgBanner} alt="Imagem 3" />
        </div>
      </Slider>
    );
  }
  
  export default Carousel;