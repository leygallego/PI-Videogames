import { GET_VIDEOGAMES, GET_ID, ADD_VIDEOGAME, GET_ALL_SERVER, GET_ALL} from "../actions";
import axios from 'axios';
const initialState={

    videoGames: [],
    detail: [],
    allGames: []
}


export default function rootReducer(state = initialState, action) {

    switch (action.type) {
        case GET_VIDEOGAMES:
            return{
                ...state,
                videoGames: action.payload
            }
        case GET_ID:
            return{
                ...state,
                detail: action.payload
                    }
            case ADD_VIDEOGAME:
                return{
                    ...state,
                    videoGames: [...state.videoGames, action.payload]
                }
                
                    case GET_ALL:
                        return {
                            ...state,
                            allGames: action.payload
                        }


            
    
        default: return state
    }
    
}