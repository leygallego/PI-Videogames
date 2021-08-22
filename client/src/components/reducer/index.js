import { GET_VIDEOGAMES, GET_ID, ADD_VIDEOGAME} from "../actions";

const initialState={

    videoGames: [],
    detail: []
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
            
    
        default: return state
    }
    
}