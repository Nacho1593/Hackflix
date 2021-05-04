import { useState, useEffect } from "react";
import Movie from "./Movie";
import StarRatings from "react-star-ratings";

import "./Container.css";
import axios from "axios";

export default function Container() {
  const [moviesDB, setMoviesDB] = useState([]);
  const [moviesFilter, setMoviesFilter] = useState([...moviesDB]);
  const [page, setPage] = useState(1);
  const [rating, setRating] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    const URL = `https://api.themoviedb.org/3/discover/movie?api_key=d642bd58a979e66291e9b7f9e47e1923&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${page}`;
    const getMovies = async () => {
      try {
        const response = await axios.get(URL);
        setMoviesDB((movies) => [...movies, ...response.data.results]);
        setIsLoading(false);
      } catch (error) {
        console.error(error);
      }
    };
    getMovies();
  }, [page]);

  const changeRating = (newRating, name) => {
    setRating(newRating);
  };
  useEffect(() => {
    setMoviesFilter([
      ...moviesDB.filter((movie) => {
        return movie.vote_average >= rating * 2 - 2;
      }),
    ]);
  }, [rating, moviesDB]);

  const handleScroll = () => {
    if (
      window.innerHeight + Math.ceil(window.pageYOffset) >=
      document.body.offsetHeight
    ) {
      if (!isLoading) setPage((page) => page + 1);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const items = new Array(20).fill(0);

  return (
    <div className="container">
      <div className="text-center my-3">
        Filtrar por rating:
        <StarRatings
          rating={rating}
          starRatedColor="orange"
          starHoverColor="orange"
          changeRating={changeRating}
          numberOfStars={5}
          name="rating"
          starDimension="2rem"
          starSpacing="0.1rem"
        />
      </div>
      <div className="row mb-5">
        {moviesFilter &&
          moviesFilter.map((movie) => <Movie key={movie.id} movie={movie} />)}
        {moviesFilter.length === 0 && (
          <div className="text-center">
            Lo sentimos, no se encontro ninguna pelicula
          </div>
        )}
      </div>
      <div className="row mb-5">
        {isLoading &&
          items.map((item, index) => (
            <div key={index} className="col-md-3 movie my-3 text-center">
              <img src={"/img/Image-Not-Available.png"} alt="" />
            </div>
          ))}
      </div>
    </div>
  );
}
