import React from "react";
// import { Menu } from "react-icons/io";
import { X } from "lucide-react";
import Login from "./Login";

import Logout from "./Logout";

import { useContext } from "react";
import AuthContext from "../context/AuthContext";

import { Menu } from "lucide-react";

import { useState } from "react";
const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const { user, setUser } = useContext(AuthContext);

  const onClickHandlerMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="bg-[#FBECD7] h-20 py-6 px-5 sm:py-2 fixed top-0 left-0 right-0 w-full z-50">
      <div className=" max-w-screen-xl mx-auto flex justify-between items-center align-center md:max-w-4xl">
        {/* Logo */}

        <div className="flex justify-between items-center gap-4">
          {menuOpen ? (
            <X onClick={onClickHandlerMenu} className="sm:hidden" size={30} />
          ) : (
            <Menu
              className="sm:hidden"
              size={30}
              onClick={onClickHandlerMenu}
            />
          )}

          <h1 className="text-2xl text-[#260200] font-bold flex  items-center">
            BookStore
          </h1>
        </div>

        {/* Navigation */}
        <ul
          className={`flex flex-col font-medium  bg-white  min-h-75 sm:min-h-0 sm:flex-row w-full absolute  sm:top-0  justify-between  sm:relative text-[#260200] sm:flex  sm:bg-transparent space-x-6 sm:space-x-6 sm:pl-0  p-5 sm:justify-center ${
            menuOpen ? "left-0 top-20" : "hidden ease-in-out"
          }`}
        >
          <li className="sm:text-xl  text-2xl  hover:text-[#2F4E50] text-[#260200] font-medium  cursor-pointer">
            <a href="/">Home</a>
          </li>
          <li className="sm:text-xl  text-2xl hover:text-[#2F4E50] text-[#260200] font-medium cursor-pointer">
            <a href="/courses">Courses</a>
          </li>
          <li className="sm:text-xl  text-2xl text-2xlhover:text-[#2F4E50] text-[#260200] font-medium cursor-pointer">
            <a href="/contact">Contact</a>
          </li>
          <li className="sm:text-xl  text-2xl hover:text-[#2F4E50] text-[#260200] font-medium cursor-pointer">
            <a href="/about">About</a>
          </li>
        </ul>

        {/* Sign In Button */}

        {user ? (
          <Logout />
        ) : (
          <div>
            <button
              className=" flex  border-2 rounded-2xl border-black text-[#260200] items-center text-xl font-medium px-4   hover:border-[#2F4E50] cursor-pointer w-fit whitespace-nowrap  hover:text-[#2F4E50]"
              onClick={() => document.getElementById("my_modal_2").showModal()}
            >
              Log In
            </button>

            <Login />
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
