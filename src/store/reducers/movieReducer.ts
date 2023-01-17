import { MovieAction, MovieActionTypes, MovieState } from "../../types/movie"


const initialState:MovieState ={
	movies:[],
	error: null,
	loading:false

}


export const movieReducer = (state = initialState, action:MovieAction):MovieState=>{
switch (action.type){
	case MovieActionTypes.FETCH_MOVIE:
		return {loading:true, error:null, movies:[]}
	case MovieActionTypes.FETCH_MOVIE_SUCCESS:
		return {loading:false, error:null, movies:action.payload}	
		case MovieActionTypes.FETCH_MOVIE_ERROR:
		return {loading:false, error:action.payload, movies:[]}
	default:
		return state
}
}