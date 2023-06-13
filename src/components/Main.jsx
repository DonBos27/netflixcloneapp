import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import requests from "../Requests";

function Main() {
  const [movies, setMovies] = useState([]);

  const movie = movies[Math.floor(Math.random() * movies.length)];

  useEffect(() => {
    axios.get(requests.requestPopular).then((response) => {
      setMovies(response.data.results);
    });
  }, []);

  console.log(movie);

  return (
    <div className="w-full h-[550px] text-white">
      <div className="w-full h-full">
        <img
          src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`}
          alt=""
          className="w-full h-full object-cover filter brightness-50 "
        />
      </div>
    </div>
  );
}

export default Main;
