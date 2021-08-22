import React, { useState } from 'react';
import './Crear.css';
import { connect } from 'react-redux';
import { useDispatch } from 'react-redux';
import { addVideoGame } from './actions';



function Crear() {

    const dispatch = useDispatch();

    const [crear, setCrear] = useState({
        nombre: "",
        descripcion: "",
        fechaLanzamiento: "",
        rating: 0,
        vgImagen: ""
        // pasoAPaso:[]
    })


    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(addVideoGame(crear))
        setCrear({
            nombre: "",
            descripcion: "",
            fechaLanzamiento: "",
            rating: 0,
            vgImagen: ""
        })
    }

    const handleChange = (e) => {
        setCrear({
            ...crear,
            [e.target.name]: e.target.value
        })
        console.log(crear);
    }

    return (

        <div className="content">

            <h1 className="logo">Crea <span>Videojuego</span> </h1>

            <div className="contact-wraper">

                <div className="contact-form">

                    <form action="" onSubmit={(e) => { handleSubmit(e) }}>
                        <p>
                        <label>Nombre</label>
                        <input type="text"
                            name="nombre"
                            onChange={e => handleChange(e)} /> <br /><br />
                        </p>
                            <p>
                            <label>Descripción</label>
                        <input type="text" name="descripcion" onChange={e => handleChange(e)} /> <br /><br />
                            </p>
                        <p>
                        <label>Fecha de Lanzamiento</label>
                        <input type="text" name="fechaLanzamiento" onChange={e => handleChange(e)} /> <br /><br />
                        </p>
                        <p>
                        <label>Puntaje de Calificación</label>
                        <input type="text" name="rating" onChange={e => handleChange(e)} /> <br /><br />
                        </p>
                        <p>
                        <label>URL ubicación de Imagen</label>
                        <input type="text" name="vgImagen" onChange={e => handleChange(e)} /> <br /><br />
                        </p>
                        {/* <p>
                        <label>Paso a Paso</label>
                        <input type="text" name="pasoAPaso" onChange={e => handleChange(e)} /> <br /><br />
                        </p> */}

                        {/* <input type="submit" value='Create' /> */}
                        <p className="block">
                        <button value='Create' type='submit'>
                            Crear Video Juego
                        </button>
                    </p>
                    </form>
                </div>
            </div>
      </div>
    )
}

export default connect()(Crear);
