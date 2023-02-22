import React, { FC, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import Moment from "react-moment";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay } from "swiper";
import { fetchTrailers } from "../store/actions/trailerListAction";
import { fetchItemMovie } from "../store/actions/movieItemAction";
import { fetchCast } from "../store/actions/castListAction";
import { RootState } from "../types/rootTypes";
import Spinner from "./Spinner";
import NO_IMAGE from "../assets/image-not-found.png";

export const MovieCard: React.FC = () => {
  const { id }: any = useParams<{ id: string }>();
  const dispatch = useDispatch();

  // Get movie item

  const movieItem = useSelector((state: RootState) => state.movieItem);
  const { loading, movie } = movieItem;

  // Get movie trailer

  const trailerList = useSelector((state: RootState) => state.trailerList);
  const { trailerLoading, trailers } = trailerList;

  // Get cast list

  const castList = useSelector((state: RootState) => state.castList);
  const { castLoading, cast } = castList;
  const youtubeVideos = trailers.slice(0, 1);

  SwiperCore.use([Autoplay]);

  useEffect(() => {
    dispatch<any>(fetchItemMovie(+id));
  }, [dispatch, id]);

  useEffect(() => {
    dispatch<any>(fetchTrailers(id));
  }, [dispatch, id]);

  useEffect(() => {
    dispatch<any>(fetchCast(id));
  }, [dispatch, id]);

  if (loading || trailerLoading || castLoading) {
    return <Spinner />;
  }

  return (
    <div>
      <div
        className=" mx-auto text-left text-white "
        style={{
          backgroundImage: `  linear-gradient(to top, rgba(0,0,0,0.6), rgba(0,0,0,0.5)),url(https://image.tmdb.org/t/p/original/${movie.backdrop_path} )`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          width: "100vw",
          height: "300px",
          padding: "0",
        }}
      >
        <div className=" mx-auto max-w-screen-xl">
          <div className="lg:flex md:flex">
            <div className="mow-full lg:w-1/4 md:w-1/3 p-8 text-center flex mx-auto justify-center">
              <img
                style={{ height: "350px" }}
                src={movie.poster_path ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}` : NO_IMAGE}
                alt={movie.original_title}
                className="  object-cover rounded-xl "
              />
            </div>
            <div className="w-full md:w-2/3 lg:w-3/4 p-5 items-start justify-center  ">
              <div className="">
                <div>
                  <h2 className="text-6xl  mb-6 text-slate-300 font-semibold">
                    {movie.original_title}
                  </h2>
                </div>

                <div className="">
                  <div className="flex ">
                  {movie.genres &&
                    movie.genres.map((genre, idx) => (
                      <div className=" mr-3 border-white border-solid bottom-1 p-1" key={idx}>
                        {genre.name}{" "}
                      </div>
                    ))}
                  </div>
                 
                  <p className="text-xl  italic ">{movie.overview}</p>
                  <div className="mt-4 text-xl font-medium">
                  <Moment format="MMM D, YYYY">{movie.release_date}</Moment>
                  </div>
                 
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="pl-8 pr-8  mx-auto max-w-screen-xl">
          <h2 className="italic text-2xl text-semibold m-3">Cast</h2>
          <Swiper
            pagination={{
              dynamicBullets: true,
            }}
            className="mySwiper "
            modules={[Autoplay]}
            grabCursor={true}
            breakpoints={{
              0: {
                slidesPerView: 2,
                spaceBetween: 10,
              },
              480: {
                slidesPerView: 3,
                spaceBetween: 15,
              },
              768: {
                slidesPerView: 6,
                spaceBetween: 18,
              },
              1024: {
                slidesPerView: 8,
                spaceBetween: 20,
              },
            }}
          >
            {cast.map((c) => (
              <SwiperSlide>
                <Link to={`/actor/${c.id}`}>
                  <img
                    style={{ height: "200px" }}
                    src={
                      c.profile_path
                        ? `https://image.tmdb.org/t/p/w500/${c.profile_path}`
                        : NO_IMAGE
                    }
                    alt={c.name}
                    className="  object-cover rounded-xl hover:scale-110   "
                  />
                 
                </Link>
                <p className="text-xl font-semibold  mt-4">{c.name}</p>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        {youtubeVideos.map(
          (trailer, idx) =>
            trailer.key && (
              <div
                className="lg:h-[480px] md:h-[420px] sm:h-[320px] h-[210px] rounded-md mx-auto mt-5 shadow-lg"
                key={idx}
              >
                {trailer.key && (
                  <iframe
                    src={`https://www.youtube.com/embed/${trailer.key}?enablejsapi=1&origin=http://127.0.0.1:5173/`}
                    title="trailer"
                    width="100%"
                    height="100%"
                    className="rounded-md"
                    allowFullScreen
                  />
                )}
              </div>
            )
        )}
      </div>
    </div>
  );
};
