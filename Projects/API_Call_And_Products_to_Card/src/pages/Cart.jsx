import React, { useContext } from 'react'
import { MyCart } from '../context/CartContext'
import CartItem from '../components/CartItem';

const Cart = () => {
  const {cartItems} = useContext(MyCart);

  return <div className="border-2 border-gray-700 rounded-4xl mt-10">
      <div className="py-10 flex flex-col gap-6">
        <h1 className="text-5xl text-center font-bold bg-linear-to-r from-amber-400 to-amber-600 text-transparent bg-clip-text">
          Items in Your Cart
        </h1>
        <div className="p-10 flex flex-wrap justify-center shrink-0">
          {cartItems.map((product) => {
            return <CartItem key={product.id} item={product} />;
          })}
        </div>
      </div>
    </div>
}

export default Cart