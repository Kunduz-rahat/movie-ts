import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { addMovies, fetchMovies } from "../store/actions/movieListAction";
import { RootState } from "../types/rootTypes";
import { Scrolling } from "../components/Scrolling";
import { Search } from "../components/Search";
import Spinner from "../components/Spinner";
import Moment from "react-moment";

export const Movies: React.FC = () => {
  const dispatch = useDispatch();
  const [page, setPage] = useState(2);
  const [dataLength, setDataLength] = useState(20);
  const [hasMore, setHasMore] = useState(true);

  //Get movies

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
    <div className="mx-auto max-w-screen-xl">
      <div className="flex justify-end pr-10 ">
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
              (movie, idx) =>
                movie.poster_path && (
                  <div key={idx}>
                    <Link to={`/movie/${movie.id}`} className="scale-125">
                      <img
                        src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                        alt={movie.original_title}
                        className="rounded-3xl hover:scale-105"
                      />
                    </Link>
                    <p className="font-semibold text-xl mt-3">
                      {movie.original_title}
                    </p>
                    <div className="flex justify-between font-semibold text-slate-300 ">
                      <p>
                        {" "}
                        <Moment format=" YYYY">{movie.release_date}</Moment>
                      </p>
                      <p className="flex text-white font-bold">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="orange"
                          viewBox="0 0 24 24"
                          stroke-width="1.5"
                          stroke="none"
                          className="w-6 h-6 text-slate-300"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
                          />
                        </svg>
                        {movie.vote_average}/ 10{" "}
                      </p>
                    </div>
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
