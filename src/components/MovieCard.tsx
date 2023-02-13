import React, { FC, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import Moment from "react-moment";
import { Player } from "video-react";

import { fetchItemMovie } from "../store/actions/movieItemAction";
import { RootState } from "../types/rootTypes";
import { fetchTrailers } from "../store/actions/trailerListAction";

export const MovieCard: FC = () => {
  const { id }: any = useParams<{ id: string }>();
  const dispatch = useDispatch();

  const movieItem = useSelector((state: RootState) => state.movieItem);
  const { loading, movie } = movieItem;
  const trailerList = useSelector((state: RootState) => state.trailerList);
  const { trailerLoading, trailers } = trailerList;
  useEffect(() => {
    dispatch<any>(fetchItemMovie(+id));
  }, [dispatch, id]);

  useEffect(() => {
    dispatch<any>(fetchTrailers(id));
  }, [dispatch, id]);
  if (loading) return <h2>Загрузка фильма</h2>;
  if (trailerLoading) return <h2>Загрузка трейлера</h2>;
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
            <Moment format="MMM D, YYYY">{movie.release_date}</Moment>
          </div>
        </div>
      </div>
      {trailers.map((trailer) => (
        // <Player key={trailer.id}>
        //   <source src={`https://www.youtube.com/watch?v=${trailer.key}`} type="video/mp4"/>
        // </Player>
        <iframe
        src={`https://www.youtube.com/embed/${trailer.key}?enablejsapi=1&origin=http://127.0.0.1:5173/`}
        title="trailer"
        width="100%"
        height="100%"
        className="rounded-md"
        allowFullScreen
      />
       
      
      ))}
    </div>
  );
};
