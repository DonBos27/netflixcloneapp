import React from "react";
import NetflixLogo from "../images/netflixLogo.png";
import { useNavigate } from "react-router-dom";

function Navabar() {
  const navigate = useNavigate();
  const signIn = () => {
    navigate("/home");
  };
  return (
    <div className="flex items-center justify-between lg:p-4 z-[100] w-full absolute">
      {/* Adjusting the logo's size based on screen size */}
      <img
        src={NetflixLogo}
        alt="Netflix Logo"
        className="w-60 md:w-64 lg:w-[250px] lg:pl-7 h-full"
      />

      <div>
        {/* Adjusting the button's size based on screen size */}
        <button
          className="text-sm md:text-base lg:text-xl bg-red-600 text-white font-bold px-4 md:px-5 lg:px-7 py-1 md:py-2 rounded cursor-pointer mr-3 md:mr-5 lg:mr-[65px]"
          onClick={signIn}
        >
          Sign In
        </button>
      </div>
    </div>
  );
}

export default Navabar;
