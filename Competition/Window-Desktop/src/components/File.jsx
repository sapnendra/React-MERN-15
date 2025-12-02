import React, { useContext, useState } from "react";
import { MyContext } from "../context/MyContext";

const File = () => {
  const { setFileFlag } = useContext(MyContext);

  return (
    <div
      className={`bin h-100 w-150 rounded-sm bg-white absolute bottom-25 left-165`}
    >
      <div className="w-full flex items-center justify-between border-b border-gray-300">
        <img src="./file.png" />
        <div className="flex items-center gap-4">
          <button
            className="bg-blue-500 px-4 py-1 rounded-md font-bold text-white"
          >
            Max
          </button>
          <button
            onClick={() => setFileFlag((prev) => !prev)}
            className="bg-blue-500 px-4 py-1 rounded-md font-bold text-white"
          >
            Min
          </button>
        </div>
      </div>
    </div>
  );
};

export default File;
