export interface MovieState{
	movies:any[],
	loading:boolean,
	error:null | string
}

export enum MovieActionTypes{
	FETCH_MOVIE = 'FETCH_MOVIE',
	FETCH_MOVIE_ERROR = 'FETCH_MOVIE_ERROR',
	FETCH_MOVIE_SUCCESS = 'FETCH_MOVIE_SUCCESS'
}

interface FetchMovieAction{
	type:MovieActionTypes.FETCH_MOVIE
}

interface FetchMovieActionError{
	type:MovieActionTypes.FETCH_MOVIE_ERROR,
	payload:string
}

interface FetchMovieActionSuccess{
	type:MovieActionTypes.FETCH_MOVIE_SUCCESS,
	payload:any[]
}

export type MovieAction = FetchMovieAction | FetchMovieActionError | FetchMovieActionSuccess