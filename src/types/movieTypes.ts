//Movie Item

import { Action } from "@remix-run/router";

export interface IMovie {
  id: number;
  poster_path: string;
  release_date: string;
  vote_average: number;
  genres: IGenge[];
  original_title:string,
  overview:string
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

export enum MovieListActionTypes {
  FETCH_MOVIE_LIST_ERROR = "FETCH_MOVIE_LIST_ERROR",
  FETCH_MOVIE_LIST_SUCCESS = "FETCH_MOVIE_LIST_SUCCESS",
  FETCH_MOVIE_LIST_REQUEST = "FETCH_MOVIE_LIST_REQUEST",

}

export interface MovieActionListError {
  type: MovieListActionTypes.FETCH_MOVIE_LIST_ERROR;
  payload: {
    error: string;
  };
}


export  interface MovieActionListRequest{
  type:MovieListActionTypes.FETCH_MOVIE_LIST_REQUEST
}
export interface MovieActionListSuccess {
  type: MovieListActionTypes.FETCH_MOVIE_LIST_SUCCESS;
  payload: {
    movies: IMovie[];
    pages: number;
    results: number;
  };
}

export type MovieListAction = MovieActionListError | MovieActionListSuccess |MovieActionListRequest

// Movie Item

export interface MovieItemState  {
  movie: IMovie;
  error: string;
  loading:boolean

};

export enum MovieItemActionTypes {
  FETCH_MOVIE_ITEM_REQUEST = "FETCH_MOVIE_ITEM_REQUEST",
  FETCH_MOVIE_ITEM_SUCCESS = "FETCH_MOVIE_ITEM_SUCCESS",
  FETCH_MOVIE_ITEM_ERROR = "FETCH_MOVIE_ITEM_ERROR",
}

export interface MovieItemActionError{
  type:MovieItemActionTypes.FETCH_MOVIE_ITEM_ERROR,
  payload: {error:string}
}
export interface MovieItemActionRequest {
  type: MovieItemActionTypes.FETCH_MOVIE_ITEM_REQUEST;
}
export interface MovieItemActionSuccess {
  type: MovieItemActionTypes.FETCH_MOVIE_ITEM_SUCCESS;
  payload: IMovie;
}

export type MovieItemAction = MovieItemActionRequest | MovieItemActionSuccess | MovieItemActionError;
