import {
	ActorItemActionTypes,
  ActorListActionTypes,
  FETCH_ACTOR_ITEM_ERROR,
  FETCH_ACTOR_ITEM_REQUEST,
  FETCH_ACTOR_ITEM_SUCCESS,
  FETCH_ACTOR_LIST_ERROR,
  FETCH_ACTOR_LIST_REQUEST,
  FETCH_ACTOR_LIST_SUCCESS,
} from "../../types/actorTypes";

export const actorListReducer = (
  state = { actors: [] },
  action: ActorListActionTypes
) => {
  switch (action.type) {
    case FETCH_ACTOR_LIST_SUCCESS:
      return {
        ...state,
        loading: false,
        actors: action.payload.actors,
        pages: action.payload.pages,
        results: action.payload.results,
      };
    case FETCH_ACTOR_LIST_ERROR:
      return { ...state, error: action.payload.error };
    case FETCH_ACTOR_LIST_REQUEST:
      return { ...state, loading: true };

    default:
      return state;
  }
};


export const actorItemReducer = (
  state = { actor: {} },
  action: ActorItemActionTypes
) => {
  switch (action.type) {
    case FETCH_ACTOR_ITEM_REQUEST:
      return {
        ...state,

        loading: true,
      };
    case FETCH_ACTOR_ITEM_SUCCESS:
      return {
        ...state,
        actor: action.payload,
        loading:false
      };
    case FETCH_ACTOR_ITEM_ERROR:
      return { ...state, error: action.payload.error };

    default:
      return state;
  }
};
