import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getVideogames } from './actions';
import { NavLink } from 'react-router-dom';
import axios from 'axios';
import './Videojuegos.css'

function Videojuegos() {
    const selector = useSelector( state =>{
        return state.videoGames;
    })

    const dispatch = useDispatch();

    // useEffect(()=>{
    //     axios('http://localhost:3001/videogame')
    //     .then((videos)=>{
    //         dispatch(getVideogames(videos.data))
    //     })
    // },[dispatch])

    useEffect(() => {
        dispatch(getVideogames())
    }, [dispatch])
    

 return (
    <div className="card">
        
            {selector.map((ele, index)=>{
                // console.log(ele);
                 return(
                     <div key={index}>

                         <h3>{ele.nombre}</h3>
                         <NavLink exact to={`/detalle/${ele.id}`}>
                         <img className='img' src={ele.vgImagen} alt={ele.nombre} />
                         </NavLink>
                         
                         
                         
                     </div>

                    // <div key={index}>

                    //      <h3>{ele.name}</h3>
                    //      <NavLink exact to={`/detalle/${ele.id}`}>
                    //      <img className='img' src={ele.background_image} alt={ele.name} />
                    //      </NavLink>
                         
                         
                         
                    //  </div>
                 )
            })}
        
    </div> 
 )
}

export default Videojuegos
