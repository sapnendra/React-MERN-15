import React from "react";

const Navbar = ({ setFlag }) => {
  return (
    <div className="w-full fixed bg-gray-700 px-40 py-10 flex justify-between">
      <h1 className="uppercase text-yellow-500 text-4xl font-bold">Flipkart</h1>
      <h3
        className="uppercase text-blue-300 text-2xl font-bold cursor-pointer"
        onClick={() =>
          setFlag((prev) => {
            console.log(prev);
            return !prev;
          })
        }
      >
        Cart
      </h3>
    </div>
  );
};

export default Navbar;
