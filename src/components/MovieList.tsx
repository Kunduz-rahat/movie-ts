import React, { FC } from 'react'

import { useTypedSelector } from '../hooks/useTypedSelector'

export const MovieList:FC = () => {
	const {loading, movies, error} = useTypedSelector(state => state.movie)
	console.log(loading)
	return (
		<div>MovieList</div>
	)
}