export const FETCH_ACTOR_MOVIE_LIST_REQUEST = "FETCH_ACTOR_MOVIE_LIST_REQUEST",
  FETCH_ACTOR_MOVIE_LIST_SUCCESS = "FETCH_ACTOR_MOVIE_LIST_SUCCESS",
  FETCH_ACTOR_MOVIE_LIST_ERROR = "FETCH_ACTOR_MOVIE_LIST_ERROR";

export interface IMovie {
  id: number;
  backdrop_path: string;
  poster_path: string;
  original_title: string;
}

//Actor Movie List
export type ActorMovieListState = {
  cast: IMovie[];
  actorListLoading: boolean;
  error: string;
};

export interface ActorMovieActionListError {
  type: typeof FETCH_ACTOR_MOVIE_LIST_ERROR;
  payload: {
    error: string;
  };
}

export interface ActorMovieActionListRequest {
  type: typeof FETCH_ACTOR_MOVIE_LIST_REQUEST;
}
export interface ActorMovieActionListSuccess {
  type: typeof FETCH_ACTOR_MOVIE_LIST_SUCCESS;
  payload: {
    cast: IMovie[];
  };
}

export type ActorMovieListAction =
  | ActorMovieActionListError
  | ActorMovieActionListRequest
  | ActorMovieActionListSuccess;
