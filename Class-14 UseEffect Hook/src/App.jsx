import React, { useEffect, useState } from "react";

const App = () => {
  const [first, setFirst] = useState(0);
  const [changing, setChanging] = useState(false);

  useEffect(() => {
    console.log("Value Changing...");

    return () => {
      
    }
  }, [changing]);

  return (
    <div className="text-2xl">
      App {first} <br />
      <button className="border" onClick={() => setFirst((prev) => prev + 1)}>
        Increment
      </button>{" "}
      <br />
      <button className="border" onClick={() => setChanging((prev) => !prev)}>
        Change Value
      </button>
    </div>
  );
};

export default App;
