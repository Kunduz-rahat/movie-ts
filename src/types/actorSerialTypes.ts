export const FETCH_ACTOR_SERIAL_LIST_REQUEST ="FETCH_ACTOR_SERIAL_LIST_REQUEST",
  FETCH_ACTOR_SERIAL_LIST_SUCCESS = "FETCH_ACTOR_SERIAL_LIST_SUCCESS",
  FETCH_ACTOR_SERIAL_LIST_ERROR = "FETCH_ACTOR_SERIAL_LIST_ERROR";

export interface IMovie {
  id: number;
  backdrop_path: string;
  poster_path: string;
  original_title: string;
}

//Actor Movie List
export type ActorSerialListState = {
  cast: IMovie[];
  actorSerialLoading: boolean;
  error: string;
};

export interface ActorSerialActionListError {
  type: typeof FETCH_ACTOR_SERIAL_LIST_ERROR;
  payload: {
    error: string;
  };
}

export interface ActorSerialActionListRequest {
  type: typeof FETCH_ACTOR_SERIAL_LIST_REQUEST;
}
export interface ActorSerialActionListSuccess {
  type: typeof FETCH_ACTOR_SERIAL_LIST_SUCCESS;
  payload: {
    cast: IMovie[];
  };
}

export type ActorSerialListAction =
  | ActorSerialActionListRequest
  | ActorSerialActionListSuccess
  | ActorSerialActionListError;
