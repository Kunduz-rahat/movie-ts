import {
  ActorSerialListAction,
  FETCH_ACTOR_SERIAL_LIST_ERROR,
  FETCH_ACTOR_SERIAL_LIST_REQUEST,
  FETCH_ACTOR_SERIAL_LIST_SUCCESS,
} from "../../types/actorSerialTypes";

export const actorSerialListReducer = (
  state = { cast: [] },
  action: ActorSerialListAction
) => {
  switch (action.type) {
    case FETCH_ACTOR_SERIAL_LIST_SUCCESS:
      return {
        ...state,
        actorSerialLoading: false,
        cast: action.payload.cast,
      };
    case FETCH_ACTOR_SERIAL_LIST_ERROR:
      return { ...state, error: action.payload.error };
    case FETCH_ACTOR_SERIAL_LIST_REQUEST:
      return { ...state, actorSerialLoading: true };

    default:
      return state;
  }
};
