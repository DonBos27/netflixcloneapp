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
            className="w-full h-full object-cover px-[75px] opacity-30 rounded-t-lg "
          />
          <div className="absolute w-full h-full top-[25%] md:p-8 ">
            <h1 className="text-8xl font-bold mb-8 w-[75%] px-[175px]">
              Unlimited movies, TV shows, and more.
            </h1>
            <h2 className="text-3xl font-bold mb-8  px-[175px]">
              Watch anywhere. Cancel anytime.
            </h2>
            <p className="text-2xl font-bold mb-5  px-[175px]">
              Ready to watch? Enter your email to create or restart your
              membership.
            </p>
            <div className="flex  px-[175px]">
              <input
                type="email"
                placeholder="Email address"
                className="bg-transparent border-2 border-gray-600 text-white text-xl font-bold pl-5 pr-[300px] py-5 mr-5 rounded"
              />
              <button className="bg-red-600 text-white text-xl font-bold px-10 py-2 rounded cursor-pointer">
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
