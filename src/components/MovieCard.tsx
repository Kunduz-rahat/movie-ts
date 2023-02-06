import React, { FC, useEffect } from "react";

import { useActions } from "../hooks/useActions";
import { useTypedSelector } from "../hooks/useTypedSelector";

export const MovieCard: FC = () => {
  const { loading, movies, error, results } = useTypedSelector(
    (state) => state.movieList
  );
  const { fetchMovies } = useActions();
  console.log(movies);
  useEffect(() => {
    fetchMovies();
  }, [fetchMovies]);

  if (loading) {
    return <h1>идет загрузка</h1>;
  }
  if (error) {
    return <h1>{error}</h1>;
  }
  return (
    <div>
      {movies.map((movie) => (
        <div>{movie.original_title}</div>
      ))}
    </div>
  );
};
