import './App.css';
import Home from './components/Home';
import NavBar from './components/NavBar';
import Detalle from './components/Detalle';
import Crear from './components/Crear';
import { BrowserRouter as Router, Route } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <Router>
      <Route  path="/" component={NavBar}></Route>

      <Route exact path="/" component={Home}></Route>

      <Route exact path="/crear" component={Crear}></Route>

      <Route exact path="/detalle/:id" component={Detalle}></Route>

      </Router>
    </div>
  );
}

export default App;
