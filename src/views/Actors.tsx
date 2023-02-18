import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { addActors, fetchActors } from "../store/actions/actorListAction";
import { RootState } from "../types/rootTypes";
import { Scrolling } from "../components/Scrolling";
import { Search } from "../components/Search";
import Spinner from "../components/Spinner";

export const Actors: React.FC = () => {
  const [page, setPage] = useState(2);
	const [dataLength, setDataLength] = useState(20);
	const [hasMore, setHasMore] = useState(true);

  const dispatch = useDispatch();

  const actorList = useSelector((state: RootState) => state.actorList);
  const { loading, actors , results, nextLoading, query, pages} = actorList;
  useEffect(() => {
    dispatch<any>(fetchActors());
  }, [dispatch]);

  const fetchNextPage = () => {
    if (!query) {
      dispatch<any>(addActors(page));
      setPage(page + 1);
      setDataLength(dataLength + 20);
      if (page === pages) {
        setHasMore(false);
      }
    }
  };
  return (
    <div className="mx-auto max-w-screen-xl">
      <div className=" flex justify-end pr-10">
        <Search actors />
      </div>
      {loading ? (
				<Spinner />
			) : results !== 0 ? (
				<Scrolling
					dataLength={dataLength}
					next={fetchNextPage}
					hasMore={!nextLoading && hasMore}
				>
					 <div className="grid grid-cols-5 gap-4 p-5 ">
        {actors.map(
          (actor, idx) =>
            actor.profile_path && (
              <div key={idx} className="rounded-lg">
                <Link to={`/actor/${actor.id}`} className="hover:text-my-red">
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
				</Scrolling>
			) : (
				<h2 className="py-2 text-center">Sorry, actors not found</h2>
			)}
     
    </div>
  );
};
