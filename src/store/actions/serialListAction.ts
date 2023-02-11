import axios from "axios";
import apiConfig from "../../api/apiConfig.js";
import { AppThunk } from "../../types/rootTypes";
import {
  ADD_SERIAL_LIST_REQUEST,
  ADD_SERIAL_LIST_SUCCESS,
  FETCH_SERIAL_LIST_ERROR,
  FETCH_SERIAL_LIST_REQUEST,
  FETCH_SERIAL_LIST_SUCCESS,
  SEARCH_SERIAL_LIST,
} from "../../types/tvTypes";

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
    type: FETCH_SERIAL_LIST_ERROR,
    payload: { error: "Произошла ошибка при загрузке сериалов" },
  });
};

export const searchSerials =
  (query: string): AppThunk =>
  async (dispatch) => {
    dispatch({ type: FETCH_SERIAL_LIST_REQUEST });

    const res = await axios.get(
      `${apiConfig.baseUrl}search/tv?&api_key=${apiConfig.apiKey}&query=${query}`
    );
    dispatch({
      type: SEARCH_SERIAL_LIST,
      payload: {
        serials: res.data.results,
        pages: res.data.total_pages,
        results: res.data.total_results,
        query: query,
      },
    });
  };

export const addSerials =
  (page: number): AppThunk =>
  async (dispatch) => {
    dispatch({ type: ADD_SERIAL_LIST_REQUEST });

    const res = await axios.get(
      `${apiConfig.baseUrl}tv/popular?api_key=${apiConfig.apiKey}&language=en-US&page=${page}`
    );
    dispatch({
      type: ADD_SERIAL_LIST_SUCCESS,
      payload: res.data.results,
    });
  };
