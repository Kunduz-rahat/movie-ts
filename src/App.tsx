import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Layout } from './components/Layout';
import { MovieCard } from './components/MovieCard';
import { MovieList } from './components/MovieList';

export const App = () => {
  return (
  <Layout>
    <Routes>
      <Route element={<MovieList/>}/>
      <Route path='/' element={<MovieCard/>}/>
    </Routes>
  </Layout>
  )
}

export default App;
