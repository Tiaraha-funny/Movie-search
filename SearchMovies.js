import React, { useState } from "react";
import MoviesCard from "./moviesCard";

export default function SearchMovies() {
  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState([]);
  const searchMovies = async (e) => {
    e.preventDefault();
    const url = `https://api.themoviedb.org/3/search/movie?api_key=00cc8076e871d622a8ff2452eaa31fdb&query=${query}&page=1&include_adult=false`;
    try {
      const res = await fetch(url);
      const data = await res.json();
      setMovies(data.results);
      console.log(data.results);
    } catch {
      console.error(err);
    }
  };
  return (
    <>
      <form className="form" onSubmit={searchMovies}>
        <label htmlFor="query" className="label">
          Movie name
        </label>
        <input
          className="input"
          type="text"
          name="query"
          placeholder="Jurassic Park"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button className="button" type="submit">
          Search
        </button>
      </form>
      <div className="card-list">
        {movies
          .filter((movie) => movie.poster_path)
          .map((movie) => {
            return (
              <MoviesCard
                key={movie.id}
                movie={movie}
              />
            );
          })}
      </div>
    </>
  );
}
