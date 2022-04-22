import React from "react";

const Hero = () => {
  return (
    <div className="">
      <div className="w-full h-[55vh] relative  bg-[url(https://images.pexels.com/photos/280221/pexels-photo-280221.jpeg?cs=srgb&dl=pexels-pixabay-280221.jpg&fm=jpg)] bg-cover bg-center">
        <div className="flex absolute m-16 sm:m-20">
          <p className=" w-[320px] sm:w-[500px] text-5xl sm:text-6xl whitespace-normal  ">
            Lorem ipsum dolor sit amet.
          </p>
        </div>
        <div className="bottom-[100px] sm:bottom-[50px] flex flex-col sm:flex-row items-center justify-center w-80 sm:w-full lg:w-full  h-[5vh] sm:h-[10vh]  absolute mx-16 sm:mx-auto">
          <input
            className="w-80  py-4 sm:h-[6vh]"
            type="text"
            placeholder="  Search..."
          />
          <div className="">
            <button className=" px-[137px] sm:px-8 bg-gray-600 text-white h-[8vh] sm:h-[6vh]">
              {" "}
              Search
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
