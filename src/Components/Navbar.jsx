import React from "react";
import ThemeToggler from "./ThemeToggler";
import LightGlassyBtn from "./LightGlassyBtn";
import { Link } from "react-router-dom";

const Navbar = ({ isDarkTheme, setIsDarkTheme }) => {
  return (
    <div className="bg-[#b3b3b32c] backdrop-blur-md shadow-custom fixed z-50 top-0 left-0 w-full flex justify-between items-center gap-5 px-5 py-2">
      <div>
        <Link to={"/"}>
          <img
            src="/images/logo-removebg.webp"
            alt="logo"
            className="min-w-[130px] w-[130px]"
          />
        </Link>
      </div>
      <div className="flex items-center justify-center gap-3">
        <Link to={"/create"}>
          <LightGlassyBtn title={"BUILD MY RESUME"} />
        </Link>
        <ThemeToggler
          isDarkTheme={isDarkTheme}
          setIsDarkTheme={setIsDarkTheme}
        />
      </div>
    </div>
  );
};

export default Navbar;
