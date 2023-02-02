import { Dispatch } from "redux";
import axios from 'axios'
import { MovieListAction, MovieListActionTypes } from "../../types/movieTypes"
import apiConfig from "../../api/apiConfig.js";


export const fetchMovies = () => {
  return (dispatch:Dispatch<MovieListAction>) => {
    
    axios(`${apiConfig.baseUrl}3/movie/popular?api_key=${apiConfig.apiKey}`)
      .then(({data}) => {
        dispatch({type: MovieListActionTypes.FETCH_MOVIE_LIST_SUCCESS, payload: {movies:data.results,
        pages:data.total_pages, results:data.total_results}
          
  })
      }).catch((error) => {
      dispatch({type: MovieListActionTypes.FETCH_MOVIE_LIST_ERROR, payload:{error:"Произошла ошибка при загрузке фильмов"}})
    })
  }
}

