import React from 'react';
import Videojuegos from './Videojuegos';
import './Search.css';
import Search from './Search';
import './Home.css';



function Home() {

    

    return (
       <div>
           
              
               <h1>VIDEOJUEGOS</h1>

                    <div className="main">

                        <div className="areaBusqueda">
                            <Search />
                        </div>

                        <div className="areaVideogames">
                            <Videojuegos />
                        </div>

                    </div>

                    


           
       </div> 
    )
}

export default Home
