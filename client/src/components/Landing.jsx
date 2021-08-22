import React from 'react';
import './Landing.css';
import { NavLink } from 'react-router-dom';


function Landing() {
    return (
      <div className="landing" >
          <NavLink exact to={"/home"}>
          <button className="myButton" >
              Entra al mundo de Videojuegos
          </button>
          </NavLink>
          
      </div>  
    )
}

export default Landing
