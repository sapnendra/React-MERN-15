import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import TaskContainer from "./context/TaskContext.jsx";

createRoot(document.getElementById("root")).render(
  <TaskContainer>
    <App />
  </TaskContainer>
);