import { useState, useEffect } from "react";
// import logo from "./logo.svg";
import "./App.css";

import MovieDisplay from "./components/MovieDisplay.tsx";
import Form from "./components/Form";

export default function App() {
  // Constant with your API Key
  const apiKey = import.meta.env.VITE_OMDB_API_KEY;

  // State to hold movie data
  const [movie, setMovie] = useState(null);

  // Function to get movies
  const getMovie = async (searchTerm) => {
    // Make fetch request and store the response
    const response = await fetch(
      `http://www.omdbapi.com/?apikey=${apiKey}&t=${searchTerm}`
    );
    // Parse JSON response into a JavaScript object
    const data = await response.json();
    // Set the Movie state to the received data
    setMovie(data);
  };

  // useEffect(() => {
  //   getMovie("Clueless");
  // }, []);

  // We pass the getMovie function as a prop called moviesearch
  return (
    <div className="App">
      <Form moviesearch={getMovie} />
      <MovieDisplay movie={movie} />
    </div>
  );
}
