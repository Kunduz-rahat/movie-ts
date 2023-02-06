import { Dispatch } from "redux";
import axios from "axios";
import { MovieItemAction, MovieItemActionTypes, MovieListAction, MovieListActionTypes } from "../../types/movieTypes";
import apiConfig from "../../api/apiConfig.js";

export const fetchMovies = () => {
  return (dispatch: Dispatch<MovieListAction>) => {
    dispatch({type:MovieListActionTypes.FETCH_MOVIE_LIST_REQUEST})
    axios(`${apiConfig.baseUrl}movie/popular?api_key=${apiConfig.apiKey}`)
      .then(({ data }) => {
        dispatch({
          type: MovieListActionTypes.FETCH_MOVIE_LIST_SUCCESS,
          payload: {
            movies: data.results,
            pages: data.total_pages,
            results: data.total_results,
          },
        });
      })
      .catch((error) => {
        dispatch({
          type: MovieListActionTypes.FETCH_MOVIE_LIST_ERROR,
          payload: { error: "Произошла ошибка при загрузке фильмов" },
        });
      });
  };
};


export const fetchItemMovie = (id:number) => {
  return (dispatch: Dispatch<MovieItemAction>) => {
    dispatch({type:MovieItemActionTypes.FETCH_MOVIE_ITEM_REQUEST})
    axios(`${apiConfig.baseUrl}movie/${id}?api_key=${apiConfig.apiKey}`)
      .then(({ data }) => {
        dispatch({
          type: MovieItemActionTypes.FETCH_MOVIE_ITEM_SUCCESS,
          payload: data,
        });
      })
      .catch((error) => {
        dispatch({
          type: MovieItemActionTypes.FETCH_MOVIE_ITEM_ERROR,
          payload: { error: "Произошла ошибка при загрузке фильмов" },
        });
      });
  };
};
