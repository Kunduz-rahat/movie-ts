import axios from "axios";
import { Dispatch } from "redux";
import apiConfig from "../../api/apiConfig";
import { MovieItemAction, FETCH_MOVIE_ITEM_ERROR, FETCH_MOVIE_ITEM_SUCCESS, FETCH_MOVIE_ITEM_REQUEST} from "../../types/movieTypes";

export const fetchItemMovie = (id:number) => {
  return (dispatch: Dispatch<MovieItemAction>) => {
    dispatch({type:FETCH_MOVIE_ITEM_REQUEST})
    axios(`${apiConfig.baseUrl}movie/${id}?api_key=${apiConfig.apiKey}`)
      .then(({ data }) => {
        dispatch({
          type: FETCH_MOVIE_ITEM_SUCCESS,
          payload: data,
        });
      })
      .catch((error) => {
        dispatch({
          type: FETCH_MOVIE_ITEM_ERROR,
          payload: { error: "Произошла ошибка при загрузке фильма" },
        });
      });
  };
};
