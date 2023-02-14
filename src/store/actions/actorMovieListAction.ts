import axios from "axios";
import apiConfig from "../../api/apiConfig.js";
import { AppThunk } from "../../types/rootTypes";
import {
  FETCH_ACTOR_MOVIE_LIST_ERROR,
  FETCH_ACTOR_MOVIE_LIST_REQUEST,
  FETCH_ACTOR_MOVIE_LIST_SUCCESS,
} from "../../types/actorFilmListTypes.js";

export const fetchActorMovieList =
  (id: any): AppThunk =>
  async (dispatch) => {
    dispatch({ type: FETCH_ACTOR_MOVIE_LIST_REQUEST });
    const res = await axios(
      `${apiConfig.baseUrl}person/${id}/movie_credits?api_key=${apiConfig.apiKey}`
    );

    dispatch({
      type: FETCH_ACTOR_MOVIE_LIST_SUCCESS,
      payload: {
        movies: res.data.movies,
      },
    });

    dispatch({
      type: FETCH_ACTOR_MOVIE_LIST_ERROR,
      payload: { error: "Произошла ошибка при загрузке..." },
    });
  };
