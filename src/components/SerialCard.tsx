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
  const castSerialList = useSelector((state: RootState) => state.castSerialList);
  const {actorSerialLoading, cast } = castSerialList;
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
    <div className="mx-auto max-w-screen-xl">
      <div
        className=" mx-auto text-left text-white"
        style={{
          backgroundImage: `url(https://image.tmdb.org/t/p/original/${serial.backdrop_path} )`,
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
              src={`https://image.tmdb.org/t/p/w500/${serial.poster_path}`}
              alt={serial.name}
              className="  object-cover rounded-xl "
            />
          </div>
          <div className="w-full  lg:w-2/3 p-5 items-start justify-center bg-opacity-0">
            <h2 className="text-5xl font-medium mb-6">{serial.name}</h2>

            {serial.genres &&
              serial.genres.map((genre, idx) => (
                <span key={idx}>{genre.name} </span>
              ))}
            <p className="text-xl mb-12 italic">{serial.overview}</p>
            <Moment format="MMM D, YYYY">{serial.first_air_date}</Moment>
            <Swiper
              pagination={{
                dynamicBullets: true,
              }}
              className="mySwiper"
              modules={[Autoplay]}
              grabCursor={true}
              spaceBetween={0}
              slidesPerView={6}
            >
              {cast.map((c) => (
                <SwiperSlide>
                  <Link to={`/actor/${c.id}`}>
                    <img
                      style={{ height: "200px" }}
                      src={`https://image.tmdb.org/t/p/w500/${c.profile_path}`}
                      alt={c.original_title}
                      className="  object-cover rounded-xl "
                    />
                  </Link>
                </SwiperSlide>
              ))}
            </Swiper>        
          </div>
        </div>
      </div>

      {youtubeVideos.map((trailer, idx) => (
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
      ))}
    </div>
  );
};
