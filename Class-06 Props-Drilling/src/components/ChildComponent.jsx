import React from "react";
import GrandChildComponent from "./GrandChildComponent";

const ChildComponent = ({ username, setUsername }) => {
  return (
    <div className="border p-4 my-4 ml-8 rounded-lg bg-gray-50">
      <h3 className="text-lg font-bold mb-4">Child Component</h3>
      <p>
        Username from Parent:{" "}
        <span className="text-blue-500 text-2xl font-bold">{username}</span>
      </p>
      <GrandChildComponent username={username} setUsername={setUsername} />
    </div>
  );
};

export default ChildComponent;
