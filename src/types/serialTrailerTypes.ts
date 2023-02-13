export const FETCH_TRAILER_SERIAL_LIST_ERROR =
    "FETCH_TRAILER_SERIAL_LIST_ERROR",
  FETCH_TRAILER_SERIAL_LIST_SUCCESS = "FETCH_TRAILER_SERIAL_LIST_SUCCESS",
  FETCH_TRAILER_SERIAL_LIST_REQUEST = "FETCH_TRAILER_SERIAL_LIST_REQUEST";

export interface ISerialTrailer {
  id: number;
  name: string;
  key: string;
}

export type TrailerSerialListState = {
  trailers: ISerialTrailer[];
  serialTrailerLoading: boolean;
  error: string;
};

interface SerialTrailerActionListRequest {
  type: typeof FETCH_TRAILER_SERIAL_LIST_REQUEST;
}
interface SerialTrailerActionListSuccess {
  type: typeof FETCH_TRAILER_SERIAL_LIST_SUCCESS;
  payload: {
    trailers: ISerialTrailer[];
  };
}
interface SerialTrailerActionListError {
  type: typeof FETCH_TRAILER_SERIAL_LIST_ERROR;
  payload: {
    error: string;
  };
}

export type SerialTrailerListActionTypes =
  | SerialTrailerActionListError
  | SerialTrailerActionListRequest
  | SerialTrailerActionListSuccess;
