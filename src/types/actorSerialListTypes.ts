export const FETCH_ACTOR_SERIAL_LIST_REQUEST =
    "FETCH_SERIAL_MOVIE_LIST_REQUEST",
  FETCH_ACTOR_SERIAL_LIST_SUCCESS = "FETCH_ACTOR_SERIAL_LIST_SUCCESS",
  FETCH_ACTOR_SERIAL_LIST_ERROR = "FETCH_ACTOR_SERIAL_LIST_ERROR";

export interface IMovie {
  id: number;
  backdrop_path: string;
  poster_path: string;
  original_name: string;
	first_air_date:string |  number;
	character:string
}

//Actor Movie List
export type ActorSerailListState = {
  serials: IMovie[];
  actorSerialListLoading: boolean;
  error: string;
};

export interface ActorSerialActionListError {
  type: typeof FETCH_ACTOR_SERIAL_LIST_ERROR;
  payload: {
    error: string;
  };
}

export interface ActorSerailActionListRequest {
  type: typeof FETCH_ACTOR_SERIAL_LIST_REQUEST;
}
export interface ActorSerailActionListSuccess {
  type: typeof FETCH_ACTOR_SERIAL_LIST_SUCCESS;
  payload: {
    serials: IMovie[];
  };
}

export type ActorSerialListAction =
  | ActorSerailActionListRequest
  | ActorSerailActionListSuccess
  | ActorSerialActionListError;
