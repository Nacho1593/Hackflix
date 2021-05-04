import React from "react";
// import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./Header.css";

export default function Header() {
  return (
    <div className="header">
      <div className="d-flex justify-content-between">
        <div className="text-white mx-4 mt-3">
          <h6>
            <a href="/" className="text-decoration-none text-white">
              Hackflix
            </a>
          </h6>
        </div>
        <div className="text-white d-flex justify-content-between mx-4 mt-3">
          <h6 className="me-3">
            <a href="/" className="text-decoration-none text-white">
              Home
            </a>
          </h6>
          <h6 className="ms-3">
            <a href="/search" className="text-decoration-none text-white">
              Search
            </a>
          </h6>
          <h6 className="ms-3">
            <a href="/about" className="text-decoration-none text-white">
              About
            </a>
          </h6>
          <h6 className="ms-3">
            <a href="/contact" className="text-decoration-none text-white">
              Contact
            </a>
          </h6>
        </div>
      </div>
      <div className="text-white text-center mt-4">
        <h1>Tus peliculas favoritas!</h1>
        <p>
          El sitio donde podras encontrar todas tus peliculas favoritas en un
          solo lugar y a un solo click
        </p>
      </div>
    </div>
  );
}
