import React ,{ useEffect } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import { useActions } from '../hooks/useActions';
import { useTypedSelector } from '../hooks/useTypedSelector';



export const Home:React.FC = () => {
	const { loading, movies, error, results } = useTypedSelector(
    (state) => state.movieList
  );
  const { fetchMovies } = useActions();
  console.log(movies);
	console.log(error)
  useEffect(() => {
    fetchMovies();
  }, [fetchMovies]);

  if (loading) {
    return <h1>идет загрузка</h1>;
  }
  if (error) {
    return <h1>{error}</h1>;
  }
	return (
		<Carousel>
			{movies.map((movie)=>
				<Carousel.Item>
				<img
					className="d-block w-100"
					src="https://api.time.com/wp-content/uploads/2019/08/better-smartphone-photos.jpg"
					alt="First slide"
				/>
				<Carousel.Caption>
					<h3>{movie.original_title}</h3>
					<p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
				</Carousel.Caption>
			</Carousel.Item>
)}
	
	
	</Carousel>
);
	
}
