import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import InputContext from "./context/InputContext.jsx";

createRoot(document.getElementById("root")).render(
  <InputContext>
    <App />
  </InputContext>
);
