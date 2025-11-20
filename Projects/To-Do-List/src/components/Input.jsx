import React, { useContext, useState } from "react";
import { MyTask } from "../context/CreateContext";
import { nanoid } from "nanoid";

const Input = () => {
  const [task, setTask] = useState("");

  const { tasks, setTasks } = useContext(MyTask);

  const handleSubmit = (e) => {
    e.preventDefault();

    let updatedTasks = [...tasks, { id: nanoid(), task: task }];
    localStorage.setItem("tasks", JSON.stringify(updatedTasks));
    setTasks(updatedTasks);

    setTask("")
  };
  return (
    <div className="w-[100%]">
      <form
        className="w-full flex justify-between gap-2"
        onSubmit={(e) => handleSubmit(e)}
      >
        <input
          className="w-full focus:outline-none border border-gray-600 text-xl rounded-xl px-5 py-3 text-white"
          type="text"
          placeholder="Enter task..."
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
        <input
          className="px-5 py-2 rounded-xl cursor-pointer bg-blue-600 font-bold text-white"
          type="submit"
          value="Add Task"
        />
      </form>
    </div>
  );
};

export default Input;
