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
    <div className="flex  mx-auto max-w-screen-lg">
      <div className="w-full lg:w-1/3 p-8 text-center flex mx-auto">
        <img
          src={`https://image.tmdb.org/t/p/w500/${actor.profile_path}`}
          alt={actor.name}
          className="rounded-3xl"
        />
      </div>
      <div className="w-full  lg:w-2/3 p-5 items-start justify-center">
        <h2 className="text-5xl font-medium">{actor.name}</h2>
        <p>{actor.biography}</p>
        {actor.birthday && (
          <Moment format="MMM D, YYYY">{actor.birthday}</Moment>
        )}
          <Swiper
              pagination={{
                dynamicBullets: true,
              }}
              className="mySwiper"
              modules={[Autoplay]}
              grabCursor={true}
             
             
              breakpoints={{
                0:{
                  slidesPerView:1,
                  spaceBetween:10
                },
                480:{
                  slidesPerView:2,
                  spaceBetween:15
                },
                768:{
                  slidesPerView:4,
                  spaceBetween:18
                },
                1024:{
                  slidesPerView:6,
                  spaceBetween:20
                }
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
