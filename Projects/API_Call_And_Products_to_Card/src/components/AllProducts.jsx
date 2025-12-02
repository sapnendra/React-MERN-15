import { useContext, useState } from "react";
import { MyCart } from "../context/CartContext";
import ChangeQuantity from "./ChangeQuantity";
import {alert} from "react-alertify-mini";

const AllProducts = ({ item }) => {
  const { cartItems, setCartItems } = useContext(MyCart);
  const [quantity, setQuantity] = useState(1);

  const existingItem = cartItems.find((cartItem) => cartItem.id === item.id);

  const handleCart = () => {
    setCartItems((prev) => [...prev, { ...item, quantity }]);
    setQuantity(1);
    alert.success("Item added to cart");
  };

  const handleQuantityChange = (newQuantity) => {
    if (newQuantity < 1) {
      setCartItems((prev) =>
        prev.filter((cartItem) => cartItem.id !== item.id)
      );
      alert.error("Item removed from cart");
      return;
    }
    setCartItems((prev) =>
      prev.map((cartItem) =>
        cartItem.id === item.id
          ? { ...cartItem, quantity: newQuantity }
          : cartItem
      )
    );
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

        {!existingItem ? (
          <button
            onClick={handleCart}
            className="px-6 py-2 hover:scale-105 duration-200 active:scale-95 rounded-lg bg-yellow-600 text-lg font-bold cursor-pointer"
          >
            Add to Cart
          </button>
        ) : (
          <ChangeQuantity
            quantity={existingItem.quantity}
            setQuantity={(newQty) => handleQuantityChange(newQty)}
          />
        )}
      </div>
    </div>
  );
};

export default AllProducts;
