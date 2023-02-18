import React, { useEffect } from "react";
import Moment from "react-moment";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { fetchItemSerial } from "../store/actions/serialItemAction";
import { fetchSerialTrailers } from "../store/actions/serialTrailerListAction";
import { RootState } from "../types/rootTypes";
import Spinner from "./Spinner";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay } from "swiper";
import { fetchCastSerial } from "../store/actions/castSerialListAction";
export const SerialCard: React.FC = () => {
  const { id }: any = useParams<{ id: string }>();
  const dispatch = useDispatch();

  const serialItem = useSelector((state: RootState) => state.serialItem);
  const { loading, serial } = serialItem;
  const serialTrailerList = useSelector(
    (state: RootState) => state.serialTrailerList
  );
  const { serialTrailerLoading, trailers } = serialTrailerList;
  const youtubeVideos = trailers.slice(0, 1);
  const castSerialList = useSelector(
    (state: RootState) => state.castSerialList
  );
  const { actorSerialLoading, cast } = castSerialList;
  useEffect(() => {
    dispatch<any>(fetchItemSerial(+id));
  }, [dispatch, id]);

  useEffect(() => {
    dispatch<any>(fetchSerialTrailers(id));
  }, [dispatch, id]);
  useEffect(() => {
    dispatch<any>(fetchCastSerial(id));
  }, [dispatch, id]);

  if (loading || serialTrailerLoading || actorSerialLoading) return <Spinner />;

  return (
    <div>
      <div
        className=" mx-auto text-left text-white "
        style={{
          backgroundImage: `  linear-gradient(to top, rgba(0,0,0,0.6), rgba(0,0,0,0.5)),url(https://image.tmdb.org/t/p/original/${serial.backdrop_path} )`,
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
                src={`https://image.tmdb.org/t/p/w500/${serial.poster_path}`}
                alt={serial.name}
                className="  object-cover rounded-xl "
              />
            </div>
            <div className="w-full md:w-2/3 lg:w-3/4 p-5 items-start justify-center bg-opacity-0 ">
              <div className="">
                <div>
                  <h2 className="text-5xl font-medium mb-6">{serial.name}</h2>
                </div>

                <div className="rounded-3xl border-white">
                  {serial.genres &&
                    serial.genres.map((genre, idx) => (
                      <span className="" key={idx}>
                        {genre.name}{" "}
                      </span>
                    ))}
                  <p className="text-xl  italic">{serial.overview}</p>
                  <Moment format="MMM D, YYYY">{serial.first_air_date}</Moment>
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
                    src={`https://image.tmdb.org/t/p/w500/${c.profile_path}`}
                    alt={c.name}
                    className="  object-cover rounded-xl   "
                  />
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className="lg:h-[480px] md:h-[420px] sm:h-[320px] h-[210px] rounded-md mx-auto shadow-lg mt-4 mx-auto max-w-screen-xl">
        {youtubeVideos.map((trailer, idx) => (
          trailer.key && (
            <div className="lg:h-[480px] md:h-[420px] sm:h-[320px] h-[210px] rounded-md mx-auto shadow-lg" key={idx}>
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
       
      ))
      }
        </div>
      </div>
    </div>
  );
};
