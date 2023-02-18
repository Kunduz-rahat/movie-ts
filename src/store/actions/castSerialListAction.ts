import axios from "axios";
import apiConfig from "../../api/apiConfig.js";
import { AppThunk } from "../../types/rootTypes";
import {
  FETCH_CAST_SERIAL_LIST_ERROR,
  FETCH_CAST_SERIAL_LIST_REQUEST,
  FETCH_CAST_SERIAL_LIST_SUCCESS,
} from "../../types/castSerialTypes";

export const fetchCastSerial =
  (id: any): AppThunk =>
  async (dispatch) => {
    dispatch({ type: FETCH_CAST_SERIAL_LIST_REQUEST });
    const res = await axios(
      `${apiConfig.baseUrl}tv/${id}/credits?api_key=${apiConfig.apiKey}`
    );

    dispatch({
      type: FETCH_CAST_SERIAL_LIST_SUCCESS,
      payload: {
        cast: res.data.cast,
      },
    });

    dispatch({
      type: FETCH_CAST_SERIAL_LIST_ERROR,
      payload: { error: "Произошла ошибка при загрузке..." },
    });
  };
