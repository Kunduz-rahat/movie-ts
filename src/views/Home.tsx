import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchMovies } from "../store/actions/movieListActions";
import { RootState } from "../types/rootTypes";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay } from "swiper";

import "swiper/css";
import "swiper/css/pagination";
import { Link } from "react-router-dom";

export const Home: React.FC = () => {
  SwiperCore.use([Autoplay]);


  const dispatch = useDispatch();

  const movieList = useSelector((state: RootState) => state.movieList);
  const { loading, movies } = movieList;

  useEffect(() => {
    dispatch<any>(fetchMovies());
  }, [dispatch]);
if(loading) return <h1>Загрузка..</h1>
  return (
    <Swiper
      pagination={{
        dynamicBullets: true,
      }}
      className="mySwiper"
      modules={[Autoplay]}
      grabCursor={true}
      spaceBetween={0}
      slidesPerView={1}
    >
      {movies.map((movie) => (
        <SwiperSlide className="h-full p-0">
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
            <div className="flex items-center">
              <div className="w-1/2 p-5 items-center justify-center bg-opacity-0">
                <h2 className="text-5xl font-medium mb-6">
                  {movie.original_title}
                </h2>
                <p className="text-xl mb-12 italic">{movie.overview}</p>
              </div>
              <div className="w-1/2 p-8 text-center flex mx-auto">
            <Link to={`/movie/${movie.id}`}>
                <img
                  style={{ height: "500px" }}
                  src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                  alt={movie.original_title}
                  className="  object-cover rounded-xl "
                />
                </Link>
                
              </div>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
