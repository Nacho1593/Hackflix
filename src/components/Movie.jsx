import React from "react";
import MovieModal from "./MovieModal";
import { useState } from "react";

function Movie({ movie }) {
  const [show, setShow] = useState(false);

  return (
    <div key={movie.id} className="col-md-3 movie my-3 text-center">
      {movie.poster_path ? (
        <img
          className="img-movie"
          data-id={movie.id}
          src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
          alt={movie.title}
          onClick={() => setShow(true)}
        />
      ) : (
        <div>
          <h6>{movie.title}</h6>
          <img
            data-id={movie.id}
            src={"/img/Image-Not-Available.png"}
            alt={movie.title}
            onClick={() => setShow(true)}
          />
        </div>
      )}

      <MovieModal movie={movie} show={show} setShow={setShow} />
    </div>
  );
}

export default Movie;