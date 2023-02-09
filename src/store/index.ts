import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from 'redux-thunk'
import {composeWithDevTools} from "redux-devtools-extension";
import {  movieItemReducer, movieListReducer } from "./reducers/movieReducer";
import { actorItemReducer, actorListReducer } from "./reducers/actorReducer";
import { serialItemReducer, serialListReducer } from "./reducers/tvReducer";


const rootReducer = combineReducers({
	movieList:movieListReducer,
	movieItem:movieItemReducer,
	actorList:actorListReducer,
	actorItem:actorItemReducer,
	serialItem:serialItemReducer,
	serialList:serialListReducer
})

const middleware = [thunk]

export const store = createStore(rootReducer,composeWithDevTools(applyMiddleware(...middleware)) )