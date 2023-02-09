import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from 'redux-thunk'
import {composeWithDevTools} from "redux-devtools-extension";
import {  movieItemReducer, movieListReducer } from "./reducers/movieReducer";
import { actorItemReducer, actorListReducer } from "./reducers/actorReducer";


const rootReducer = combineReducers({
	movieList:movieListReducer,
	movieItem:movieItemReducer,
	actorList:actorListReducer,
	actorItem:actorItemReducer
})

const middleware = [thunk]

export const store = createStore(rootReducer,composeWithDevTools(applyMiddleware(...middleware)) )