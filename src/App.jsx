import "./App.css";

// importação do React-Router
import RoutesApp from "./routes";

// Componente onde será agrupado os componentes e será enviado para ser renderizado/montado a página home
const App = () => {
  return (
    <div className="App">
      <RoutesApp />
    </div>
  );
};

export default App;
