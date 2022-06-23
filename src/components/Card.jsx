import React from "react";

const Card = () => {
  return (
    <div className="flex flex-wrap mx-20 my-16 justify-between items-center">
      <div className="flex flex-col">
        <div className="relative flex items-center justify-center overflow-hidden shadow-xl w-96 h-64">
          <img
            className=" hover:scale-150 absolute w-full h-full transition-all duration-500 ease-in-out transform bg-center bg-cover"
            src="https://www.motortrend.com/uploads/sites/5/2021/08/2022-Acura-NSX-Type-S_020.jpg"
            alt="#"
          />
        </div>
        <div>
          <h1 className="text-2xl pt-3 font-medium text-slate-600 pb-2">
            Dream car 1
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
            src="https://media.ed.edmunds-media.com/lexus/es-350/2022/oem/2022_lexus_es-350_sedan_base_fq_oem_1_1600.jpg"
            alt="#"
          />
        </div>

        <div>
          <h1 className="text-2xl pt-3 font-medium text-slate-600 pb-2">
            Dream car 2
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
            src="https://cdn.cnn.com/cnnnext/dam/assets/200908134553-01-maserati-mc20-super-169.jpg"
            alt="#"
          />
        </div>

        <div>
          <h1 className="text-2xl pt-3 font-medium text-slate-600 pb-2">
            Dream car 3
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
