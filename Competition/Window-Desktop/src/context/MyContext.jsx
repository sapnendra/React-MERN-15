import { createContext, useState } from "react";

export const MyContext = createContext();

export const MyContextProvider = ({ children }) => {
  const [binFlag, setBinFlag] = useState(false);
  const [chromeFlag, setChromeFlag] = useState(false);
  const [fileFlag, setFileFlag] = useState(false);

  return (
    <MyContext.Provider
      value={{
        binFlag,
        setBinFlag,
        chromeFlag,
        setChromeFlag,
        fileFlag,
        setFileFlag,
      }}
    >
      {children}
    </MyContext.Provider>
  );
};
