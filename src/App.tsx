
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import { MovieCard } from './components/MovieCard';
import { MovieList } from './components/MovieList';

import  {NavBar}  from './components/NavBar';
import { Movie } from './views/Movie';


export const App = () => {
  return (
  // <Layout>
  <BrowserRouter>
    <NavBar/>
    <div >
    <Routes>
      <Route path='/' element={<Movie/>}/>
      <Route path='movielist' element={<MovieList/>}/>
      <Route path='movieitem' element={<MovieCard/>}/>
    </Routes>
    </div>
 
  </BrowserRouter>

  //  </Layout>
  )
}

export default App;
