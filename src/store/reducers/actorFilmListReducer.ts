import {
  ActorMovieListAction,
  FETCH_ACTOR_MOVIE_LIST_ERROR,
  FETCH_ACTOR_MOVIE_LIST_SUCCESS,
} from "../../types/actorFilmListTypes";

export const actorMovieListReducer = (
  state = { movies: [] },
  action: ActorMovieListAction
) => {
  switch (action.type) {
    case FETCH_ACTOR_MOVIE_LIST_SUCCESS:
      return {
        ...state,
        actorListLoading: false,
        movies: action.payload.movies,
      };
    case FETCH_ACTOR_MOVIE_LIST_ERROR:
      return { ...state, error: action.payload.error };
    case "FETCH_ACTOR_MOVIE_LIST_REQUEST":
      return { ...state, actorListLoading: true };

    default:
      return state;
  }
};
