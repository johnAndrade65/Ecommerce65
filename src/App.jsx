import './App.css';

// importação de componentes para montar a página home do webapp
import Header from './components/Header';
import Carousel from './components/Carousel';
import Highlights from './components/Highlights';
import Promotions from './components/Promotions';
import Products from './components/Products';
import Footer from './components/Footer';

// Componente onde será agrupado os componentes e será enviado para ser renderizado/montado a página home
const App = () => {
  return (
    <div className="App">
      <Header/>
      <Carousel/>
      <Highlights/>
      <Promotions/>
      <Products/>
      <Footer/>
    </div>
  )
}

export default App;
