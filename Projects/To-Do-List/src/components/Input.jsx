import React, { useContext, useEffect, useRef, useState } from "react";
import { MyTask } from "../context/CreateContext";
import { nanoid } from "nanoid";

const Input = () => {
  const [task, setTask] = useState("");
  const { tasks, setTasks, id, setId } = useContext(MyTask);
  const inputRef = useRef(null);

  useEffect(() => {
    if (id) {
      const updateTask = tasks.find((item) => item.id === id);
      setTask(updateTask.task);
      inputRef.current.focus();
    }
  }, [id]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!task) {
      return;
    }

    if (id) {
      const updateTask = tasks.find((item) => item.id === id);
      updateTask.task = task;

      let updatedTasks = [...tasks];
      setTasks[updatedTasks];
      localStorage.setItem("tasks", JSON.stringify(updatedTasks))
      setTask("");
      setId("");
      return;
    }

    let updatedTasks = [...tasks, { id: nanoid(), task: task }];
    localStorage.setItem("tasks", JSON.stringify(updatedTasks));
    setTasks(updatedTasks);

    setTask("");
  };
  return (
    <div className="w-full">
      <form
        className="w-full flex justify-between gap-2"
        onSubmit={(e) => handleSubmit(e)}
      >
        <input
          ref={inputRef}
          className="w-full focus:outline-none border border-gray-600 text-xl rounded-xl px-5 py-3 text-white"
          type="text"
          placeholder="Enter task..."
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
        {id ? (
          <input
            className="px-5 py-2 rounded-xl cursor-pointer bg-yellow-600 font-bold text-white"
            type="submit"
            value="Update Task"
          />
        ) : (
          <input
            className="px-5 py-2 rounded-xl cursor-pointer bg-blue-600 font-bold text-white"
            type="submit"
            value="Add Task"
          />
        )}
      </form>
    </div>
  );
};

export default Input;
