import { useContext, useState } from "react";
import { MyCart } from "../context/CartContext";

const AllProducts = ({ item }) => {
  const { setCartItems, quantity, setQuantity } = useContext(MyCart);


  const handleCart = () => {
    setCartItems((prev) => [...prev, { ...item, quantity }]);
  };

  return (
    <div className="text-white hover:shadow-lg shadow-gray-800 border border-gray-700 rounded-xl flex flex-col items-center justify-between gap-4 p-4 m-4 w-90 min-h-100 hover:scale-105 duration-300">
      <div className="h-40 w-40 flex items-center justify-center mx-auto">
        <img
          className="w-full h-full rounded-full object-contain shadow-2xl shadow-amber-200/30"
          src={item.image}
          alt={item.title}
        />
      </div>
      <h2 className="text-2xl text-center my-1 font-bold">{item.title}</h2>
      <p className="text-center text-xl font-semibold">{item.category}</p>
      <div className="flex items-center gap-10 mt-4">
        <button className="px-6 py-2 hover:scale-105 duration-200 active:scale-95 rounded-lg bg-green-600 text-lg font-bold">
          Buy Now
        </button>

        {quantity < 1 ? (
          <button
            onClick={handleCart}
            className="px-6 py-2 hover:scale-105 duration-200 active:scale-95 rounded-lg bg-yellow-600 text-lg font-bold cursor-pointer"
          >
            Add to Cart
          </button>
        ) : (
          <div className="py-2 rounded-lg text-black bg-white font-bold flex items-center">
            <button
              onClick={() => setQuantity((prev) => prev - 1)}
              className="text-lg cursor-pointer px-4"
            >
              -
            </button>
            <button className="text-xl border-x border-gray-400 px-4">
              {quantity}
            </button>
            <button
              onClick={() => setQuantity((prev) => prev + 1)}
              className="text-lg cursor-pointer px-4"
            >
              +
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default AllProducts;
