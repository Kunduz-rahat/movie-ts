import React, { useEffect } from "react";
import Moment from "react-moment";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay } from "swiper";
import { fetchItemActor } from "../store/actions/actorItemAction";
import { fetchActorMovieList } from "../store/actions/actorMovieListAction";
import { RootState } from "../types/rootTypes";
import Spinner from "./Spinner";
import NO_IMAGE from "../assets/image-not-found.png";
import { fetchActorSerialList } from "../store/actions/actorSerialListAction";

export const ActorCart: React.FC = () => {
  const { id }: any = useParams<{ id: string }>();
  const dispatch = useDispatch();

  //Get actor item

  const actorItem = useSelector((state: RootState) => state.actorItem);
  const { loading, actor } = actorItem;

  // Get actor list

  const actorMovieList = useSelector(
    (state: RootState) => state.actorMovieList
  );
  const { actorListLoading, cast } = actorMovieList;

  const actorSerialList = useSelector(
    (state: RootState) => state.actorSerialList
  );
  const { actorSerialListLoading, serials } = actorSerialList;

  SwiperCore.use([Autoplay]);

  useEffect(() => {
    dispatch<any>(fetchItemActor(+id));
  }, [dispatch, id]);

  useEffect(() => {
    dispatch<any>(fetchActorMovieList(+id));
  }, [dispatch, id]);

  useEffect(() => {
    dispatch<any>(fetchActorSerialList(+id));
  }, [dispatch, id]);

  if (loading || actorListLoading || actorSerialListLoading) return <Spinner />;

  return (
    <div className=" mx-auto text-left text-white ">
      <div className=" mx-auto max-w-screen-xl">
        <div className="lg:flex md:flex">
          <div className="w-full lg:w-1/4 md:w-1/3 p-8 text-center flex mx-auto justify-center">
            <img
              style={{ height: "350px" }}
              src={
                actor.profile_path
                  ? `https://image.tmdb.org/t/p/w500/${actor.profile_path}`
                  : NO_IMAGE
              }
              alt={actor.name}
              className="  object-cover rounded-xl "
            />
          </div>
          <div className="w-full md:w-2/3 lg:w-3/4 p-5 items-start justify-center bg-opacity-0 ">
            <div className="">
              <div>
                <h2 className="text-5xl font-medium mb-6 text-slate-300">
                  {actor.name}
                </h2>
              </div>

              <div className="rounded-3xl border-white">
                {actor.biography ?  <p className="text-xl  italic">{actor.biography}</p> : <p className="text-xl italic">{`We do not have a biography about ${actor.name}`}</p> }
               
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="pl-8 pr-8  mx-auto max-w-screen-xl">
        {cast.length ? (
          <h2 className="italic text-2xl text-semibold m-3">
            Known for movies
          </h2>
        ) : (
          ""
        )}

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
              slidesPerView: 4,
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
          {cast.map((movie) => (
            <SwiperSlide>
              <Link to={`/movie/${movie.id}`}>
                <img
                  style={{ height: "200px" }}
                  src={
                    movie.poster_path
                      ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
                      : NO_IMAGE
                  }
                  alt={movie.original_title}
                  className="  object-cover rounded-xl hover:scale-110"
                />
                <p className="text-xl hover:text-my-red font-semibold mt-4">{movie.original_title}</p>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="flex justify-between mt-5 mb-5">
          <div className="w-1/3">
            <h3 className="text-2xl font-semibold mb-4"> Personal info</h3>
            <p className="text-slate-300">Know for:</p>
            <p className="font-semibold text-lg ">{actor.known_for_department}</p>
            <p className="text-slate-300 mt-2">Genger:</p>
            <p className="font-semibold text-lg">{actor.gender === 1 ? "Female" : "Male"}</p>
            {actor.birthday &&    <p className="text-slate-300 mt-2">Birthday:</p>}
         
            <p className="font-semibold text-lg">
              {actor.birthday && (
                <Moment format="MMM D, YYYY">{actor.birthday}</Moment>
              )}
            </p>
            {actor.place_of_birth &&     <p className="text-slate-300 mt-2">Place of birth:</p> }
        
            <p className="font-semibold text-lg">{actor.place_of_birth}</p>
          </div>
          <div className="w-2/3">
            {serials.length  >0 ?<h3 className="text-2xl font-medium mb-3 text-slate-300">Acting for tv</h3> :''}
            {serials
              .sort((a, b) => {
                return (
                  new Date(b.first_air_date).getTime() -
                  new Date(a.first_air_date).getTime()
                );
              })
              .map((serial) => (
                <Link to={`/serial/${serial.id}`}>
                 <div className="flex items-center">
                 
                  {serial.first_air_date ?  <Moment format=" YYYY" className="text-xl font-semibold">{serial.first_air_date}</Moment> :'No date'}
                
                 <svg
                   xmlns="http://www.w3.org/2000/svg"
                   fill="none"
                   viewBox="0 0 24 24"
                   stroke-width="1.5"
                   stroke="currentColor"
                   className="w-6 h-6 ml-2"
                 >
                   <path
                     stroke-linecap="round"
                     stroke-linejoin="round"
                     d="M3.375 19.5h17.25m-17.25 0a1.125 1.125 0 01-1.125-1.125M3.375 19.5h1.5C5.496 19.5 6 18.996 6 18.375m-3.75 0V5.625m0 12.75v-1.5c0-.621.504-1.125 1.125-1.125m18.375 2.625V5.625m0 12.75c0 .621-.504 1.125-1.125 1.125m1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125m0 3.75h-1.5A1.125 1.125 0 0118 18.375M20.625 4.5H3.375m17.25 0c.621 0 1.125.504 1.125 1.125M20.625 4.5h-1.5C18.504 4.5 18 5.004 18 5.625m3.75 0v1.5c0 .621-.504 1.125-1.125 1.125M3.375 4.5c-.621 0-1.125.504-1.125 1.125M3.375 4.5h1.5C5.496 4.5 6 5.004 6 5.625m-3.75 0v1.5c0 .621.504 1.125 1.125 1.125m0 0h1.5m-1.5 0c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125m1.5-3.75C5.496 8.25 6 7.746 6 7.125v-1.5M4.875 8.25C5.496 8.25 6 8.754 6 9.375v1.5m0-5.25v5.25m0-5.25C6 5.004 6.504 4.5 7.125 4.5h9.75c.621 0 1.125.504 1.125 1.125m1.125 2.625h1.5m-1.5 0A1.125 1.125 0 0118 7.125v-1.5m1.125 2.625c-.621 0-1.125.504-1.125 1.125v1.5m2.625-2.625c.621 0 1.125.504 1.125 1.125v1.5c0 .621-.504 1.125-1.125 1.125M18 5.625v5.25M7.125 12h9.75m-9.75 0A1.125 1.125 0 016 10.875M7.125 12C6.504 12 6 12.504 6 13.125m0-2.25C6 11.496 5.496 12 4.875 12M18 10.875c0 .621-.504 1.125-1.125 1.125M18 10.875c0 .621.504 1.125 1.125 1.125m-2.25 0c.621 0 1.125.504 1.125 1.125m-12 5.25v-5.25m0 5.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125m-12 0v-1.5c0-.621-.504-1.125-1.125-1.125M18 18.375v-5.25m0 5.25v-1.5c0-.621.504-1.125 1.125-1.125M18 13.125v1.5c0 .621.504 1.125 1.125 1.125M18 13.125c0-.621.504-1.125 1.125-1.125M6 13.125v1.5c0 .621-.504 1.125-1.125 1.125M6 13.125C6 12.504 5.496 12 4.875 12m-1.5 0h1.5m-1.5 0c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125M19.125 12h1.5m0 0c.621 0 1.125.504 1.125 1.125v1.5c0 .621-.504 1.125-1.125 1.125m-17.25 0h1.5m14.25 0h1.5"
                   />
                 </svg>

                 <p className="ml-2 text-slate-300 text-lg">{serial.original_name}</p>
                 
                 <p  className=" ml-2 text-slate-100 text-lg" > <span>{serial.character ? 'as' :''}</span> {serial.character? serial.character :'' }</p>
               </div>
                </Link>
               
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};
