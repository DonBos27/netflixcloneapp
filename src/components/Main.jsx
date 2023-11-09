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

  // console.log(movie);
  const stringTruncate = (str, num) => {
    if (str?.length > num) {
      return str.slice(0, num) + "...";
    } else {
      return str;
    }
  };

  return (
    <div className="w-full h-[550px]  text-white">
      <div className="w-full h-full">
        <img
          src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`}
          alt=""
          className="w-full h-full object-cover filter brightness-50 opacity-30"
        />
        <div className="absolute w-full top-[20%] p-4">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold py-2 sm:py-4 md:py-8 lg:pl-12">
            {movie?.title || movie?.name || movie?.original_name}
          </h1>
          <div className="my-4 lg:pl-12">
            <button className="border bg-gray-300 text-black border-gray-300 px-4 sm:px-5 py-1.5 sm:py-2 text-sm sm:text-base">
              Play
            </button>
            <button className="border text-white border-gray-300 px-4 sm:px-5 py-1.5 sm:py-2 ml-3 sm:ml-4 text-sm sm:text-base">
              Watch Later
            </button>
          </div>
          <p className="text-gray-400 text-xs sm:text-sm py-2 sm:py-4 lg:pl-12">
            Released Date : {movie?.release_date}
          </p>
          <p className="w-full md:max-w-[70%] lg:max-w-[50%] xl:max-w-[35%] text-gray-200 text-xs sm:text-sm lg:pl-12">
            {stringTruncate(movie?.overview, 200)}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Main;
