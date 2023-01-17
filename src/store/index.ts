import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from 'redux-thunk'
import {composeWithDevTools} from "redux-devtools-extension";
import { movieReducer } from "./reducers/movieReducer";


const rootReducer = combineReducers({
	movie:movieReducer
})

export type RootState = ReturnType<typeof rootReducer>
export const store = createStore(rootReducer,composeWithDevTools(applyMiddleware(thunk)) )