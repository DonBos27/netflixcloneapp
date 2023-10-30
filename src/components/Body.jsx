import React from "react";
import Enjoy from "../images/en.png";
import Everywhere from "../images/everywhere.png";
import Kids from "../images/kids.png";
import Offline from "../images/offline.png";

function Body() {
  return (
    <div>
      <div className="w-full h-full text-white my-7">
        <div className="absolute w-full h-[550px]  bg-gradient-to-b from-[#07021a] hidden md:block"></div>
        <div className="w-[92%] h-full bg-[#130837] rounded-b-3xl mx-auto">
          <div className="flex flex-row items-center justify-around lg:pt-[100px] pt-20">
            <div className="flex-col">
              <h1 className="text-5xl sm:text-6xl font-bold mb-8 lg:pl-[175px] text-center lg:text-left ">
                Enjoy on your TV
              </h1>
              <h2 className="text-xl sm:text-2xl font-bold mb-8 lg:w-[100%] lg:px-[175px] px-2 text-center lg:text-left">
                Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV,
                Blu-ray players, and more.
              </h2>
            </div>
            <div className="hidden md:block">
              <img
                src={Enjoy}
                alt=""
                className="w-[1000px] h-[100%] px-[18px]"
              />
            </div>
          </div>
          <div className="bg-white/25 w-[90%] h-2 mx-auto lg:mb-0 mb-20"></div>
          <div className="flex flex-row items-center justify-around pt-[0px]">
            <div className="hidden md:block">
              <img
                src={Everywhere}
                alt=""
                className="w-[1000px] h-[100%] pl-[175px]"
              />
            </div>
            <div className="flex-col">
              <h1 className="text-5xl sm:text-6xl font-bold mb-8 lg:pl-[85px] text-center lg:text-left">
                Watch everywhere
              </h1>
              <h2 className="text-xl sm:text-2xl font-bold mb-8 lg:w-[100%] lg:px-[85px] px-2 text-center lg:text-left">
                Stream unlimited movies and TV shows on your phone, tablet,
                laptop, and TV.
              </h2>
            </div>
          </div>
          <div className="bg-white/25 w-[90%] h-2 mx-auto lg:mb-0 mb-20"></div>
          <div className="flex flex-row items-center justify-around pt-[0px]">
            <div className="flex-col">
              <h1 className="text-5xl sm:text-6xl font-bold mb-8 lg:px-[175px] text-center lg:text-left ">
                Create profiles for kids
              </h1>
              <h2 className="text-xl sm:text-2xl font-bold mb-8 lg:w-[100%] lg:px-[175px] px-2 text-center lg:text-left">
                Send kids on adventures with their favorite characters in a
                space made just for them—free with your membership.
              </h2>
            </div>
            <div className="hidden md:block">
              <img
                src={Kids}
                alt=""
                className="w-[1000px] h-[100%] px-[18px]"
              />
            </div>
          </div>
          <div className="bg-white/25 w-[90%] h-2 mx-auto lg:mb-0 mb-20"></div>
          <div className="flex flex-row items-center justify-around pt-[0px]">
            <div className="hidden md:block">
              <img
                src={Offline}
                alt=""
                className="w-[1000px] h-[100%] pl-[175px]"
              />
            </div>
            <div className="flex-col">
              <h1 className="text-5xl sm:text-6xl font-bold mb-10 lg:pl-[85px] text-center lg:text-left">
                Download your shows to watch offline
              </h1>
              <h2 className="text-xl sm:text-2xl font-bold mb-8 lg:w-[100%] lg:px-[85px] px-2 text-center lg:text-left">
                Save your favorites easily and always have something to watch.
              </h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Body;
