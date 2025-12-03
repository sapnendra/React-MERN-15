import React, { useContext } from "react";
import { MyContext } from "../context/MyContext";
import { motion } from "motion/react";
import { Maximize, X } from "lucide-react";

const Bin = () => {
  const { setBinFlag } = useContext(MyContext);
  return (
    <motion.div
      animate={{
        y: -100,
        left: 100,
        top: 140,
        opacity: 1,
        transition: { duration: 0.3, ease: "easeInOut" },
      }}
      className="opacity-0 bin h-100 w-150 rounded-sm bg-white absolute bottom-0 left-170"
    >
      <div className="w-full flex items-center justify-between border-b border-gray-300">
        <img src="./recycle.png" />
        <div className="">
          <button className="cursor-pointer border p-3 border-gray-400 font-bold text-black">
            <Maximize className="" />
          </button>
          <button
            onClick={() => setBinFlag((prev) => !prev)}
            className="cursor-pointer p-3 border-r border-t border-b border-gray-400 font-bold text-black"
          >
            <X />
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default Bin;
