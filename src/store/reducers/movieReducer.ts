import {
  MovieItemAction,
   MovieListAction,
  FETCH_MOVIE_ITEM_ERROR,
  FETCH_MOVIE_ITEM_REQUEST,
  FETCH_MOVIE_ITEM_SUCCESS,
  FETCH_MOVIE_LIST_ERROR,
  FETCH_MOVIE_LIST_REQUEST,
  FETCH_MOVIE_LIST_SUCCESS,
} from "../../types/movieTypes";

export const movieListReducer = (
  state ={movies :[]}, 
  action: MovieListAction
) => {
  switch (action.type) {
    case FETCH_MOVIE_LIST_SUCCESS:
      return {
        ...state,
        loading: false,
        movies: action.payload.movies,
        pages: action.payload.pages,
        results: action.payload.results,
      };
    case FETCH_MOVIE_LIST_ERROR:
      return { ...state, error: action.payload.error };
    case FETCH_MOVIE_LIST_REQUEST:
      return { ...state, loading: true };

    default:
      return state;
  }
};


export const movieItemReducer = (
  state = { movie: {} },
  action: MovieItemAction
) => {
  switch (action.type) {
    case FETCH_MOVIE_ITEM_REQUEST:
      return {
        ...state,

        loading: true,
      };
    case FETCH_MOVIE_ITEM_SUCCESS:
      return {
        ...state,
        movie: action.payload,
        loading:false
      };
    case FETCH_MOVIE_ITEM_ERROR:
      return { ...state, error: action.payload.error };

    default:
      return state;
  }
};
