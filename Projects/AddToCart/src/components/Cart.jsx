import React from "react";

const Cart = ({ cartItem }) => {
  console.log(cartItem);

  return (
    <div className="min-h-screen w-full bg-black absolute">
      <h1 className="text-white text-center text-4xl font-bold py-5">Cart</h1>
      <div className="flex gap-10 shrink-0 flex-wrap">
        {cartItem.map((item, idx) => {
          return (
            <div
              key={idx}
              className="h-150 w-120 rounded-lg p-5 flex flex-col gap-4 text-white border border-gray-600"
            >
              <img
                className="h-[70%] object-cover rounded-lg"
                src={item.image}
              />
              <h2 className="text-2xl font-semiold">{item.title}</h2>
              <h3 className="text-xl">Price: {item.price}</h3>
              <button
               
                className="cursor-pointer px-6 rounded-lg py-2 bg-green-600 text-white font-bold text-lg"
              >
                Remove
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Cart;
