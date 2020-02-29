import React, { useState } from "react";
import "./App.css";
import ListMovies from "./components/listMovies";
import SearchMovie from "./components/SearchMovie";
function App() {
  const [listMovies, setListMovies] = useState([
    {
      title: "Avengers",
      year: 2018,
      description:
        "After the devastating events of Avengers: Infinity War (2018), the universe is in ruins. With the help of remaining allies, the Avengers assemble once more in order to undo Thanos' actions and restore order to the universe.",
      image: "https://www.movie-list.com/img/posters/big/avengersendgame.jpg",
      rating: 4
    },
    {
      title: "Aladdin",
      year: 2019,
      description:
        "When a street urchin finds a lamp with a genie inside, he uses the lamp to turn himself into a prince in order to win the heart of a beautiful princess. But an evil vizier is after the lamp too.",
      image: "https://www.movie-list.com/img/posters/big/aladdin.jpg",
      rating: 4
    },
    {
      title: "Happy Death Day 2U",
      year: 2019,
      description:
        "essica Rothe leads the returning cast of Happy Death Day 2U, the follow-up to Blumhouse's surprise 2017 smash hit of riveting, repeating twists and comic turns. This time around, our hero Tree Gelbman discovers that dying over and over was surprisingly easier than the dangers that lie ahead",
      image: "https://www.movie-list.com/img/posters/big/happydeathday2u.jpg",
      rating: 3
    },
    {
      title: "Happy Death Day 2U",
      year: 2019,
      description:
        "essica Rothe leads the returning cast of Happy Death Day 2U, the follow-up to Blumhouse's surprise 2017 smash hit of riveting, repeating twists and comic turns. This time around, our hero Tree Gelbman discovers that dying over and over was surprisingly easier than the dangers that lie ahead",
      image: "https://www.movie-list.com/img/posters/big/happydeathday2u.jpg",
      rating: 5
    },
    {
      title: "Happy Death Day 2U",
      year: 2019,
      description:
        "essica Rothe leads the returning cast of Happy Death Day 2U, the follow-up to Blumhouse's surprise 2017 smash hit of riveting, repeating twists and comic turns. This time around, our hero Tree Gelbman discovers that dying over and over was surprisingly easier than the dangers that lie ahead",
      image: "https://www.movie-list.com/img/posters/big/happydeathday2u.jpg",
      rating: 2
    }
  ]);

  const [title, setTitle] = useState("");
  const [year, setYear] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  const [rating, setRating] = useState("");
  const [searchtitle, setSearchTitle] = useState("");
  const [searchrating, setSearchRating] = useState("");

  const searchMovieByTitle = item => {
    setSearchTitle(item);
  };
  const searchMovieByRating = item => {
    setSearchRating(item);
  };

  const onAddMovie = () => {
    setListMovies([...listMovies, { title, year, description, image, rating }]);
    setTitle("");
    setYear("");
    setDescription("");
    setImage("");
    setRating("");
  };
  const onEditMovie = () => {
    setListMovies([...listMovies, { title, year, description, image, rating }]);
    setTitle("");
    setYear("");
    setDescription("");
    setImage("");
    setRating("");
  };
  const onDeleteMovie = i => {
    setListMovies(listMovies.filter((item, j) => i !== j));
  };

  return (
    <div className="App">
      <SearchMovie
        searchMovieByTitle={searchMovieByTitle}
        searchMovieByRating={searchMovieByRating}
      />
      <ListMovies
        listMovies={listMovies}
        onAddMovie={onAddMovie}
        onEditMovie={onEditMovie}
        onDeleteMovie={onDeleteMovie}
        setTitle={setTitle}
        setYear={setYear}
        setDescription={setDescription}
        setImage={setImage}
        setRating={setRating}
        searchtitle={searchtitle}
        searchrating={searchrating}
      />
    </div>
  );
}

export default App;
