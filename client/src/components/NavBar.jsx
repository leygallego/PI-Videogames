import { NavLink } from 'react-router-dom';
import './NavBar.css';

const NavBar = () => {
    return (
        <div className="nav">
           
                
                    <NavLink exact to="/" className="enlace">Home</NavLink>
                
                
                    <NavLink exact to="/detalle/:id" className="enlace">Detalle de VideoJuego</NavLink>
                
                
                    <NavLink exact to="/crear" className="enlace">Crear VideoJuego</NavLink>
                
            
        </div>
    );
}

export default NavBar;