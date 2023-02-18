export const FETCH_CAST_SERIAL_LIST_REQUEST ="FETCH_CAST_SERIAL_LIST_REQUEST",
  FETCH_CAST_SERIAL_LIST_SUCCESS = "FETCH_CAST_SERIAL_LIST_SUCCESS",
  FETCH_CAST_SERIAL_LIST_ERROR = "FETCH_CAST_SERIAL_LIST_ERROR";

export interface IMovie {
  id: number;
  name: string;
  profile_path: string;
  original_title: string;
}

//Actor Movie List
export type CastSerialListState = {
  cast: IMovie[];
  actorSerialLoading: boolean;
  error: string;
};

export interface CastSerialActionListError {
  type: typeof FETCH_CAST_SERIAL_LIST_ERROR;
  payload: {
    error: string;
  };
}

export interface CastSerialActionListRequest {
  type: typeof FETCH_CAST_SERIAL_LIST_REQUEST;
}
export interface CastSerialActionListSuccess {
  type: typeof FETCH_CAST_SERIAL_LIST_SUCCESS;
  payload: {
    cast: IMovie[];
  };
}

export type CastSerialListAction =CastSerialActionListError | CastSerialActionListRequest |CastSerialActionListSuccess