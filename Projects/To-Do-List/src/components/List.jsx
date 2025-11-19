import React from "react";

const List = () => {
  return (
    <div className="text-white border border-gray-500 p-5 rounded-lg">
      <div className="flex items-center gap-5 border border-gray-800 p-5 rounded-lg">
        <p className="text-2xl">Lorem ipsum dolor sit amet. Culpa, eum.</p>
        <div className="flex gap-2 items-center justify-center">
          <button className="px-5 rounded-lg py-3 bg-yellow-500 text-white font-bold text-lg">Update</button>
          <button className="px-5 rounded-lg py-3 bg-red-500 text-white font-bold text-lg">Delete</button>
        </div>
      </div>
    </div>
  );
};

export default List;
