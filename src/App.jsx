import "./App.css";

// importação do React-Router
import RoutesApp from "./routes";

//Uso do provider para o compartilhamento de dados entre a aplicação
import ProductsProvider from "./contexts";

// Componente onde será agrupado os componentes e será enviado para ser renderizado/montado a página home
const App = () => {

  return (
    <ProductsProvider>
      <div className="App">
        <RoutesApp />
      </div>
    </ProductsProvider>
  );
};

export default App;
