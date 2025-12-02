import { useContext } from "react";
import { MyCart } from "../context/CartContext";
import ChangeQuantity from "./ChangeQuantity";

const CartItem = ({ item }) => {
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
      <p className="text-center text-xl font-semibold">Item quantity: {item.quantity}</p>
      <div className="flex items-center gap-10 mt-4">
        <button className="px-6 py-2 hover:scale-105 duration-200 active:scale-95 rounded-lg bg-blue-600 text-lg font-bold">
          Checkout
        </button>

        <button className="px-6 py-2 hover:scale-105 duration-200 active:scale-95 rounded-lg bg-red-600 text-lg font-bold">
            Remove
        </button>
      </div>
    </div>
  );
};

export default CartItem;
