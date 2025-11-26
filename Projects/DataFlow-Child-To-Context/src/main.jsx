import { createRoot } from "react-dom/client";
import "./index.css";
import { AlertContainer } from "react-alertify-mini";
import App from "./App.jsx";
import InputContext from "./context/InputContext.jsx";

createRoot(document.getElementById("root")).render(
  <InputContext>
    <AlertContainer />
    <App />
  </InputContext>
);
