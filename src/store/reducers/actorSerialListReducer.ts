import {
  ActorSerialListAction,
  FETCH_ACTOR_SERIAL_LIST_ERROR,
  FETCH_ACTOR_SERIAL_LIST_REQUEST,
  FETCH_ACTOR_SERIAL_LIST_SUCCESS,
} from "../../types/actorSerialListTypes";

export const actorSerialListReducer = (
  state = { serials: [] },
  action: ActorSerialListAction
) => {
  switch (action.type) {
    case FETCH_ACTOR_SERIAL_LIST_SUCCESS:
      return {
        ...state,
        actorSerialListLoading: false,
        serials: action.payload.serials,
      };
    case FETCH_ACTOR_SERIAL_LIST_ERROR:
      return { ...state, error: action.payload.error };
    case FETCH_ACTOR_SERIAL_LIST_REQUEST:
      return { ...state, actorListLoading: true };

    default:
      return state;
  }
};
