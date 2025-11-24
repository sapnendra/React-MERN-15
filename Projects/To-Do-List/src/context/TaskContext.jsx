import { useState } from "react";
import { MyTask } from "./CreateContext.jsx";

const TaskContext = ({ children }) => {
  const [tasks, setTasks] = useState(
    JSON.parse(localStorage.getItem("tasks")) || []
  );

  const [id, setId] = useState("");

  return (
    <MyTask.Provider value={{ tasks, setTasks, id, setId }}>{children}</MyTask.Provider>
  );
};

export default TaskContext;
