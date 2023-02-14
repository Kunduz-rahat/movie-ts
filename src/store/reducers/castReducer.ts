import {
  CastListActionTypes,
  FETCH_CAST_LIST_ERROR,
  FETCH_CAST_LIST_REQUEST,
  FETCH_CAST_LIST_SUCCESS,
} from "../../types/castTypes";

export const castListReducer = (
  state = { cast: [] },
  action: CastListActionTypes
) => {
  switch (action.type) {
    case FETCH_CAST_LIST_SUCCESS:
      return {
        ...state,
        castLoading: false,
        cast: action.payload.cast,
      };
    case FETCH_CAST_LIST_ERROR:
      return { ...state, error: action.payload.error };
    case FETCH_CAST_LIST_REQUEST:
      return { ...state, castLoading: true };

    default:
      return state;
  }
};
