import React, { useContext } from "react";
import { MyTask } from "../context/CreateContext";

const List = () => {
  const { tasks, setTasks } = useContext(MyTask);

  const handleUpdate = (id) => {
    const newTask = prompt("Enter updated task:");
    if (newTask) {
      const updatedTasks = tasks.map((item) =>
        item.id === id ? { ...item, task: newTask } : item
      );
      setTasks(updatedTasks);
      localStorage.setItem("tasks", JSON.stringify(updatedTasks));
    }
  };

  const handleDelete = (id) => {
    const deleteTasks = tasks.filter((item) => item.id !== id);
    setTasks(deleteTasks);
    localStorage.setItem("tasks", JSON.stringify(deleteTasks));
  };

  return (
    <div className="h-150 overflow-y-auto mt-10 text-white border border-gray-600 p-5 rounded-2xl flex flex-col gap-4">
      {tasks.map((task) => (
        <div
          key={task.id}
          className="flex items-center justify-between gap-5 border border-gray-800 p-5 rounded-lg w-full"
        >
          <p className="text-2xl">{task.task}</p>
          <div className="flex gap-2 items-center justify-center">
            <button
              onClick={() => handleUpdate(task.id)}
              className="px-5 rounded-lg py-2 cursor-pointer bg-yellow-600 text-white font-bold text-lg"
            >
              Update
            </button>
            <button
              onClick={() => handleDelete(task.id)}
              className="px-5 rounded-lg py-2 cursor-pointer bg-red-600 text-white font-bold text-lg"
            >
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default List;
