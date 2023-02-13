import axios from "axios";
import apiConfig from "../../api/apiConfig";
import { AppThunk } from "../../types/rootTypes";
import {
  FETCH_TRAILER_LIST_ERROR,
  FETCH_TRAILER_LIST_REQUEST,
  FETCH_TRAILER_LIST_SUCCESS,
} from "../../types/trailerTypes";

export const fetchTrailers = (id:any): AppThunk => async (dispatch) => {
  dispatch({ type: FETCH_TRAILER_LIST_REQUEST });
  const res = await axios(
    `${apiConfig.baseUrl}movie/${id}/videos?&api_key=${apiConfig.apiKey}`
  );

  dispatch({
    type: FETCH_TRAILER_LIST_SUCCESS,
    payload: {
      trailers: res.data.results,
      
    },
  });

  dispatch({
    type: FETCH_TRAILER_LIST_ERROR,
    payload: { error: "Произошла ошибка при загрузке трейлеров" },
  });
};
