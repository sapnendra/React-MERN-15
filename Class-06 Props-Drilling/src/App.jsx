import React, { useState } from "react";
import ParentComponent from "./components/ParentComponent";

const App = () => {
  const [username, setUsername] = useState("John Doe");

  return (
    <div className="p-10">
      <h1 className="text-4xl font-bold mb-6">Props Drilling Example</h1>
      <div className="max-w-2xl mx-auto">
        <p className="mb-4">
          App Level Username:{" "}  
          <span className="text-red-500 text-2xl font-bold">{username}</span>
        </p>
        <ParentComponent username={username} setUsername={setUsername} />
      </div>
    </div>
  );
};

export default App;
