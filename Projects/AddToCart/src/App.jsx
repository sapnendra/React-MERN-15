import {ToastContainer} from "react-toastify"
import { useState } from "react";
import Navbar from "./components/Navbar";
import Products from "./components/Products";
import Cart from "./components/Cart";

const App = () => {
  const [flag, setFlag] = useState(false);
  const [cartItem, setCartItems] = useState([]);

  return (
    <>
      <Navbar setFlag={setFlag} />
      <div className="h-[80%] bg-black">
        {flag ? (
          <Cart cartItem={cartItem} />
        ) : (
          <Products cartItem={cartItem} setCartItems={setCartItems} />
        )}
      </div>
      <ToastContainer />
    </>
  );
};

export default App;
