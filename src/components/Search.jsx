import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import Movie from "./Movie";

import "./Search.css";

function Search() {
  const [movies, setMovies] = useState([]);
  const [title, setTitle] = useState("");

  // const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    const urlAllMovies = `https://api.themoviedb.org/3/discover/movie?api_key=d642bd58a979e66291e9b7f9e47e1923&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${1}`;
    const urlByTitle = `https://api.themoviedb.org/3/search/movie?api_key=d642bd58a979e66291e9b7f9e47e1923&language=en-US&query=${title}&page=1&include_adult=false`;

    const getMovies = async () => {
      try {
        let response;
        title
          ? (response = await axios.get(urlByTitle))
          : (response = await axios.get(urlAllMovies));

        response.data.results.length
          ? setMovies([...response.data.results])
          : setMovies([]);
        // : setErrorMessage("No hay peliculas con esas caracteristicas");
      } catch (error) {
        console.error(error);
      }
    };
    getMovies();
  }, [title]);
  return (
    <div className="container">
      <div id="searchBox" className="text-center">
        <input
          className="input-control my-3"
          type="text"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
          placeholder="Ingrese titulo de una pelicula..."
        />
      </div>
      <div className="row mb-5">
        {movies &&
          movies.map((movie) => <Movie key={movie.id} movie={movie} />)}
        {movies.length === 0 && (
          <div className="text-center my-5">
            Lo sentimos, no se encontro ninguna pelicula
          </div>
        )}
      </div>
    </div>
  );
}

export default Search;

