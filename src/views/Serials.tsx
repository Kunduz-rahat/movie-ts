import React, { useEffect, useState } from "react";
import Moment from "react-moment";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Scrolling } from "../components/Scrolling";
import { Search } from "../components/Search";
import Spinner from "../components/Spinner";
import { addSerials, fetchSerials } from "../store/actions/serialListAction";
import { RootState } from "../types/rootTypes";

export const Serials: React.FC = () => {
  const [page, setPage] = useState(2);
  const [dataLength, setDataLength] = useState(20);
  const [hasMore, setHasMore] = useState(true);

  const dispatch = useDispatch();

  const serialList = useSelector((state: RootState) => state.serialList);
  const { loading, serials, query, nextLoading, results, pages } = serialList;
  useEffect(() => {
    dispatch<any>(fetchSerials());
  }, [dispatch]);

  const fetchNextPage = () => {
    if (!query) {
      dispatch<any>(addSerials(page));
      setPage(page + 1);
      setDataLength(dataLength + 20);
      if (page === pages) {
        setHasMore(false);
      }
    }
  };
if(loading) return <Spinner/>
  return (
    <div className="max-w-screen-xl mx-auto">
      <div className="flex justify-end pr-10 ">
        <Search serials />
      </div>

      {loading ? (
        <Spinner />
      ) : results !== 0 ? (
        <Scrolling
          dataLength={dataLength}
          next={fetchNextPage}
          hasMore={!nextLoading && hasMore}
        >
          <div className="grid grid-cols-1  lg:grid-cols-5 md:grid-cols-4 sm:grid-cols-2 gap-4 p-5">
            {serials.map(
              (serial, idx) =>
                serial.poster_path && (
                  <div key={idx}>
                    <Link
                      to={`/serial/${serial.id}`}
                      className="hover:text-my-red"
                    >
                      <img
                        src={`https://image.tmdb.org/t/p/w500/${serial.poster_path}`}
                        alt={serial.name}
                        className="rounded-3xl"
                      />
                      <h3>{serial.name}</h3>
                    </Link>
                  </div>
                )
            )}
          </div>
        </Scrolling>
      ) : (
        <h2 className="py-2 text-center">Sorry, serials not found</h2>
      )}
    </div>
  );
};
