
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import { MovieCard } from './components/MovieCard';
import { MovieList } from './components/MovieList';

import  {NavBar}  from './components/NavBar';
import { Home } from './views/Home';


export const App = () => {
  return (
  // <Layout>
  <BrowserRouter>
    <NavBar/>
    <div >
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='movies' element={<MovieList/>}/>
      <Route path='movie/:id' element={<MovieCard/>}/>
    </Routes>
    </div>
 
  </BrowserRouter>

  //  </Layout>
  )
}

export default App;
