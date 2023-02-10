import axios from "axios";
import { FETCH_MOVIE_LIST_ERROR, FETCH_MOVIE_LIST_REQUEST, FETCH_MOVIE_LIST_SUCCESS, SEARCH_MOVIE_LIST} from "../../types/movieTypes";
import apiConfig from "../../api/apiConfig.js";
import { AppThunk } from "../../types/rootTypes";

export const fetchMovies = (): AppThunk => async (dispatch) => {
  dispatch({ type: FETCH_MOVIE_LIST_REQUEST });
  const res = await axios(
    `${apiConfig.baseUrl}movie/popular?api_key=${apiConfig.apiKey}`
  );

  dispatch({
    type: FETCH_MOVIE_LIST_SUCCESS,
    payload: {
      movies: res.data.results,
      pages: res.data.total_pages,
      results: res.data.total_results,
    },
  });

  dispatch({
    type:FETCH_MOVIE_LIST_ERROR,
    payload: { error: "Произошла ошибка при загрузке фильмов" },
  });
};


export const searchMovies = (query: string): AppThunk => async (dispatch) => {
	dispatch({ type: FETCH_MOVIE_LIST_REQUEST });

	const res = await axios.get(
		`${apiConfig.baseUrl}search/movie?api_key=${apiConfig.apiKey}&query=${query}&page=1`
	);

	dispatch({
		type: SEARCH_MOVIE_LIST,
		payload: {
			movies: res.data.results,
			pages: res.data.total_pages,
			results: res.data.total_results,
			query: query,
		},
	});
};
