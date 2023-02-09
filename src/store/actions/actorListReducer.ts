import axios from "axios";
import apiConfig from "../../api/apiConfig.js";
import { AppThunk } from "../../types/rootTypes";
import { FETCH_ACTOR_LIST_ERROR, FETCH_ACTOR_LIST_REQUEST, FETCH_ACTOR_LIST_SUCCESS } from "../../types/actorTypes";

export const fetchActors = (): AppThunk => async (dispatch) => {
  dispatch({ type: FETCH_ACTOR_LIST_REQUEST });
  const res = await axios(
    `${apiConfig.baseUrl}person/popular?api_key=${apiConfig.apiKey}`
  );

  dispatch({
    type: FETCH_ACTOR_LIST_SUCCESS,
    payload: {
      actors: res.data.results,
			pages: res.data.total_pages,
			results: res.data.total_results,
    },
  });

  dispatch({
    type:FETCH_ACTOR_LIST_ERROR,
    payload: { error: "Произошла ошибка при загрузке..." },
  });
};
