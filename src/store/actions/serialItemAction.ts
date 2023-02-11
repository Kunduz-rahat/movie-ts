import axios from "axios";

import { AppThunk } from "../../types/rootTypes";
import apiConfig from "../../api/apiConfig";
import { FETCH_SERIAL_ITEM_ERROR, FETCH_SERIAL_ITEM_REQUEST, FETCH_SERIAL_ITEM_SUCCESS } from "../../types/tvTypes";

export const fetchItemSerial = (id:any): AppThunk => async (dispatch) => {
  dispatch({ type: FETCH_SERIAL_ITEM_REQUEST });
  const res = await axios(`${apiConfig.baseUrl}tv/${id}?api_key=${apiConfig.apiKey}`)

  dispatch({
    type: FETCH_SERIAL_ITEM_SUCCESS,
    payload: res.data
  });

  dispatch({
    type: FETCH_SERIAL_ITEM_ERROR,
    payload: { error: "Произошла ошибка при загрузке сериала" },
  });
};
