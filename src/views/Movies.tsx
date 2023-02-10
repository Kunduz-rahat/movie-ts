import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { fetchMovies } from "../store/actions/movieListActions";
import { RootState } from "../types/rootTypes";

export const Movies: React.FC = () => {
  const dispatch = useDispatch();

  const movieList = useSelector((state: RootState) => state.movieList);
  const { loading, movies } = movieList;
  useEffect(() => {
    dispatch<any>(fetchMovies());
  }, [dispatch]);
  return (
    <div className="grid grid-cols-5 gap-4 p-5">
      {movies.map(
        (movie) =>
          movie.poster_path && (
            <div key={movie.id}>
              <Link to={`/movie/${movie.id}`} className="hover:text-red-500">
                <img
                  src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                  alt={movie.original_title} className='rounded-3xl'
                />
              </Link>
            </div>
          )
      )}
    </div>
  );
};