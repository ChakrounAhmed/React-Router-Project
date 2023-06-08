import React, { useState } from "react";
import StarRatingComponent from "react-star-rating-component";
const Search = ({ search, setRate }) => {
  const [rating, setRating] = useState(1);
  const onStarClick = (nextValue, prevValue, name) => {
    setRating(nextValue);
    setRate(nextValue);
  };
  return (
    <div  style={{ display: "flex", alignItems: "center" }}>
      <input
        type="text"
        placeholder="search a movie"
        onChange={(e) => search(e.target.value)}
      />
      <StarRatingComponent
        name="rate1"
        starCount={5}
        value={rating}
        onStarClick={onStarClick}
      />
    </div>
  );
};

export default Search;
