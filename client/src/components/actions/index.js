import axios from 'axios';


export const GET_VIDEOGAMES = 'GET_VIDEOGAMES';
export const GET_ID = 'GET_ID';
export const ADD_VIDEOGAME ='ADD_VIDEOGAME'



export const getVideogames = (payload)=>{

    return{
        type: GET_VIDEOGAMES,
        payload: payload
    }

}

export const getId = (payload)=>{
    return{
        type: GET_ID,
        payload: payload
    }
}

export const addVideoGame = (payload)=>{

    return async (dispatch, getState)=>{
        dispatch({
            type: ADD_VIDEOGAME,
        });
        await axios.post('http://localhost:3001/videogame', payload)
        .then((response)=>{
            console.log("Registrado correctamente");
        })
    }


}