import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { CartProvider } from "./context/CartContext.jsx";
import {BrowserRouter} from "react-router"
import {AlertContainer} from "react-alertify-mini";

createRoot(document.getElementById("root")).render(
  <CartProvider>
    <BrowserRouter>
      <AlertContainer />
      <App />
    </BrowserRouter>
  </CartProvider>
);
