import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from 'redux-thunk'
import {composeWithDevTools} from "redux-devtools-extension";
import {  movieItemReducer, movieListReducer } from "./reducers/movieReducer";
import { actorItemReducer, actorListReducer } from "./reducers/actorReducer";
import { serialItemReducer, serialListReducer } from "./reducers/tvReducer";
import { trailerReducer } from "./reducers/trailerReducer";
import { serialTrailerReducer } from "./reducers/serialTrailerReducer";


const rootReducer = combineReducers({
	movieList:movieListReducer,
	movieItem:movieItemReducer,
	actorList:actorListReducer,
	actorItem:actorItemReducer,
	serialItem:serialItemReducer,
	serialList:serialListReducer,
	trailerList:trailerReducer,
	serialTrailerList:serialTrailerReducer
})

const middleware = [thunk]

export const store = createStore(rootReducer,composeWithDevTools(applyMiddleware(...middleware)) )