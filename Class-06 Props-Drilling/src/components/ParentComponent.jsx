import React from "react";
import ChildComponent from "./ChildComponent";

const ParentComponent = ({ username, setUsername }) => {
  return (
    <div className="border p-4 my-4 rounded-lg">
      <h2 className="text-xl font-bold mb-4">Parent Component</h2>
      <p>
        Username from App:{" "}
        <span className="text-green-500 text-2xl font-bold">{username}</span>
      </p>
      <ChildComponent username={username} setUsername={setUsername} />
    </div>
  );
};

export default ParentComponent;
