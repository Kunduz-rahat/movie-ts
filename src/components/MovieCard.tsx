import { type } from "os";
import React, { FC, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchItemMovie } from "../store/actions/movieItemActions";
import { RootState } from "../types/rootTypes";

export const MovieCard: FC = () => {

  const { id } :any= useParams<{ id: string }>();
	const dispatch = useDispatch();

	const movieItem = useSelector((state: RootState) => state.movieItem);
	const { loading, movie } = movieItem;
	// const {
		
	// 	poster_path,
	// 	vote_average,
	// 	release_date,
	// 	overview,
	// 	genres,
	// } = movie;
console.log(movie)
		useEffect(() => {
		dispatch<any>(fetchItemMovie(+id));
	}, [dispatch, id]);

  if (loading) return <h2>Загрузка</h2>;
  return (
    <div>
    <p>{movie.title}</p>
    </div>
  );
};
