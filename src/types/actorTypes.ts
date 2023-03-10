export const FETCH_ACTOR_LIST_REQUEST = "FETCH_ACTOR_LIST_REQUEST",
  FETCH_ACTOR_LIST_SUCCESS = "FETCH_ACTOR_LIST_SUCCESS",
  FETCH_ACTOR_LIST_ERROR = "FETCH_ACTOR_LIST_ERROR",
  FETCH_ACTOR_ITEM_REQUEST = "FETCH_ACTOR_ITEM_REQUEST",
  FETCH_ACTOR_ITEM_SUCCESS = "FETCH_ACTOR_ITEM_SUCCESS",
  FETCH_ACTOR_ITEM_ERROR = "FETCH_ACTOR_ITEM_ERROR",
  SEARCH_ACTOR_LIST = "SEARCH_ACTOR_LIST",
  ADD_ACTOR_LIST_SUCCESS = "ADD_ACTOR_LIST_SUCCESS",
  ADD_ACTOR_LIST_REQUEST = "ADD_ACTOR_LIST_REQUEST";

// Actor interface
export interface IActor {
  id: number;
  name: string;
  biography: string;
  profile_path: string;
  birthday: string;
  place_of_birth: string;
  known_for_department:string;
  gender:number
}

// Actor List

export type ActorListState = {
  actors: IActor[];
  loading: boolean;
  query: string;
  error: string;
  pages: number;
  results: number;
  nextLoading: boolean;
};
interface ActorActionListRequest {
  type: typeof FETCH_ACTOR_LIST_REQUEST;
}
interface ActorActionListSuccess {
  type: typeof FETCH_ACTOR_LIST_SUCCESS;
  payload: {
    actors: IActor[];
    pages: number;
    results: number;
  };
}
export interface ActorActionListError {
  type: typeof FETCH_ACTOR_LIST_ERROR;
  payload: {
    error: string;
  };
}
interface ActorActionListSearch {
  type: typeof SEARCH_ACTOR_LIST;
  payload: {
    actors: IActor[];
    pages: number;
    results: number;
    query: string;
  };
}
interface ActorActionListAddSuccess {
  type: typeof ADD_ACTOR_LIST_SUCCESS;
  payload: IActor[];
}
interface ActorActionListAddRequest {
  type: typeof ADD_ACTOR_LIST_REQUEST;
}
export type ActorListActionTypes =
  | ActorActionListError
  | ActorActionListRequest
  | ActorActionListSuccess
  | ActorActionListSearch
  | ActorActionListAddRequest
  | ActorActionListAddSuccess;

// Actor Item

export type ActorItemState = {
  actor: IActor;
  loading: boolean;
  error: string;
};
interface ActorItemActionRequest {
  type: typeof FETCH_ACTOR_ITEM_REQUEST;
}
interface ActorItemActionSuccess {
  type: typeof FETCH_ACTOR_ITEM_SUCCESS;
  payload: IActor;
}
interface ActorItemActionError {
  type: typeof FETCH_ACTOR_ITEM_ERROR;
  payload: { error: string };
}
export type ActorItemActionTypes =
  | ActorItemActionError
  | ActorItemActionSuccess
  | ActorItemActionRequest;
