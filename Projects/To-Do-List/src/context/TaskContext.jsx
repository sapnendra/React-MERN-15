import { Children, createContext, useActionState, useState } from "react";

export const MyTask = createContext();

const [tasks, setTasks] = useState([])

let value = {tasks, setTasks}

const TaskContainer = () => {
  return <MyTask.Provider value={value}>{Children}</MyTask.Provider>;
};
