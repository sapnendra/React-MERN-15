import React, { useContext } from "react";
import { MyInput } from "./context/InputContext";

const App = () => {
  const { text, setText } = useContext(MyInput);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Mai aap me hu: ", text);
  };

  return (
    <div>
      <form>
        <input
          type="text"
          value={text}
          name="text"
          onChange={(e) => setText(e.target.value)}
        />
        <button onClick={(e) => handleSubmit(e)}>
          Submit: context me value jayegi
        </button>
      </form>
    </div>
  );
};

export default App;
