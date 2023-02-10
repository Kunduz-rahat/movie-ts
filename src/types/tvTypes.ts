export const FETCH_SERIAL_LIST_REQUEST = "FETCH_SERIAL_LIST_REQUEST",
  FETCH_SERIAL_LIST_SUCCESS = "FETCH_SERIAL_LIST_SUCCESS",
  FETCH_SERIAL_LIST_ERROR = "FETCH_SERIAL_LIST_ERROR",
  FETCH_SERIAL_ITEM_REQUEST = "FETCH_SERIAL_ITEM_REQUEST",
  FETCH_SERIAL_ITEM_SUCCESS = "FETCH_SERIAL_ITEM_SUCCESS",
  FETCH_SERIAL_ITEM_ERROR = "FETCH_SERIAL_ITEM_ERROR";


	// Serial Interface 


export interface ISerial {
  id: number;
  name: string;
  overview: string;
  poster_path: string;
  first_air_date: string;
  vote_average: number;
  genres: IGenre[];
	backdrop_path:string
}

export interface IGenre {
  id: number;
  name: string;
}

// Serial List

export type SerialListState = {
  serials: ISerial[];
  loading: boolean;
  query: string;
  error: string;
  pages: number;
  results: number;
};
interface SerialActionListRequest {
  type: typeof FETCH_SERIAL_LIST_REQUEST;
}
interface SerialActionListSuccess {
  type: typeof FETCH_SERIAL_LIST_SUCCESS;
  payload: {
    serials: ISerial[];
    pages: number;
    results: number;
  };
}

export interface SerialActionListError {
  type: typeof FETCH_SERIAL_LIST_ERROR;
  payload: {
    error: string;
  };
}
export type SerialListActionTypes =
  | SerialActionListError
  | SerialActionListRequest
  | SerialActionListSuccess;

//Serial Item

export type SerialItemState = {
  serial: ISerial;
  loading: boolean;
  error: string;
};
interface SerialActionItemRequest {
  type: typeof FETCH_SERIAL_ITEM_REQUEST;
}
interface SerialActionItemSuccess {
  type: typeof FETCH_SERIAL_ITEM_SUCCESS;
  payload: ISerial;
}
export interface SerialActionItemError {
  type: typeof FETCH_SERIAL_ITEM_ERROR;
  payload: {
    error: string;
  };
}
export type SerialItemActionTypes =
  | SerialActionItemError
  | SerialActionItemRequest
  | SerialActionItemSuccess;
