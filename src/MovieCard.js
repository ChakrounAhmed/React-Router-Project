import React from "react";
import StarRatingComponent from "react-star-rating-component";
import { Link } from "react-router-dom";

const MovieCard = ({ movie }) => {
  return (
    <div>
      <div class="movie_card" id="bright">
        <div class="info_section">
          <div class="movie_header">
            <img class="locandina" src={movie.main_img} alt="movie img" />
            <h1>{movie.title}</h1>
            <h4>{movie.date}</h4>
            <div>
              <StarRatingComponent
                name="rate1"
                starCount={5}
                value={movie.rate}
              />
            </div>
            <span class="minutes">{movie.duration}</span>

            <p class="type">{movie.genre}</p>
          </div>
          <div class="movie_desc">
            <p class="text">{movie.description}</p>
            <Link style={{fontWeight:"bold"}} to={`/movie/${movie.id}`}>DETAILS</Link>
          </div>
        </div>
        <div class={movie.css}></div>
      </div>
    </div>
  );
};

export default MovieCard;
