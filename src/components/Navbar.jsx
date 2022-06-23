import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const Navbar = () => {
  const [Nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!Nav);
  };

  return (
    <div className="w-full h-[80px] bg-white ">
      <div className="mx-3 px-4 flex justify-between items-center h-full">
        <div className="flex flex-row items-center">
          <div>
            <img className=" w-52" src="/turners_logo.png" alt="#"></img>
          </div>
          {/* <h1 className="text-gray-600">My company</h1> */}
        </div>
        <div className="hidden md:flex">
          <ul className="flex text-black items-center">
            <li className="">
              <a
                href="#Menu1"
                className="w-full block px-3 py-0.5 rounded-md text-xl font-medium text-gray-600 hover:text-gray-900 bg-white hover:bg-gray-200"
              >
                Menu1
              </a>
            </li>
            <li className="">
              <a
                href="#Menu2"
                className="w-full block px-3 py-0.5 rounded-md text-xl font-medium text-gray-600 hover:text-gray-900 bg-white hover:bg-gray-200"
              >
                Menu2
              </a>
            </li>
            <li className="">
              <a
                href="#Menu3"
                className="w-full block px-3 py-0.5 rounded-md text-xl font-medium text-gray-600 hover:text-gray-900 bg-white hover:bg-gray-200"
              >
                Menu3
              </a>
            </li>
            <button className="px-8 py-0.5 m-5 border-2 text-lg font-semibold text-orange-400 border-orange-400 bg-gray-50 hover:bg-orange-500 hover:text-white">
              Login
            </button>
          </ul>
        </div>
        {/* -----------------Hamburger menu----------------- */}
        <div onClick={handleNav} className="block md:hidden">
          {Nav ? (
            <AiOutlineClose size={30} className="text-black" />
          ) : (
            <AiOutlineMenu size={30} className="text-black" />
          )}
        </div>

        {/* -----------------Mobile Menu ----------------- */}
        <div
          className={
            Nav
              ? "w-full bg-white text-black absolute z-10 top-[80px] left-0 flex justify-center text-center transform ease-in-out duration-300 md:hidden"
              : "absolute top-[-100%]"
          }
        >
          <ul className="w-full block ">
            <li className="">
              <a
                href="#Menu1"
                className="w-full block px-3 py-2 rounded-md text-2xl font-medium text-gray-700 hover:text-gray-900 bg-white hover:bg-gray-200"
              >
                Menu1
              </a>
            </li>
            <li className="">
              <a
                href="#Menu2"
                className="w-full block px-3 py-2 rounded-md text-2xl font-medium text-gray-700 hover:text-gray-900 bg-white hover:bg-gray-200"
              >
                Menu2
              </a>
            </li>
            <li className="">
              <a
                href="#Menu3"
                className="w-full block px-3 py-2 rounded-md text-2xl font-medium text-gray-700 hover:text-gray-900 bg-white hover:bg-gray-200"
              >
                Menu3
              </a>
            </li>
            <button className="px-8 py-0.5 m-5 border-2 text-lg font-semibold text-orange-400 border-orange-400 bg-gray-50 hover:bg-orange-500 hover:text-white">
              Login
            </button>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
