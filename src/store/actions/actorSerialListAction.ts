import axios from "axios";
import apiConfig from "../../api/apiConfig.js";
import { AppThunk } from "../../types/rootTypes";

import {
  FETCH_ACTOR_SERIAL_LIST_ERROR,
  FETCH_ACTOR_SERIAL_LIST_REQUEST,
  FETCH_ACTOR_SERIAL_LIST_SUCCESS,
} from "../../types/actorSerialListTypes";

export const fetchActorSerialList =
  (id: any): AppThunk =>
  async (dispatch) => {
    dispatch({ type: FETCH_ACTOR_SERIAL_LIST_REQUEST });
    const res = await axios(
      `${apiConfig.baseUrl}person/${id}/tv_credits?api_key=${apiConfig.apiKey}`
    );

    dispatch({
      type: FETCH_ACTOR_SERIAL_LIST_SUCCESS,
      payload: {
        serials: res.data.cast,
      },
    });

    dispatch({
      type: FETCH_ACTOR_SERIAL_LIST_ERROR,
      payload: { error: "Произошла ошибка при загрузке..." },
    });
  };
