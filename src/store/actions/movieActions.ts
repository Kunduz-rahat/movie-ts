import { Dispatch } from "redux";
import axios from 'axios'
import { MovieAction, MovieActionTypes } from "../../types/movie"
import apiConfig from "../../api";


export const fetchMovies = () => {
  return (dispatch:Dispatch<MovieAction>) => {
    dispatch({type: MovieActionTypes.FETCH_MOVIE})
    axios(`${apiConfig.baseUrl}discover/movie?page=1&api_key=${apiConfig.apiKey}`)
      .then(({data}) => {
        dispatch({type: MovieActionTypes.FETCH_MOVIE_SUCCESS, payload: data.results})
      }).catch((error) => {
      dispatch({type: MovieActionTypes.FETCH_MOVIE_ERROR, payload:"Произошла ошибка при загрузке фильмов"})
    })
  }
}

