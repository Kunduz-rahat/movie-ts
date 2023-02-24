import React, { useEffect, useState } from "react";
import Moment from "react-moment";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { addSerials, fetchSerials } from "../store/actions/serialListAction";
import { RootState } from "../types/rootTypes";
import { Scrolling } from "../components/Scrolling";
import { Search } from "../components/Search";
import Spinner from "../components/Spinner";

export const Serials: React.FC = () => {
  const [page, setPage] = useState(2);
  const [dataLength, setDataLength] = useState(20);
  const [hasMore, setHasMore] = useState(true);

  const dispatch = useDispatch();

  // Get serails

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

  if (loading) return <Spinner />;

  return (
    <div className="max-w-screen-xl mx-auto ">
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
          <div className="grid grid-cols-1  lg:grid-cols-5 md:grid-cols-4 sm:grid-cols-3 gap-4 p-5">
            {serials.map(
              (serial, idx) =>
                serial.poster_path && (
                  <div key={idx}>
                    <Link
                      to={`/serial/${serial.id}`}
                      className=""
                    >
                      <img
                        src={`https://image.tmdb.org/t/p/w500/${serial.poster_path}`}
                        alt={serial.name}
                        className="rounded-3xl hover:scale-110"
                      />
                   
                    </Link>
                    <p className="font-semibold text-xl mt-3">
                      {serial.name}
                    </p>
                    <div className="flex justify-between font-semibold text-slate-300 ">
                      <p>
                        {" "}
                        <Moment format=" YYYY">{serial.first_air_date}</Moment>
                      </p>
                      <p className="flex text-white font-bold">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="orange"
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="none"
                          className="w-6 h-6 text-slate-300"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
                          />
                        </svg>
                        {serial.vote_average}/ 10{" "}
                      </p>
                    </div>
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
