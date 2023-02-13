import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

import { Scrolling } from "../components/Scrolling";
import { Search } from "../components/Search";
import Spinner from "../components/Spinner";
import { addMovies, fetchMovies } from "../store/actions/movieListAction";
import { RootState } from "../types/rootTypes";

export const Movies: React.FC = () => {
  
  const dispatch = useDispatch();
  const [page, setPage] = useState(2);
  const [dataLength, setDataLength] = useState(20);
  const [hasMore, setHasMore] = useState(true);
  const movieList = useSelector((state: RootState) => state.movieList);
  const { loading, movies, pages, query, nextLoading, results } = movieList;
  useEffect(() => {
    dispatch<any>(fetchMovies());
  }, [dispatch]);

  const fetchNextPage = () => {
    if (!query) {
      dispatch<any>(addMovies(page));
      setPage(page + 1);
      setDataLength(dataLength + 20);
      if (page === pages) {
        setHasMore(false);
      }
    }
  };

  return (
    <div>
      <div className="flex justify-end pr-10">
        <Search movies />
      </div>
      {loading ? (
        <Spinner />
      ) : results !== 0 ? (
        <Scrolling
          dataLength={dataLength}
          next={fetchNextPage}
          hasMore={!nextLoading && hasMore}
        >
          <div className="grid grid-cols-5 gap-4 p-5">
            {movies.map(
              (movie) =>
                movie.poster_path && (
                  <div key={movie.id}>
                    <Link
                      to={`/movie/${movie.id}`}
                      className="hover:text-red-500"
                    >
                      <img
                        src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                        alt={movie.original_title}
                        className="rounded-3xl"
                      />
                    </Link>
                  </div>
                )
            )}
          </div>
        </Scrolling>
      ) : (
        <h2 className="py-2 text-center">Sorry, not fount movies</h2>
      )}
    </div>
  );
};
