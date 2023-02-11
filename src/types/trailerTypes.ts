export const FETCH_TRAILER_LIST_ERROR = "FETCH_TRAILER_LIST_ERROR",
  FETCH_TRAILER_LIST_SUCCESS = "FETCH_TRAILER_LIST_SUCCESS",
  FETCH_TRAILER_LIST_REQUEST = "FETCH_TRAILER_LIST_REQUEST";

export interface ITrailer {
  id: number;
  name: string;
  key: string;
}

export type TrailerListState = {
  trailers: ITrailer[];
  loading: boolean;
  error: string;
};

interface TrailerActionListRequest {
  type: typeof FETCH_TRAILER_LIST_REQUEST;
}
interface TrailerActionListSuccess {
  type: typeof FETCH_TRAILER_LIST_SUCCESS;
  payload: {
    trailers: ITrailer[];
  };
}
interface TrailerActionListError {
  type: typeof FETCH_TRAILER_LIST_ERROR;
  payload: {
    error: string;
  };
}

export type TrailerListActionTypes =
  | TrailerActionListError
  | TrailerActionListRequest
  | TrailerActionListSuccess;
