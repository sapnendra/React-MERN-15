import { createContext, useState } from "react";

export const MyTask = createContext();

const InputContext = ({ children }) => {
  const [tasks, setTasks] = useState(JSON.parse(localStorage.getItem("tasks")) || []);
  console.log(tasks);

  return (
    <MyTask.Provider value={{ tasks, setTasks }}>{children}</MyTask.Provider>
  );
};

export default InputContext;
