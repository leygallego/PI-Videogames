import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { getAll } from './actions';

function Search() {

    const [juegos, setJuegos] = useState();


    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(getAll())
    },[dispatch])
    
    const games = useSelector(state => state.allGames)


    const [busqueda, setBusqueda] = useState()

    const handleOnChange = (e)=>{
        setBusqueda(e.target.value)
    }

   


    return (
        <div>
            <div>
            <select>
                <option value="action">Acción </option>
                <option value="shooter">Tirador</option>
                <option selected value="adventure">Aventura</option>
                <option value="sports">Deportes</option>
            </select>

            </div>
        <input type="button" value='A-Z' />
        <input type="text" placeholder="Busca videojuego por nombre, género" onChange={(e)=>{handleOnChange(e)}}/>
        <input type="button" value='Z-A' />
        <div>
            {games ? games.map(el=>{
                if (el.nombre.includes(busqueda)) {
                    return (
                        <Link key={el.id} to={`/detalle/${el.id}`} >
                        <div key={el.id}>
                          {el.nombre}  
                        </div>
                        </Link>
                    )
                }
                
            }) : <div></div> } 
        </div>
        </div>
    )
}

export default Search
