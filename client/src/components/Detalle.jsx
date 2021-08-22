import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { getId } from './actions';


function Detalle() {
    const [detalle, setDetalle] = useState({})


    let { id } = useParams()
    const dispatch = useDispatch();

    useEffect(() => {
        axios('http://localhost:3001/videogame/' + id)
            .then((video) => {
                console.log(video.data);
                setDetalle(video.data);
                dispatch(getId(video.data))
            })
    }, [dispatch, id])


    const detailId = useSelector(state => {
        return state.detail
    })
    console.log(detailId);



    return (
        <div>
            <h1>Aquí va el detalle</h1>
            <h1>{id}</h1>
            <h1>{detalle.nombre}</h1>
            <h1>{detalle.descripcion}</h1>
            <h1>{detalle.fechaLanzamiento}</h1>
            <h1>{detalle.rating}</h1>
            <img src={detalle.vgImagen} alt='imagen videojuego' />


        </div>
    )
}

export default Detalle
