import React, { useContext } from "react";
import List from "./List";
import { MyTask } from "../context/InputContext";

const TaskContainer = () => {
  const { tasks } = useContext(MyTask);

  return (
    <div className="border h-150 overflow-y-auto scrollbar-none rounded-lg p-5 mt-4">
      <h1 className="text-2xl font-semibold">Recent Tasks</h1>

      {tasks && tasks.map((item, idx) => {
        return <List key={idx} item={item} />;
      })}
    </div>
  );
};

export default TaskContainer;
