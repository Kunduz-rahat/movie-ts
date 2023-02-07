import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from 'redux-thunk'
import {composeWithDevTools} from "redux-devtools-extension";
import {  movieItemReducer, movieListReducer } from "./reducers/movieReducer";


const rootReducer = combineReducers({
	movieList:movieListReducer,
	movieItem:movieItemReducer
})

const middleware = [thunk]

export const store = createStore(rootReducer,composeWithDevTools(applyMiddleware(...middleware)) )