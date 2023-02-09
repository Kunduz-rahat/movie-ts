import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { fetchActors } from "../store/actions/actorListReducer";
import { RootState } from "../types/rootTypes";

export const Actors: React.FC = () => {
  const dispatch = useDispatch();

  const actorList = useSelector((state: RootState) => state.actorList);
  const { loading, actors } = actorList;
  useEffect(() => {
    dispatch<any>(fetchActors());
  }, [dispatch]);
  console.log(actors);
  return (
    <div>
      {actors.map(
        (actor) =>
          actor.profile_path && (
            <div key={actor.id}>
              <Link to={`/actor/${actor.id}`}>
                <img
                  src={`https://image.tmdb.org/t/p/w500/${actor.profile_path}`}
                  alt={actor.name}
                />
                <h3>{actor.name}</h3>
                <p>{actor.birthday}</p>
              </Link>
            </div>
          )
      )}
    </div>
  );
};
