import { type } from "os";
import React, { FC, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { fetchItemMovie } from "../store/actions/movieItemActions";
import { RootState } from "../types/rootTypes";

export const MovieCard: FC = () => {
  const { id }: any = useParams<{ id: string }>();
  const dispatch = useDispatch();

  const movieItem = useSelector((state: RootState) => state.movieItem);
  const { loading, movie } = movieItem;
  useEffect(() => {
    dispatch<any>(fetchItemMovie(+id));
  }, [dispatch, id]);

  if (loading) return <h2>Загрузка</h2>;
  return (
    <div>
      <div
        className=" mx-auto text-left text-white"
        style={{
          backgroundImage: `url(https://image.tmdb.org/t/p/original/${movie.backdrop_path} )`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          width: "100vw",
          height: "100vh",
          padding: "0",
        }}
      >
        <div className="flex ">
          <div className=" w-full lg:w-1/3 p-8 text-center flex mx-auto">
            <img
              style={{ height: "500px" }}
              src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
              alt={movie.original_title}
              className="  object-cover rounded-xl "
            />
          </div>
          <div className="w-full  lg:w-2/3 p-5 items-start justify-center bg-opacity-0">
            <h2 className="text-5xl font-medium mb-6">
              {movie.original_title}
            </h2>

            {movie.genres &&
              movie.genres.map((genre, id) => (
                <span key={genre.id}>{genre.name} </span>
              ))}
            <p className="text-xl mb-12 italic">{movie.overview}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
