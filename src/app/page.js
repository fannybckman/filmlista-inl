"use client";
import Image from "next/image";
import { useState } from "react";
import AddMovie from "./components/AddMovie";
import Movies from "./components/Movies";

const Home = () => {
  const [movies, setMovies] = useState([
    {
      Title: "Mamma Mia",
      Rating: "5"
    },
    {
      Title: "Hannah Montana the Movie",
      Rating: "5"
    },
  ]);

  const addMovie = (newMovie) => {
    setMovies([...movies, newMovie]);
  };

  const deleteMovie = (index) => {
    // Tar bort en film från listan
    const updatedMovies = [...movies];
    updatedMovies.splice(index, 1);
    setMovies(updatedMovies);
  };

  const orderByAlpha = () => {
    const sortedMovies = [...movies].sort((a, b) => a.Title.localeCompare(b.Title));
    setMovies(sortedMovies);
  };

  const orderByGrade = () => {
    const sortedMovies = [...movies].sort((a, b) => b.Rating - a.Rating);
    setMovies(sortedMovies);
  };

  console.log(movies)

  return (
    <>
      <main>
        <AddMovie
          addMovie={addMovie}
        />
        <hr />
        <button onClick={orderByAlpha}>Sortera alfabetiskt</button>
        <button onClick={orderByGrade}>Sortera efter betyg</button>
        <Movies movies={movies} deleteMovie={deleteMovie} />
      </main>
    </>
  );
};

export default Home;