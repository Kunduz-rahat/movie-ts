import React, { FC, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useActions } from '../hooks/useActions'

import { useTypedSelector } from '../hooks/useTypedSelector'
import { fetchMovies } from '../store/actions/movieActions'

export const MovieList:FC = () => {
	const {loading, movies, error} = useTypedSelector(state => state.movie)
const {fetchMovies}= useActions()

	useEffect(()=>{fetchMovies() }, [])

	if(loading){
		return <h1>идет загрузка</h1>
	}
	if(error){
		return <h1>{error}</h1>
	}
	return (
		<div>
			{movies.map(movie=>
			<div>
				{movie.original_title}
				</div>
				)}
		</div>
	)
}