import {
  MovieItemAction,
  MovieItemActionTypes,
  MovieItemState,
  MovieListAction,
  MovieListActionTypes,
  MovieListState,
} from "../../types/movieTypes";

const initialState: MovieListState = {
  movies: [],
  loading: false,
  error: "",
  results: 0,
  pages: 0,
  query: "",
};

export const movieListReducer = (
  state = initialState,
  action: MovieListAction
): MovieListState => {
  switch (action.type) {
    case MovieListActionTypes.FETCH_MOVIE_LIST_SUCCESS:
      return {
        ...state,
        loading: false,
        movies: action.payload.movies,
        pages: action.payload.pages,
        results: action.payload.results,
      };
    case MovieListActionTypes.FETCH_MOVIE_LIST_ERROR:
      return { ...state, error: action.payload.error };
    case MovieListActionTypes.FETCH_MOVIE_LIST_REQUEST:
      return { ...state, loading: true };

    default:
      return state;
  }
};

const initialItemState: MovieItemState = {
  movie: {
    id: 0,
    poster_path: "",
    release_date: "",
    vote_average: 0,
    genres: [],
    original_title: "",
    overview: "",
  },
  error: "",
  loading: false,
};
export const movieItemReducer = (
  state = initialItemState,
  action: MovieItemAction
): MovieItemState => {
  switch (action.type) {
    case MovieItemActionTypes.FETCH_MOVIE_ITEM_REQUEST:
      return {
        ...state,

        loading: true,
      };
    case MovieItemActionTypes.FETCH_MOVIE_ITEM_SUCCESS:
      return {
        ...state,
        movie: {
          id: action.payload.id,
          poster_path: action.payload.poster_path,
          release_date: action.payload.release_date,
          vote_average: action.payload.vote_average,
          genres: action.payload.genres,
          original_title: action.payload.original_title,
          overview: action.payload.overview,
        },
      };
    case MovieItemActionTypes.FETCH_MOVIE_ITEM_ERROR:
      return { ...state, error: action.payload.error };

    default:
      return state;
  }
};
