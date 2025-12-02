import { useContext } from "react";
import { Link } from "react-router";
import { MyCart } from "../context/CartContext";

const Navbar = () => {
  const { cartItems } = useContext(MyCart);
  return (
    <nav className="h-30 flex border-2 border-gray-700 rounded-4xl items-center justify-between px-10 pr-20">
      <Link to={"/"}>
        <h1 className="text-5xl text-transparent bg-clip-text uppercase font-bold bg-linear-to-r from-rose-500 to-rose-600">
          Sapnendra
        </h1>
      </Link>
      <div className="flex gap-20 items-center">
        <Link to={"/"} className="text-2xl font-medium text-white">
          Products
        </Link>
        <div className="relative">
          <Link to={"/cart"} className="text-2xl font-medium text-white">
            Cart
          </Link>
          <span className="text-white absolute -top-5 right-[-34px] text-xl font-bold bg-rose-500 rounded-full h-8 w-8 p-2 flex items-center justify-center">
            {cartItems.length}
          </span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
