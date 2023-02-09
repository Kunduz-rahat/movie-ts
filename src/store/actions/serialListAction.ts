import axios from "axios";
import apiConfig from "../../api/apiConfig.js";
import { AppThunk } from "../../types/rootTypes";
import { FETCH_SERIAL_LIST_ERROR, FETCH_SERIAL_LIST_REQUEST, FETCH_SERIAL_LIST_SUCCESS } from "../../types/tvTypes";

export const fetchSerials = (): AppThunk => async (dispatch) => {
  dispatch({ type: FETCH_SERIAL_LIST_REQUEST });
  const res = await axios(
    `${apiConfig.baseUrl}tv/popular?api_key=${apiConfig.apiKey}`
  );

  dispatch({
    type: FETCH_SERIAL_LIST_SUCCESS,
    payload: {
      serials: res.data.results,
      pages: res.data.total_pages,
      results: res.data.total_results,
    },
  });

  dispatch({
    type:FETCH_SERIAL_LIST_ERROR,
    payload: { error: "Произошла ошибка при загрузке сериалов" },
  });
};
