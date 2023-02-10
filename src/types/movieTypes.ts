//Movie Item

export const FETCH_MOVIE_ITEM_REQUEST = "FETCH_MOVIE_ITEM_REQUEST",
  FETCH_MOVIE_ITEM_SUCCESS = "FETCH_MOVIE_ITEM_SUCCESS",
  FETCH_MOVIE_ITEM_ERROR = "FETCH_MOVIE_ITEM_ERROR",
  FETCH_MOVIE_LIST_REQUEST = "FETCH_MOVIE_LIST_REQUEST",
  FETCH_MOVIE_LIST_SUCCESS = "FETCH_MOVIE_LIST_SUCCESS",
  FETCH_MOVIE_LIST_ERROR = "FETCH_MOVIE_LIST_ERROR",
  SEARCH_MOVIE_LIST = "SEARCH_MOVIE_LIST"



export interface IMovie {
  id: number;
  backdrop_path: string;
  release_date: string;
  vote_average: number;
  genres: IGenge[];
  original_title: string;
  overview: string;
  poster_path: string;
  title: string;
}

export interface IGenge {
  id: number;
  name: string;
}

//Movie List
export type MovieListState = {
  movies: IMovie[];
  loading: boolean;
  error: string;
  results: number;
  pages: number;
  query: string;
};

export interface MovieActionListError {
  type: typeof FETCH_MOVIE_LIST_ERROR;
  payload: {
    error: string;
  };
}

export interface MovieActionListRequest {
  type: typeof FETCH_MOVIE_LIST_REQUEST;
}
export interface MovieActionListSuccess {
  type: typeof FETCH_MOVIE_LIST_SUCCESS;
  payload: {
    movies: IMovie[];
    pages: number;
    results: number;
  };
}

//Search Movie list
interface MovieActionSearchList {
  type: typeof SEARCH_MOVIE_LIST;
  payload: {
    movies: IMovie[];
    pages: number;
    results: number;
    query: string;
  };
}
export type MovieListAction =
  | MovieActionListError
  | MovieActionListSuccess
  | MovieActionListRequest
  | MovieActionSearchList;

// Movie Item

export type MovieItemState = {
  movie: IMovie;
  error: string;
  loading: boolean;
};

export interface MovieItemActionError {
  type: typeof FETCH_MOVIE_ITEM_ERROR;
  payload: { error: string };
}
export interface MovieItemActionRequest {
  type: typeof FETCH_MOVIE_ITEM_REQUEST;
}
export interface MovieItemActionSuccess {
  type: typeof FETCH_MOVIE_ITEM_SUCCESS;
  payload: IMovie;
}

export type MovieItemAction =
  | MovieItemActionRequest
  | MovieItemActionSuccess
  | MovieItemActionError;
