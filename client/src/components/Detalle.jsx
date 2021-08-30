import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { getId } from './actions';
import './Detalle.css'


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
        <div className="principal">
            <div className="detalle">
                {/* <h1>{id}</h1> */}
                <h1>{detalle.nombre}</h1>
                <h2>{detalle.descripcion}</h2>
                <h3>{detalle.fechaLanzamiento}</h3>
                {/* <h3>{detalle.plataformas}</h3> */}
                <h3>{detalle.rating}</h3>
            </div>
            <div className="imagen">
                <img src={detalle.vgImagen} alt= {`imagen ${detalle.nombre}`} />
            </div>


        </div>
    )
}

export default Detalle
