import React, { useState } from "react";
import Login from "./Login";
import Register from "./Register";

const App = () => {
  const [isSignIn, setIsSignIn] = useState(false);
  return (
    <div className="p-10">
      {isSignIn ? (
        <Login setIsSignIn={setIsSignIn} />
      ) : (
        <Register setIsSignIn={setIsSignIn} />
      )}
    </div>
  );
};

export default App;
