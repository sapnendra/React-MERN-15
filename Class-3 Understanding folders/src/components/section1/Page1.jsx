import React from "react";
import Navbar from "./Navbar";
import Hero from "./Hero";

const Page1 = (props) => {
  console.log(props.users);

  return (
    <div className="h-screen bg-[#000] text-3xl">
      <Navbar />
      <Hero />
    </div>
  );
};

export default Page1;
