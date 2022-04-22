import React from "react";

const Card = () => {
  return (
    <div className="flex flex-wrap mx-20 my-16 justify-between items-center">
      <div className="flex flex-col">
        <div className="relative flex items-center justify-center overflow-hidden shadow-xl w-96 h-64">
          <img
            className=" hover:scale-150 absolute w-full h-full transition-all duration-500 ease-in-out transform bg-center bg-cover"
            src="https://st.hzcdn.com/simgs/pictures/exteriors/lucerne-daniel-marshall-architect-img~f6d1874e00f4f4dc_4-2894-1-bfeda34.jpg"
            alt="#"
          />
        </div>
        <div>
          <h1 className="text-2xl pt-3 font-medium text-slate-600 pb-2">
            Dream house 1
          </h1>
          <p className="text-sm tracking-tight font-light text-slate-400 leading-6">
            {" "}
            Lorem ipsum dolor sit amet.
          </p>
        </div>
      </div>
      <div className="flex flex-col">
        <div className="relative flex items-center justify-center overflow-hidden shadow-xl w-96 h-64">
          <img
            className="hover:scale-150 absolute w-full h-full transition-all duration-500 ease-in-out transform bg-center bg-cover"
            src="https://images.adsttc.com/media/images/56d6/58e7/e58e/ce2a/cd00/0148/large_jpg/mv46-hi-res.jpg?1456888022"
            alt="#"
          />
        </div>

        <div>
          <h1 className="text-2xl pt-3 font-medium text-slate-600 pb-2">
            Dream house 2
          </h1>
          <p className="text-sm tracking-tight font-light text-slate-400 leading-6">
            {" "}
            Lorem ipsum dolor sit amet.
          </p>
        </div>
      </div>
      <div className="flex flex-col">
        <div className="relative flex items-center justify-center overflow-hidden shadow-xl w-96 h-64">
          <img
            className="hover:scale-150 absolute w-full h-full transition-all duration-500 ease-in-out transform bg-center bg-cover"
            src="https://s.oneroof.co.nz/image/1e/3b/1e3b4ee733c3d28c3d3b89c1351f841f.jpg"
            alt="#"
          />
        </div>

        <div>
          <h1 className="text-2xl pt-3 font-medium text-slate-600 pb-2">
            Dream house 3
          </h1>
          <p className="text-sm tracking-tight font-light text-slate-400 leading-6">
            {" "}
            Lorem ipsum dolor sit amet.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Card;
