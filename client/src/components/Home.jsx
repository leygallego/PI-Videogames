import React from 'react';
import Videojuegos from './Videojuegos';



function Home() {

    

    return (
       <div>
           
               {/* {selector.map((ele, index)=>{
                    return(
                        <li key={index}>
                            {ele.nombre}
                        
                        </li>
                    )
               })} */}
               <h1>VIDEOJUEGOS</h1>

                <Videojuegos />

           
       </div> 
    )
}

export default Home
