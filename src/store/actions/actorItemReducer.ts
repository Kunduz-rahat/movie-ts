import axios from "axios";

import { AppThunk } from "../../types/rootTypes";
import apiConfig from "../../api/apiConfig";
import { FETCH_ACTOR_ITEM_ERROR, FETCH_ACTOR_ITEM_REQUEST, FETCH_ACTOR_ITEM_SUCCESS } from "../../types/actorTypes";

export const fetchItemActor = (id:any): AppThunk => async (dispatch) => {
  dispatch({ type: FETCH_ACTOR_ITEM_REQUEST });
  const res = await axios(`${apiConfig.baseUrl}person/${id}?api_key=${apiConfig.apiKey}`)

  dispatch({
    type: FETCH_ACTOR_ITEM_SUCCESS,
    payload: res.data
  });

  dispatch({
    type: FETCH_ACTOR_ITEM_ERROR,
    payload: { error: "Произошла ошибка при загрузке..." },
  });
};
