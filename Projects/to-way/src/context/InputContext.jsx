import { createContext, useState } from "react";

export const MyInput = createContext();

const InputContext = ({ children }) => {
  const [text, setText] = useState("");
  console.log("Mai context me hu: ", text);
  return (
    <MyInput.Provider value={{ text, setText }}>{children}</MyInput.Provider>
  );
};

export default InputContext;
