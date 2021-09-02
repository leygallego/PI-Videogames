import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getId } from './actions';
// import { useHistory } from 'react-router-dom';  

import './Detalle.css'


function Detalle() {


    let { id } = useParams();

    // const history = useHistory();
    const dispatch = useDispatch();
    const detailId = useSelector(state => {
        return state.detail
    })
    

    useEffect(() => {
        dispatch(getId(id))
    }, [id, dispatch])


    // const goBack = () => {
    //     history.goBack();
    // }
    


    return (
        <div className="principal">
            <div className="detalle">
                <h1>{detailId.id}</h1>
                <h1>{detailId.name}</h1>
                <h2>{detailId.description}</h2>
                <h3>{detailId.released}</h3>
                <h3>{detailId.platforms[0]["platform"]["name"]}</h3>
                <h3>{detailId.rating}</h3>
            </div>
            <div className="imagen">
                <img src={detailId.background_image} alt= {`imagen ${detailId.name}`} />
            </div>


        </div>
    )
}

export default Detalle
