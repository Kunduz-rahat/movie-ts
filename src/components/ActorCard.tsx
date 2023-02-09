import React, { useEffect } from "react";
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
    <div>
      <h2>{actor.name}</h2>
      <p>{actor.biography}</p>
      <p>{actor.birthday}</p>
      <img
        src={`https://image.tmdb.org/t/p/w500/${actor.profile_path}`}
        alt={actor.name}
      />
    </div>
  );
};
