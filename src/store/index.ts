import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from 'redux-thunk'
import { movieReducer } from "./reducers/movieReducer";


const rootReducer = combineReducers({
	movie:movieReducer
})
export const store = createStore(rootReducer, applyMiddleware(thunk))