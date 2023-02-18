import {
  CastSerialListAction,
  FETCH_CAST_SERIAL_LIST_ERROR,
  FETCH_CAST_SERIAL_LIST_REQUEST,
  FETCH_CAST_SERIAL_LIST_SUCCESS,
} from "../../types/castSerialTypes";

export const castSerialListReducer = (
  state = { cast: [] },
  action: CastSerialListAction
) => {
  switch (action.type) {
    case FETCH_CAST_SERIAL_LIST_SUCCESS:
      return {
        ...state,
        actorSerialLoading: false,
        cast: action.payload.cast,
      };
    case FETCH_CAST_SERIAL_LIST_ERROR:
      return { ...state, error: action.payload.error };
    case FETCH_CAST_SERIAL_LIST_REQUEST:
      return { ...state, actorSerialLoading: true };

    default:
      return state;
  }
};
