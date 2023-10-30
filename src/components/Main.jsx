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
          className="w-full h-full object-cover filter brightness-50 opacity-30"
        />
        <div className="absolute w-full top-[20%] left-[70px] ">
          <h1 className=" text-3xl md:text-5xl font-bold py-4 md:py-8">
            {movie?.title || movie?.name || movie?.original_name}
          </h1>
          <div>
            <button className="border bg-gray-300 text-black border-gray-300 px-5 py-2">
              Play
            </button>
            <button className="border text-white border-gray-300 px-5 py-2 ml-4">
              Watch Later
            </button>
          </div>
          <p className="text-gray-400 text-sm py-4">Released Date : {movie?.release_date}</p>
          <p className="w-full md:max-w-[70%] lg:max-w-[50%] xl:max-w-[35%] text-gray-200">{movie?.overview}</p>
        </div>
      </div>
    </div>
  );
}

export default Main;
