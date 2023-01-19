import React, { FC, useEffect } from 'react'
import { useActions } from '../hooks/useActions'
import { useTypedSelector } from '../hooks/useTypedSelector'
import { fetchMovies } from '../store/actions/movieActions'
import { MovieCard } from './MovieCard'

export const MovieList:FC = () => {
	
	return (
		<div>
			<MovieCard/>
		
		</div>
	)
}