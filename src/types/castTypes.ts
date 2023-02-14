export const FETCH_CAST_LIST_REQUEST = "FETCH_CAST_LIST_REQUEST",
  FETCH_CAST_LIST_SUCCESS = "FETCH_CAST_LIST_SUCCESS",
  FETCH_CAST_LIST_ERROR = "FETCH_CAST_LIST_ERROR";

// Actor interface
export interface IActor {
  id: number;
  name: string;
  profile_path: string;
}

// Cast List

export type CastListState = {
  actors: IActor[];
  loading: boolean;
  error: string;
};
interface CastActionListRequest {
  type: typeof FETCH_CAST_LIST_REQUEST;
}
interface CastActionListSuccess {
  type: typeof FETCH_CAST_LIST_SUCCESS;
  payload: {
    actors: IActor[];
    pages: number;
    results: number;
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
