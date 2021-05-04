import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./Header.css";

export default function Header() {
  // const [title, setTitle] = React.useState();
  return (
    <div className="header">
      <div className="d-flex justify-content-between">
        <div className="text-white mx-4 mt-3">
          <Link to="/" className="text-decoration-none text-white">
            Hackflix
          </Link>
        </div>
        <div className="text-white d-flex justify-content-between mx-4 mt-3">
          <Link to="/" className="text-decoration-none text-white">
            Home
          </Link>

          <Link to="/search" className="text-decoration-none text-white">
            Search
          </Link>

          <Link to="/about" className="text-decoration-none text-white">
            About
          </Link>

          <Link to="/contact" className="text-decoration-none text-white">
            Contact
          </Link>
        </div>
      </div>
      <div className="text-white text-center mt-4">
        <h1>Tus peliculas favoritas!</h1>
        <p>
          El sitio donde podras encontrar todas tus peliculas favoritas en un
          solo lugar y a un solo click
        </p>
        {/* <input
          className="input-control my-3"
          type="text"
          // value={title}
          onChange={(event) => getTitle(event.target.value)}
          placeholder="Ingrese titulo de una pelicula..."
        /> */}
      </div>
    </div>
  );
}
