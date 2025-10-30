import React from "react";
import 'remixicon/fonts/remixicon.css'

const HeroLeft = () => {
  return (
    <div className="h-full w-1/3 text-white flex flex-col p-5">
      <div className="">
        <h3 className="text-6xl font-semibold mb-5">
          We <br /> <span className="text-red-500">Deconstruct</span> <br /> Things
        </h3>
        <p className="text-2xl">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit eligendi
          possimus dolores quas illum iure, magnam autem quidem deserunt
          assumenda.
        </p>
      </div>
      <div className="mt-15">
        <button className="text-5xl font-bold"><i className="ri-arrow-right-up-line"></i></button>
      </div>
    </div>
  );
};

export default HeroLeft;
