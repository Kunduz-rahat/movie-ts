import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { searchActors } from "../store/actions/actorListAction";
import { searchMovies } from "../store/actions/movieListAction";
import { searchSerials } from "../store/actions/serialListAction";

type Props = {
  movies?: boolean;
  serials?: boolean;
  actors?: boolean;
};

export const Search: React.FC<Props> = (props) => {
  const [query, setQuery] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (query !== "") {
      if (props.movies) {
        dispatch<any>(searchMovies(query));
      } else if (props.serials) {
        dispatch<any>(searchSerials(query));
      } else {
        dispatch<any>(searchActors(query));
      }
      setQuery("");
    }
  };
  console.log(query);
	console.log('render')

  return (
    <form
      className="flex bg-white rounded-3xl  w-1/4"
      onSubmit={handleSubmit}
    >
      <input
        type="text"
        placeholder={
          props.movies
            ? "Search movies..."
            : props.serials
            ? "Search serials..."
            : "Search actors..."
        }
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        id="default-search"
        className="outline-none  rounded-3xl p-2 text-black"
        
      />
    </form>
  );
};
