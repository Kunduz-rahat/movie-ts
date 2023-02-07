import { Action } from "redux";
import { ThunkAction } from "redux-thunk";
import { MovieItemState, MovieListState } from "./movieTypes";

export interface RootState {
  movieList: MovieListState;
  movieItem: MovieItemState;
}

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
