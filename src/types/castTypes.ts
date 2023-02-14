export const FETCH_CAST_LIST_REQUEST = "FETCH_CAST_LIST_REQUEST",
  FETCH_CAST_LIST_SUCCESS = "FETCH_CAST_LIST_SUCCESS",
  FETCH_CAST_LIST_ERROR = "FETCH_CAST_LIST_ERROR";

// Actor interface
export interface IActor {
  id: number;
  name: string;
  profile_path: string;
  gender:number
}

// Cast List

export type CastListState = {
  cast: IActor[];
  castLoading: boolean;
  error: string;
};
interface CastActionListRequest {
  type: typeof FETCH_CAST_LIST_REQUEST;
}
interface CastActionListSuccess {
  type: typeof FETCH_CAST_LIST_SUCCESS;
  payload: {
    cast: IActor[];
  };
}
export interface CastActionListError {
  type: typeof FETCH_CAST_LIST_ERROR;
  payload: {
    error: string;
  };
}

export type CastListActionTypes =
  | CastActionListError
  | CastActionListRequest
  | CastActionListSuccess;
