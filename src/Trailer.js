import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";

const Trailer = ({ movie }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const foundMovie = movie.find((movie) => movie.id === +id);
  const style = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  };
  return (
    <div>
      <div class="movie_card ">
        <div style={style}>
          <h1>{foundMovie.title}</h1>
          <br />
          <iframe
            width="560"
            height="315"
            src={foundMovie.trailer}
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </div>
      </div>
      <div style={style}>
        <h3 style={{ textAlign: "center" }}>{foundMovie.description}</h3>
        <br />
        <Button variant="primary" onClick={() => navigate("/")}>
          Home
        </Button>
      </div>
    </div>
  );
};

export default Trailer;
