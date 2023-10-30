import React from "react";
import Poster from "../images/netflixBgImg.jpg";

function Banner() {
  return (
    <div>
      <div className="w-full h-[750px] text-white pt-[120px]">
        <div className="w-full h-full rounded-lg">
          <img
            src={Poster}
            alt=""
            className="w-full h-[100%] lg:h-full object-cover lg:px-[75px] px-4 opacity-30 rounded-t-lg "
          />
          <div className="absolute w-full h-full top-[25%] md:p-8 ">
            <h1 className="lg:text-8xl font-bold lg:mb-8 lg:w-[75%] lg:px-[175px] lg:text-left mb-4 text-center text-4xl">
              Unlimited movies, TV shows, and more.
            </h1>
            <h2 className="lg:text-3xl font-bold lg:mb-8 lg:px-[175px] mb-4 lg:text-left text-center text-2xl px-5">
              Watch anywhere. Cancel anytime.
            </h2>
            <p className="lg:text-2xl font-bold mb-5  lg:px-[175px] px-5 lg:text-left text-center text-xl">
              Ready to watch? Enter your email to create or restart your
              membership.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 lg:px-[175px] px-5">
              <input
                type="email"
                placeholder="Email address"
                className="bg-transparent border-2 border-gray-600 text-white text-lg md:text-xl font-bold pl-5 py-3 w-full sm:w-auto sm:flex-1 mr-0 sm:mr-5 rounded"
              />
              <button className="bg-red-600 text-white text-lg md:text-xl font-bold px-6 py-2 w-full sm:w-auto rounded cursor-pointer">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;
