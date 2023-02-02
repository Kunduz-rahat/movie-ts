//Movie Item

export interface IMovie {
  id: number;
  poster_path: string;
  release_date: string;
  vote_average: number;
  genres: IGenge[];
}

export interface IGenge {
  id: number;
  name: string;
}

//Movie List
export interface MovieListState  {
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

}

export interface MovieActionListError {
  type: MovieListActionTypes.FETCH_MOVIE_LIST_ERROR;
  payload: {
    error: string;
  };
}



export interface MovieActionListSuccess {
  type: MovieListActionTypes.FETCH_MOVIE_LIST_SUCCESS;
  payload: {
    movies: IMovie[];
    pages: number;
    results: number;
  };
}

export type MovieListAction = MovieActionListError | MovieActionListSuccess 

// Movie Item

export interface MovieItemState  {
  movie: IMovie[];
  loading: boolean;
};

export enum MovieItemActionTypes {
  FETCH_MOVIE_ITEM_LOADING = "FETCH_MOVIE_ITEM_LOADING",
  FETCH_MOVIE_ITEM_SUCCESS = "FETCH_MOVIE_ITEM_SUCCESS",
}

export interface MovieItemActionLoading {
  type: MovieItemActionTypes.FETCH_MOVIE_ITEM_LOADING;
}
export interface MovieItemActionSuccess {
  type: MovieItemActionTypes.FETCH_MOVIE_ITEM_SUCCESS;
  payload: IMovie[];
}

export type MovieItemAction = MovieItemActionLoading | MovieItemActionSuccess;
