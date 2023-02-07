import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { fetchMovies } from '../store/actions/movieListActions';
import { RootState } from '../types/rootTypes';
 

export const Movie:React.FC= () => {
	const [page, setPage] = useState(2);
	const [dataLength, setDataLength] = useState(20);
	const [hasMore, setHasMore] = useState(true);

	const dispatch = useDispatch();

	const movieList = useSelector((state: RootState) => state.movieList);
	const { loading, movies,  results, pages } = movieList;

	useEffect(() => {
		dispatch<any>(fetchMovies());
	}, [dispatch]);

	return (
		<div>
			{
				movies.map(movie=>
					<div>{movie.original_title}</div>)
			}
		</div>
	)
}
