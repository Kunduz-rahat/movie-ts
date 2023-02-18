import axios from "axios";

import { AppThunk } from "../../types/rootTypes";
import apiConfig from "../../api/apiConfig";
import {
  FETCH_MOVIE_ITEM_ERROR,
  FETCH_MOVIE_ITEM_SUCCESS,
  FETCH_MOVIE_ITEM_REQUEST,
} from "../../types/movieTypes";

export const fetchItemMovie =
  (id: any): AppThunk =>
  async (dispatch) => {
    dispatch({ type: FETCH_MOVIE_ITEM_REQUEST });
    const res = await axios(
      `${apiConfig.baseUrl}movie/${id}?api_key=${apiConfig.apiKey}`
    );

    dispatch({
      type: FETCH_MOVIE_ITEM_SUCCESS,
      payload: res.data,
    });

    dispatch({
      type: FETCH_MOVIE_ITEM_ERROR,
      payload: { error: "Произошла ошибка при загрузке фильмов" },
    });
  };
