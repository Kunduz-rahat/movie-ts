import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchMovies } from "../store/actions/movieListAction";
import { RootState } from "../types/rootTypes";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay } from "swiper";

import "swiper/css";
import "swiper/css/pagination";
import { Link } from "react-router-dom";
import Spinner from "../components/Spinner";

export const Home: React.FC = () => {
  SwiperCore.use([Autoplay]);

  const dispatch = useDispatch();

  const movieList = useSelector((state: RootState) => state.movieList);
  const { loading, movies } = movieList;

  useEffect(() => {
    dispatch<any>(fetchMovies());
  }, [dispatch]);
  if (loading) return <Spinner/>
  return (
    <div className="bg-gradient-to-r from-sky-500 to-indigo-500 ">
      <Swiper
        pagination={{
          dynamicBullets: true,
        }}
        className="mySwiper "
        modules={[Autoplay]}
        grabCursor={true}
        spaceBetween={0}
        slidesPerView={1}
        loop={true}
        autoplay={{
          delay: 2000,
          pauseOnMouseEnter: true,
          disableOnInteraction: false,
        }}
      >
        {movies.map((movie, idx) => (
          <SwiperSlide className="h-full p-0" key={idx}>
            <div
              className=" mx-auto text-left text-white"
              style={{
                backgroundImage: `  linear-gradient(to top, rgba(0,0,0,0.6), rgba(0,0,0,0.5)),url(https://image.tmdb.org/t/p/original/${movie.backdrop_path} )`,
                backgroundPosition: "center",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                width: "100vw",
                height: "100vh",
                padding: "0",

                backgroundColor:
                  "linear-gradient(90deg, rgba(2,2,28,1) 0%, rgba(11,132,193,1) 100%)",
              }}
            >
              <div className="flex items-center">
                <div className=" p-5 items-center justify-center bg-opacity-0">
                  <h1 className="text-8xl font-medium mb-6 ">
                    {movie.original_title}
                  </h1>
                  
                  <Link to={`/movie/${movie.id}`}>
                    <button className=" mt-5 uppercase mx-auto tracking-2 hover:shadow-3xl bg-my-red  font-semibold spacing-2   focus:shadow-outline focus:outline-none text-white text-xl py-3 px-10 rounded-full">
                      Watch now
                    </button>
                  </Link>
                </div>
               
              </div> 
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
