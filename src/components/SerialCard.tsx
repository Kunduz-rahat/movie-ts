import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchItemSerial } from '../store/actions/serialItemReducer';
import { RootState } from '../types/rootTypes';

export const SerialCard:React.FC = () => {
	const { id }: any = useParams<{ id: string }>();
  const dispatch = useDispatch();

  const serialItem = useSelector((state: RootState) => state.serialItem);
  const { loading, serial } = serialItem;
  useEffect(() => {
    dispatch<any>(fetchItemSerial(+id));
  }, [dispatch, id]);

  return (
    <div>
      <h2>{serial.name}</h2>
      <p>{serial.overview}</p>
      
      <img
        src={`https://image.tmdb.org/t/p/w500/${serial.poster_path}`}
        alt={serial.name}
      />
    </div>
  );
}
