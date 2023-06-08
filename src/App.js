import React, { useState } from "react";
import "./App.css";
import Search from "./Search";
import MoviesList from "./MoviesList";
import { Routes, Route } from "react-router-dom";
import Trailer from "./Trailer";

function App() {
  const [movies, setMovies] = useState([
    {
      id: 1,
      main_img:
        "https://movieplayer.net-cdn.it/t/images/2017/12/20/bright_jpg_191x283_crop_q85.jpg",
      second_img:
        "https://occ-0-2433-448.1.nflxso.net/art/cd5c9/3e192edf2027c536e25bb5d3b6ac93ced77cd5c9.jpg",
      title: "Bright",
      duration: "117 min",
      date: "2017, David Ayer",
      rate: 4,
      genre: "Action, Crime, Fantasy",
      description:
        "Set in a world where fantasy creatures live side by side with humans. A human cop is forced to work with an Orc to find a weapon everyone is prepared to kill for.",
      trailer: "https://www.youtube.com/embed/6EZCBSsBxko",
      css: "blur_back bright_back",
    },
    {
      id: 2,
      main_img: "https://mr.comingsoon.it/imgdb/locandine/235x336/53750.jpg",
      second_img:
        "https://fsmedia.imgix.net/cd/c9/5e/ba/4817/4d9a/93f0/c776ec32ecbc/lara-crofts-neck-looks-unnatural-in-the-new-poster-for-tomb-raider.png",
      title: "Tomb Raider",
      duration: "125 min",
      date: "2018, Roar Uthaug",
      rate: 5,
      genre: "Action, Fantasy",
      description:
        "Lara Croft, the fiercely independent daughter of a missing adventurer, must push herself beyond her limits when she finds herself on the island where her father disappeared.",
      trailer: "https://www.youtube.com/embed/8ndhidEmUbI",
      css: "blur_back tomb_back",
    },
    {
      id: 3,
      main_img: "https://mr.comingsoon.it/imgdb/locandine/235x336/53715.jpg",
      second_img:
        "https://www.gannett-cdn.com/-mm-/c03fd140debe8ad4c05cf81a5cad7ad61a12ce52/c=0-1580-2985-3266&r=x803&c=1600x800/local/-/media/2017/06/09/USATODAY/USATODAY/636326272873599176-Black-Panther-Teaser.jpg",
      title: "Black Panther",
      duration: "134 min",
      date: "2018, Ryan Coogler",
      rate: 2,
      genre: "Action, Adventure, Sci-Fi",
      description:
        "T'Challa, the King of Wakanda, rises to the throne in the isolated, technologically advanced African nation, but his claim is challenged by a vengeful outsider who was a childhood victim of T'Challa's father's mistake.",
      trailer: "https://www.youtube.com/embed/xjDjIWPwcPU",
      css: "blur_back ave_back",
    },
  ]);
  const [keyword, setKeyword] = useState("");
  const [newRate, setNewRate] = useState(1);

  const search = (text) => {
    setKeyword(text);
  };
  const setRate = (rate) => {
    setNewRate(rate);
  };
  const addMovie = (Movie) => {
    setMovies([...movies, Movie]);
  };

  return (
    <div className="App">
      <Search search={search} setRate={setRate} />
      <Routes>
        <Route
          path="/"
          element={
            <MoviesList
              addMovie={addMovie}
              movies={movies.filter(
                (el) =>
                  el.rate >= newRate &&
                  el.title.toUpperCase().includes(keyword.toUpperCase().trim())
              )}
            />
          }
        />
        <Route path="/movie/:id" element={<Trailer movie ={movies} />} />
      </Routes>
    </div>
  );
}

export default App;
