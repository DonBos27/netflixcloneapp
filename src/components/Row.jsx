import axios from "axios";
import React, { useEffect, useState } from "react";
import Movies from "./Movies";

export const Row = ({ title, fetchURL }) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios.get(fetchURL).then((res) => {
      setMovies(res.data.results);
    });
  }, [fetchURL]);

  return (
    <div className="bg-black">
      <h2 className="text-white font-bold md:text-xl p-4">{title}</h2>
      <div className="relative flex items-center">
        <div
          id={"slider"}
          className="w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide relative"
        >
          {movies.length > 0 ? (
            <div className="flex">
              {movies.map((item, id) => (
                <Movies key={id} item={item} />
              ))}
            </div>
          ) : (
            <p className="text-white p-4">Loading...</p>
          )}
        </div>
      </div>
    </div>
  );
};
