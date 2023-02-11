import { BrowserRouter, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { NavBar } from "./components/NavBar";
import { Home } from "./views/Home";
import { Actors } from "./views/Actors";
import { ActorCart } from "./components/ActorCard";
import { Serials } from "./views/Serials";
import { SerialCard } from "./components/SerialCard";
import { Movies } from "./views/Movies";
import { MovieCard } from "./components/MovieCard";


export const App = () => {
  return (
    // <Layout>
    <BrowserRouter>
      <NavBar />
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="movies" element={<Movies />} />
          <Route path="movie/:id" element={<MovieCard />} />
          <Route path="actor/:id" element={<ActorCart />} />
          <Route path="serial/:id" element={<SerialCard />} />
          <Route path="actors" element={<Actors />} />
          <Route path="serials" element={<Serials />} />
        </Routes>
      </div>
      {/* <Footer/> */}
    </BrowserRouter>

    //  </Layout>
  );
};

export default App;
