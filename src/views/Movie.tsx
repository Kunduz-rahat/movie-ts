import React, { useState, useEffect } from "react";
import Carousel from "react-bootstrap/esm/Carousel";
import { useDispatch, useSelector } from "react-redux";
import { fetchMovies } from "../store/actions/movieListActions";
import { RootState } from "../types/rootTypes";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay } from "swiper";

import "swiper/css";
import "swiper/css/pagination";

export const Movie: React.FC = () => {
  SwiperCore.use([Autoplay]);
  const [page, setPage] = useState(2);
  const [dataLength, setDataLength] = useState(20);
  const [hasMore, setHasMore] = useState(true);

  const dispatch = useDispatch();

  const movieList = useSelector((state: RootState) => state.movieList);
  const { loading, movies, results, pages } = movieList;

  useEffect(() => {
    dispatch<any>(fetchMovies());
  }, [dispatch]);

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
        <SwiperSlide className="h-full">
         
          <div className="flex"
            style={{
              backgroundImage: `url(https://image.tmdb.org/t/p/original/${movie.backdrop_path} )`,
							backgroundPosition: 'center',
							backgroundSize: 'cover',
							backgroundRepeat: 'no-repeat',
							width: '100vw',
							height: '100vh'}}
          >
						<div>
						<img 
            className=""
            src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
            alt={movie.original_title}
         />
						</div>
						<div>
						<h2>{movie.original_title}</h2>
						<p>{movie.overview}</p>
						</div>
					
					</div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
