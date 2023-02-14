import React, { useEffect } from "react";
import Moment from "react-moment";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchItemSerial } from "../store/actions/serialItemAction";
import { fetchSerialTrailers } from "../store/actions/serialTrailerListAction";
import { RootState } from "../types/rootTypes";
import Spinner from "./Spinner";

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
  useEffect(() => {
    dispatch<any>(fetchItemSerial(+id));
  }, [dispatch, id]);

  useEffect(() => {
    dispatch<any>(fetchSerialTrailers(id));
  }, [dispatch, id]);

  if (loading) return <Spinner />;
  if (serialTrailerLoading) return <h2>Загрузка трейлера</h2>;
  return (
    <div>
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
