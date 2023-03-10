import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Suspense } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Home } from "./views/Home";
import { Actors } from "./views/Actors";
import { Serials } from "./views/Serials";
import { Movies } from "./views/Movies";
import { ActorCart } from "./components/ActorCard";
import { SerialCard } from "./components/SerialCard";
import { MovieCard } from "./components/MovieCard";
import { Layout } from "./components/Layout";
import Spinner from "./components/Spinner";

export const App = () => {
  return (
    <BrowserRouter>
    
      <Layout>
        <Suspense fallback={<Spinner />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="movies" element={<Movies />} />
            <Route path="movie/:id" element={<MovieCard />} />
            <Route path="actor/:id" element={<ActorCart />} />
            <Route path="serial/:id" element={<SerialCard />} />
            <Route path="actors" element={<Actors />} />
            <Route path="serials" element={<Serials />} />
          </Routes>
        </Suspense>
      </Layout>

    
    </BrowserRouter>
  );
};

export default App;
