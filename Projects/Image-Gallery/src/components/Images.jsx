import React from "react";

const Images = ({ item }) => {
  return (
    <div
      className="min-h-[320px] w-[250px] bg-gray-200 rounded-xl overflow-hidden"
    >
      <div className="img-box h-[210px]">
        <img
          className="object-cover w-full h-full"
          src={item.src.medium}
          alt={item.alt}
        />
      </div>
      <div className="h-[100px] mt-[10px] w-full p-2 flex items-center justify-between flex-col">
        <h3 className="w-full text-center font-medium text-xl text-gray-600">
          {item.photographer}
        </h3>
        <a href={item.src.original} target="_blank" className="w-full">
          <button className="w-full font-semibold bg-green-500 py-2 rounded-md hover:scale-102 transition-transform duration-300 cursor-pointer">
            <i className="ri-download-line"></i> Download
          </button>
        </a>
      </div>
    </div>
  );
};

export default Images;
