import { Action } from "redux";
import { ThunkAction } from "redux-thunk";
import { ActorItemState, ActorListState } from "./actorTypes";
import { MovieItemState, MovieListState } from "./movieTypes";
import { TrailerListState } from "./trailerTypes";
import { SerialItemState, SerialListState } from "./tvTypes";

export interface RootState {
  movieList: MovieListState;
  movieItem: MovieItemState;
  actorList:ActorListState;
  actorItem: ActorItemState;
  serialList:SerialListState;
  serialItem:SerialItemState;
  trailerList:TrailerListState
}

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
