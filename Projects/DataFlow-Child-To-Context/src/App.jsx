import React, { useContext } from "react";
import { MyInput } from "./context/InputContext";
import { useState } from "react";

const App = () => {
  const { setText } = useContext(MyInput);
  const [localText, setLocalText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setText(localText);
  };

  return (
    <div style={{ padding: "30px" }}>
      <form onSubmit={(e) => handleSubmit(e)}>
        <input
          type="text"
          value={localText}
          onChange={(e) => {
            setLocalText(e.target.value);
            console.log(localText);
          }}
        />{" "}
        <br />
        <br />
        <button type="submit">Submit: context me value jayegi</button>
      </form>
    </div>
  );
};

export default App;
