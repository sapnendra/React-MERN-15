import { useState } from "react";
import { MyTask } from "./CreateContext.jsx";
const TaskContext = ({ children }) => {
  const [tasks, setTasks] = useState(
    JSON.parse(localStorage.getItem("tasks")) || []
  );
  return (
    <MyTask.Provider value={{ tasks, setTasks }}>{children}</MyTask.Provider>
  );
};

export default TaskContext;
