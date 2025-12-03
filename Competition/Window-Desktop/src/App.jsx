import React, { useContext } from "react";
import { MyContext } from "./context/MyContext";
import Bin from "./components/Bin";
import Chrome from "./components/Chrome";
import File from "./components/File";

const App = () => {
  const {
    binFlag,
    setBinFlag,
    chromeFlag,
    setChromeFlag,
    fileFlag,
    setFileFlag,
  } = useContext(MyContext);
  return (
    <div className="h-screen w-screen overflow-hidden relative">
      <img
        className="h-full w-full md:h-full md:w-full lg:h-full lg:w-full object-cover"
        src="/window.jpg"
        alt=""
      />

      {binFlag && <Bin setBinFlag={setBinFlag} />}

      {chromeFlag && <Chrome />}

      {fileFlag && <File />}

      <div className="absolute z-99 bottom-0 flex items-center justify-center gap-8 w-full bg-black/50 py-3">
        <img
          onClick={() => setBinFlag((prev) => !prev)}
          className="cursor-pointer hover:scale-150 duration-400 active:scale-98"
          src="./recycle.png"
          alt=""
        />
        <img
          onClick={() => setChromeFlag((prev) => !prev)}
          className="cursor-pointer hover:scale-150 duration-400 active:scale-98"
          src="./chrome.png"
          alt=""
        />
        <img
          onClick={() => setFileFlag((prev) => !prev)}
          className="cursor-pointer hover:scale-150 duration-400 active:scale-98"
          src="./file.png"
          alt=""
        />
      </div>
    </div>
  );
};

export default App;
