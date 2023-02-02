import {

  MovieListAction,
  MovieListActionTypes,
  MovieListState,
} from "../../types/movieTypes";

const initialState: MovieListState = {
  movies: [],
  loading: false,
  error: '',
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
				return {...state, error:action.payload.error}
  }
};

// const initialItemState: MovieItemState = {
//   movie: [],
//   loading: false,
// };
// export const movieItemReducer = (
//   state = initialItemState,
//   action: MovieItemAction
// ): MovieItemState => {
//   switch (action.type) {
//   }
// };
