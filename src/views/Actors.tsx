import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Search } from "../components/Search";
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
      <div className="flex justify-end pr-10">
      <Search/>
      </div>

      <div className="grid grid-cols-5 gap-4 p-5 ">
        {actors.map(
          (actor) =>
            actor.profile_path && (
              <div key={actor.id} className="rounded-lg">
                <Link to={`/actor/${actor.id}`} className="hover:text-red-500">
                  <img
                    src={`https://image.tmdb.org/t/p/w500/${actor.profile_path}`}
                    alt={actor.name}
                    className="rounded-3xl"
                  />
                  <h3>{actor.name}</h3>
                </Link>
              </div>
            )
        )}
      </div>
    </div>
  );
};
