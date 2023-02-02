import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from 'redux-thunk'
import {composeWithDevTools} from "redux-devtools-extension";
import {  movieListReducer } from "./reducers/movieReducer";


const rootReducer = combineReducers({
	movieList:movieListReducer,
	// movieItem:movieItemReducer
})

export type RootState = ReturnType<typeof rootReducer>
export const store = createStore(rootReducer,composeWithDevTools(applyMiddleware(thunk)) )