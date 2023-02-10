import React, { useEffect } from "react";
import Moment from "react-moment";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchItemActor } from "../store/actions/actorItemReducer";
import { RootState } from "../types/rootTypes";

export const ActorCart = () => {
  const { id }: any = useParams<{ id: string }>();
  const dispatch = useDispatch();

  const actorItem = useSelector((state: RootState) => state.actorItem);
  const { loading, actor } = actorItem;
  useEffect(() => {
    dispatch<any>(fetchItemActor(+id));
  }, [dispatch, id]);

  return (
    <div className="flex">
      <div className="w-full lg:w-1/3 p-8 text-center flex mx-auto">
        <img
          src={`https://image.tmdb.org/t/p/w500/${actor.profile_path}`}
          alt={actor.name} className='rounded-3xl'
        />
      </div>
      <div className="w-full  lg:w-2/3 p-5 items-start justify-center">
        <h2>{actor.name}</h2>
        <p>{actor.biography}</p>

        <Moment format="MMM D, YYYY">{actor.birthday}</Moment>
      </div>
    </div>
  );
};
