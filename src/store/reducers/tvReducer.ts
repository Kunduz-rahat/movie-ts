import {
  FETCH_SERIAL_ITEM_ERROR,
  FETCH_SERIAL_ITEM_REQUEST,
  FETCH_SERIAL_ITEM_SUCCESS,
  FETCH_SERIAL_LIST_ERROR,
  FETCH_SERIAL_LIST_REQUEST,
  FETCH_SERIAL_LIST_SUCCESS,
  SerialItemActionTypes,
  SerialListActionTypes,
} from "../../types/tvTypes";

export const serialListReducer = (
  state = { serials: [] },
  action: SerialListActionTypes
) => {
  switch (action.type) {
    case FETCH_SERIAL_LIST_SUCCESS:
      return {
        ...state,
        loading: false,
        serials: action.payload.serials,
        pages: action.payload.pages,
        results: action.payload.results,
      };
    case FETCH_SERIAL_LIST_ERROR:
      return { ...state, error: action.payload.error };
    case FETCH_SERIAL_LIST_REQUEST:
      return { ...state, loading: true };

    default:
      return state;
  }
};

export const serialItemReducer = (
  state = { serial: {} },
  action: SerialItemActionTypes
) => {
  switch (action.type) {
    case FETCH_SERIAL_ITEM_REQUEST:
      return {
        ...state,

        loading: true,
      };
    case FETCH_SERIAL_ITEM_SUCCESS:
      return {
        ...state,
        serial: action.payload,
        loading: false,
      };
    case FETCH_SERIAL_ITEM_ERROR:
      return { ...state, error: action.payload.error };

    default:
      return state;
  }
};
