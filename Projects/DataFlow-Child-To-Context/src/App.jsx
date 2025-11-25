import React, { useContext } from "react";
import { MyInput } from "./context/InputContext";
import { useState } from "react";
import TaskContainer from "./components/TaskContainer";

const App = () => {
  const { setText } = useContext(MyInput);
  const [localText, setLocalText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setText((prev => [...prev, localText]));
    setLocalText("")
  };

  return (
    <div className="p-4">
      <form onSubmit={(e) => handleSubmit(e)}>
        <input
        placeholder="Enter task..."
        className="border px-5 py-2 rounded-xl focus:outline-none"
          type="text"
          value={localText}
          onChange={(e) => {
            setLocalText(e.target.value);
          }}
        />{" "}
        <br />
        <br />
        <button className="cursor-pointer bg-blue-600 text-white font-bold px-6 py-2 rounded-xl" type="submit">Add Task</button>
      </form>

      <TaskContainer />

    </div>
  );
};

export default App;
