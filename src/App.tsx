
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import { MovieCard } from './components/MovieCard';
import { MovieList } from './components/MovieList';

import  {NavBar}  from './components/NavBar';
import { Home } from './views/Home';
import { Actors } from './views/Actors';
import { ActorCart } from './components/ActorCard';


export const App = () => {
  return (
  // <Layout>
  <BrowserRouter>
    <NavBar/>
    <div >
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='movies' element={<MovieList/>}/>
    
      <Route path='actor/:id' element={<ActorCart/>}/>
      <Route path='actors' element={<Actors/>}/>
    </Routes>
    </div>
 
  </BrowserRouter>

  //  </Layout>
  )
}

export default App;
