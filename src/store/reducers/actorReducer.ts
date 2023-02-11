import {
  ActorItemActionTypes,
  ActorListActionTypes,
  ADD_ACTOR_LIST_REQUEST,
  ADD_ACTOR_LIST_SUCCESS,
  FETCH_ACTOR_ITEM_ERROR,
  FETCH_ACTOR_ITEM_REQUEST,
  FETCH_ACTOR_ITEM_SUCCESS,
  FETCH_ACTOR_LIST_ERROR,
  FETCH_ACTOR_LIST_REQUEST,
  FETCH_ACTOR_LIST_SUCCESS,
  SEARCH_ACTOR_LIST,
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
    case SEARCH_ACTOR_LIST: {
      return {
        ...state,
        loading: false,
        actors: action.payload.actors,
        pages: action.payload.pages,
        results: action.payload.results,
        query: action.payload.query,
      };
    }
    case ADD_ACTOR_LIST_REQUEST:
      return { ...state, nextLoading: true };
    case ADD_ACTOR_LIST_SUCCESS:
      return {
        ...state,
        nextLoading: false,
        actors: [...state.actors, ...action.payload],
      };
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
        loading: false,
      };
    case FETCH_ACTOR_ITEM_ERROR:
      return { ...state, error: action.payload.error };

    default:
      return state;
  }
};
