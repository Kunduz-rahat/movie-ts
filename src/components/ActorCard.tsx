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

export const ActorCart = () => {
  const { id }: any = useParams<{ id: string }>();
  const dispatch = useDispatch();

  const actorItem = useSelector((state: RootState) => state.actorItem);
  const { loading, actor } = actorItem;
  const actorMovieList = useSelector((state: RootState) => state.actorMovieList);
  const { actorListLoading, cast } = actorMovieList;
  SwiperCore.use([Autoplay]);

  useEffect(() => {
    dispatch<any>(fetchItemActor(+id));
  }, [dispatch, id]);

  useEffect(() => {
    dispatch<any>(fetchActorMovieList(+id));
  }, [dispatch, id])

  if (loading || actorListLoading)  return <Spinner />;

  return (
    <div
        className=" mx-auto text-left text-white "
    
      >
        <div className=" mx-auto max-w-screen-xl">
          <div className="lg:flex md:flex">
            <div className="mow-full lg:w-1/4 md:w-1/3 p-8 text-center flex mx-auto justify-center">
              <img
                style={{ height: "350px" }}
                src={`https://image.tmdb.org/t/p/w500/${actor.profile_path}`}
                alt={actor.name}
                className="  object-cover rounded-xl "
              />
            </div>
            <div className="w-full md:w-2/3 lg:w-3/4 p-5 items-start justify-center bg-opacity-0 ">
              <div className="">
                <div>
                  <h2 className="text-5xl font-medium mb-6">{actor.name}</h2>
                </div>

                <div className="rounded-3xl border-white">
                
                  <p className="text-xl  italic">{actor.biography}</p>
                  <Moment format="MMM D, YYYY">{actor.birthday}</Moment>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="pl-8 pr-8  mx-auto max-w-screen-xl">
          {cast.length ?   <h2 className="italic text-2xl text-semibold m-3">Know for</h2> :""}
        
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
           {cast.map((movie) => (
                <SwiperSlide>
                  <Link to={`/movie/${movie.id}`}>
                    <img
                      style={{ height: "200px" }}
                      src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                      alt={movie.original_title}
                      className="  object-cover rounded-xl "
                    />
                  </Link>
                </SwiperSlide>
              ))}
          </Swiper>
        </div>
      
      </div>
  );
};
