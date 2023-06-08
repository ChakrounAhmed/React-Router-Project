import React, { useState } from "react";
import MovieCard from "./MovieCard";
import "bootstrap/dist/css/bootstrap.min.css";
import Add from "./Add";

const MoviesList = ({ movies, addMovie }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div>
      {movies.map((el) => (
        <div>
          <MovieCard movie={el} />
        </div>
      ))}
      <div className="movie_card" id="bright">
        <button
          className="info_section "
          style={{ fontSize: "100px", color: "#555" }}
          onClick={handleShow}
        >
          +
        </button>
        <Add addMovie={addMovie} show={show} handleClose={handleClose} />
      </div>
    </div>
  );
};

export default MoviesList;
