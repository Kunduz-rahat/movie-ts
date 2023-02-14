import axios from "axios";
import apiConfig from "../../api/apiConfig.js";
import { AppThunk } from "../../types/rootTypes";

import {
  FETCH_CAST_LIST_ERROR,
  FETCH_CAST_LIST_REQUEST,
  FETCH_CAST_LIST_SUCCESS,
} from "../../types/castTypes.js";

export const fetchCast =
  (id: any): AppThunk =>
  async (dispatch) => {
    dispatch({ type: FETCH_CAST_LIST_REQUEST });
    const res = await axios(
      `${apiConfig.baseUrl}movie/${id}/credits?api_key=${apiConfig.apiKey}`
    );

    dispatch({
      type: FETCH_CAST_LIST_SUCCESS,
      payload: {
        actors: res.data.results,
        pages: res.data.total_pages,
        results: res.data.total_results,
      },
    });

    dispatch({
      type: FETCH_CAST_LIST_ERROR,
      payload: { error: "Произошла ошибка при загрузке..." },
    });
  };
