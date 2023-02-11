import {
  FETCH_TRAILER_LIST_ERROR,
  FETCH_TRAILER_LIST_REQUEST,
  FETCH_TRAILER_LIST_SUCCESS,
  TrailerListActionTypes,
} from "../../types/trailerTypes";

export const trailerReducer = (
  state = { trailers: [] },
  action: TrailerListActionTypes
) => {
  switch (action.type) {
    case FETCH_TRAILER_LIST_SUCCESS:
      return {
        ...state,
        loading: false,
        trailers: action.payload.trailers,
      };
    case FETCH_TRAILER_LIST_ERROR:
      return { ...state, error: action.payload.error };
    case FETCH_TRAILER_LIST_REQUEST:
      return { ...state, loading: true };

    default:
      return state;
  }
};
