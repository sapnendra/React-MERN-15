import React from "react";

const List = ({ item }) => {
  return (
    <div className="mt-2 w-full flex items-center justify-between gap-5 border px-3 py-1 rounded-lg border-gray-300">
      <p className="text-xl font-semibold">{item}</p>
      <div className="flex gap-2">
        <button className="px-4 cursor-pointer py-2 bg-yellow-600 text-white font-bold rounded-lg">Update</button>
        <button className="px-4 cursor-pointer py-2 bg-red-600 text-white font-bold rounded-lg">Delete</button>
      </div>
    </div>
  );
};

export default List;
