import React from "react";
import Enjoy from "../images/en.png";
import Everywhere from "../images/everywhere.png";
import Kids from "../images/kids.png";
import Offline from "../images/offline.png";

function Body() {
  return (
    <div>
      <div className="w-full h-full text-white my-7">
        <div className="absolute w-[100%] h-[550px]  bg-gradient-to-b from-[#07021a] "></div>
        <div className="w-[92%] h-full bg-[#130837] rounded-3xl mx-auto">
          <div className="flex flex-row items-center justify-around pt-[100px]">
            <div className="flex-col">
              <h1 className="text-6xl font-bold mb-8 pl-[175px] ">
                Enjoy on your TV.
              </h1>
              <h2 className="text-2xl font-bold mb-8 w-[100%] px-[175px]">
                Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV,
                Blu-ray players, and more.
              </h2>
            </div>
            <div>
              <img
                src={Enjoy}
                alt=""
                className="w-[1000px] h-[100%] px-[18px]"
              />
            </div>
          </div>
          <div className="bg-white/25 w-[90%] h-2 mx-auto"></div>
          <div className="flex flex-row items-center justify-around pt-[0px]">
            <div>
              <img
                src={Everywhere}
                alt=""
                className="w-[1000px] h-[100%] pl-[175px]"
              />
            </div>
            <div className="flex-col">
              <h1 className="text-6xl font-bold mb-8 pl-[85px] ">
                Watch everywhere.
              </h1>
              <h2 className="text-2xl font-bold mb-8 w-[100%] px-[85px]">
                Stream unlimited movies and TV shows on your phone, tablet,
                laptop, and TV.
              </h2>
            </div>
          </div>
          <div className="bg-white/25 w-[90%] h-2 mx-auto"></div>
          <div className="flex flex-row items-center justify-around pt-[0px]">
            <div className="flex-col">
              <h1 className="text-6xl font-bold mb-8 px-[175px] ">
                Create profiles for kids
              </h1>
              <h2 className="text-2xl font-bold mb-8 w-[100%] px-[175px]">
                Send kids on adventures with their favorite characters in a
                space made just for them—free with your membership.
              </h2>
            </div>
            <div>
              <img
                src={Kids}
                alt=""
                className="w-[1000px] h-[100%] px-[18px]"
              />
            </div>
          </div>
          <div className="bg-white/25 w-[90%] h-2 mx-auto"></div>
          <div className="flex flex-row items-center justify-around pt-[0px]">
            <div>
              <img
                src={Offline}
                alt=""
                className="w-[1000px] h-[100%] pl-[175px]  mb-8"
              />
            </div>
            <div className="flex-col">
              <h1 className="text-6xl font-bold mb-10 pl-[85px] ">
                Download your shows to watch offline
              </h1>
              <h2 className="text-2xl font-bold mb-8 w-[100%] px-[85px]">
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