import axios from 'axios';


export const GET_VIDEOGAMES = 'GET_VIDEOGAMES';
export const GET_ID = 'GET_ID';
export const ADD_VIDEOGAME ='ADD_VIDEOGAME';
export const GET_ALL_SERVER = 'GET_ALL_SERVER';
export const GET_ALL = 'GET_ALL';



// export const getVideogames = (payload)=>{

//     return{
//         type: GET_VIDEOGAMES,
//         payload: payload
//     }

// }

export const getVideogames =  (payload)=>{
    return dispatch => {
        return  axios.get(`http://localhost:3001/videogame` , payload)
        .then(response => dispatch ({
            type: GET_VIDEOGAMES,
            payload: response.data
        }))
    }
}

export const getId =  (id)=>{
    return dispatch => {
        return  axios.get(`http://localhost:3001/videogame/${Number(id)}`)
        .then(response => dispatch ({
            type: GET_ID,
            payload: response.data
        }))
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

export const getAll = ()=>{


    return (dispatch)=>{
       
        return axios.get('http://localhost:3001/videogame/')
        .then(response =>{
            response = dispatch({
                type: GET_ALL,
                payload: response.data
            })
        })
    }
}