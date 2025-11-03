import React from "react";

const GrandChildComponent = ({ username, setUsername }) => {
  return (
    <div className="border p-4 my-4 ml-8 rounded-lg bg-gray-100">
      <h4 className="text-md font-bold mb-4">GrandChild Component</h4>
      <p>
        Username from Child:{" "}
        <span className="text-cyan-500 text-2xl font-bold">{username}</span>
      </p>
      <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        className="border p-2 rounded mt-2"
        placeholder="Change username"
      />
    </div>
  );
};

export default GrandChildComponent;
