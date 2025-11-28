import { useContext } from "react";
import { MyTask } from "./context/InputContext";
import { useState } from "react";
import { alert } from "react-alertify-mini";
import TaskContainer from "./components/TaskContainer";
import { nanoid } from "nanoid";

const App = () => {
  const {tasks, setTasks } = useContext(MyTask);
  const [localText, setLocalText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (localText.trim() === "") {
      alert.error("Don't create empty task.!");
      return;
    }
    alert.success("Task added to the list.!");
    setTasks((prev) => {
      return [...prev, { id: nanoid(), task: localText }];
    });
    localStorage.setItem("tasks", JSON.stringify(tasks));
    setLocalText("");
  };

  return (
    <div className="w-250 mx-auto mt-20 text-center">
      <form className="flex gap-3" onSubmit={(e) => handleSubmit(e)}>
        <input
          placeholder="Enter task..."
          className="w-full border px-5 py-2 rounded-xl focus:outline-none"
          type="text"
          value={localText}
          onChange={(e) => {
            setLocalText(e.target.value);
          }}
        />{" "}
        <button
          className="hover:scale-105 duration-150 active:scale-95 cursor-pointer w-40 bg-blue-600 text-white font-bold px-6 py-4 rounded-xl"
          type="submit"
        >
          Add Task
        </button>
      </form>

      <TaskContainer />
    </div>
  );
};

export default App;
