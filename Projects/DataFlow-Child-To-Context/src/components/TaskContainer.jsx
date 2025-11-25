import React, { useContext } from "react";
import List from "./List";
import { MyInput } from "../context/InputContext";

const TaskContainer = () => {
  const {text} = useContext(MyInput);

  return (
    <div className="border h-70 overflow-y-auto scrollbar-none rounded-lg p-5 mt-4">
      <h1 className="text-2xl font-semibold">Tasks -</h1>

      {text.map((item, idx) => {
        return <List key={idx} item={item} />;
      })}
    </div>
  );
};

export default TaskContainer;
