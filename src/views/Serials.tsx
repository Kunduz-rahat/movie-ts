import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { fetchSerials } from "../store/actions/serialListAction";
import { RootState } from "../types/rootTypes";

export const Serials: React.FC = () => {
  const dispatch = useDispatch();

  const serialList = useSelector((state: RootState) => state.serialList);
  const { loading, serials } = serialList;
  useEffect(() => {
    dispatch<any>(fetchSerials());
  }, [dispatch]);
  return (
    <div className="grid grid-cols-5 gap-4 p-5">
      {serials.map(
        (serial) =>
          serial.poster_path && (
            <div key={serial.id} >
              <Link to={`/serial/${serial.id}`} className="hover:text-red-500">
                <img
                  src={`https://image.tmdb.org/t/p/w500/${serial.poster_path}`}
                  alt={serial.name} className='rounded-3xl'
                />
                <h3>{serial.name}</h3>
              </Link>
            </div>
          )
      )}
    </div>
  );
};
