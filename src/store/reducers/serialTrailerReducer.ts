import {
  FETCH_TRAILER_SERIAL_LIST_ERROR,
  FETCH_TRAILER_SERIAL_LIST_REQUEST,
  FETCH_TRAILER_SERIAL_LIST_SUCCESS,
  SerialTrailerListActionTypes,
} from "../../types/serialTrailerTypes";

export const serialTrailerReducer = (
  state = { trailers: [] },
  action: SerialTrailerListActionTypes
) => {
  switch (action.type) {
    case FETCH_TRAILER_SERIAL_LIST_SUCCESS:
      return {
        ...state,
        trailerLoading: false,
        trailers: action.payload.trailers,
      };
    case FETCH_TRAILER_SERIAL_LIST_ERROR:
      return { ...state, error: action.payload.error };
    case FETCH_TRAILER_SERIAL_LIST_REQUEST:
      return { ...state, serialTrailerLoading: true };

    default:
      return state;
  }
};
