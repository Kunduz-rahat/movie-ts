
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Layout } from './components/Layout';
import { MovieCard } from './components/MovieCard';
import { MovieList } from './components/MovieList';
import { Home } from './views/Home';
import { NavBar } from './components/NavBar';
import { Movie } from './views/Movie';


export const App = () => {
  return (
  // <Layout>
  <BrowserRouter>
    <NavBar/>
    <Routes>
      <Route path='/' element={<Movie/>}/>
      <Route path='movielist' element={<MovieList/>}/>
      <Route path='movieitem' element={<MovieCard/>}/>
    </Routes>
  </BrowserRouter>

  //  </Layout>
  )
}

export default App;
