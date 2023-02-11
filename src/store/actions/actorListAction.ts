import axios from "axios";
import apiConfig from "../../api/apiConfig.js";
import { AppThunk } from "../../types/rootTypes";
import {
  ADD_ACTOR_LIST_REQUEST,
  ADD_ACTOR_LIST_SUCCESS,
  FETCH_ACTOR_LIST_ERROR,
  FETCH_ACTOR_LIST_REQUEST,
  FETCH_ACTOR_LIST_SUCCESS,
  SEARCH_ACTOR_LIST,
} from "../../types/actorTypes";

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
    type: FETCH_ACTOR_LIST_ERROR,
    payload: { error: "Произошла ошибка при загрузке..." },
  });
};

export const searchActors =
  (query: string): AppThunk =>
  async (dispatch) => {
    dispatch({ type: FETCH_ACTOR_LIST_REQUEST });

    const res = await axios.get(
      `${apiConfig.baseUrl}search/person?&api_key=${apiConfig.apiKey}&query=${query}`
    );
    dispatch({
      type: SEARCH_ACTOR_LIST,
      payload: {
        actors: res.data.results,
        pages: res.data.total_pages,
        results: res.data.total_results,
        query: query,
      },
    });
  };

export const addActors =
  (page: number): AppThunk =>
  async (dispatch) => {
    dispatch({ type: ADD_ACTOR_LIST_REQUEST });

    const res = await axios.get(
      `${apiConfig.baseUrl}person/popular?api_key=${apiConfig.apiKey}&language=en-US&page=${page}`
    );
    dispatch({
      type: ADD_ACTOR_LIST_SUCCESS,
      payload: res.data.results,
    });
  };
