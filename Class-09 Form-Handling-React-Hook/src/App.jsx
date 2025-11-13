import React, { useState } from "react";
import Register from "./components/Register";
import Login from "./components/Login";

const images = [
  "https://images.unsplash.com/photo-1761839258575-038fef381ee7?ixlib=rb-4.1.0&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1470",
  "https://images.unsplash.com/photo-1758524053238-38b1cb9115dc?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1632",
  "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=687",
  "https://images.unsplash.com/photo-1617171594285-fc2f31d913b3?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=687",
  "https://plus.unsplash.com/premium_photo-1661906798981-6de578ee382a?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=687",
];

const App = () => {
  const [toggle, setToggle] = useState(true);
  const registeredUsers = JSON.parse(localStorage.getItem("users")) || [];
  const [usersArray, setUsersArray] = useState(() => {
    return registeredUsers;
  });

  const getImg = () => {
    const index = Math.floor(Math.random() * images.length);
    return images[index];
  };

  return (
    <div className="h-screen w-full bg-black flex flex-col gap-10 pt-5 px-2">
      <div className="w-full flex justify-center items-center">
        {toggle ? (
          <Login setToggle={setToggle} />
        ) : (
          <Register
            setToggle={setToggle}
            usersArray={usersArray}
            setUsersArray={setUsersArray}
          />
        )}
      </div>

      <div className="border-gray-600 p-2 rounded-lg flex flex-wrap gap-2 shrink-0">
        {registeredUsers && registeredUsers.length > 0 ? (
          registeredUsers.map((user, idx) => {
            return (
              <div
                key={idx}
                className="w-fit bg-white flex items-center justify-between gap-5 py-2 px-5 rounded-lg"
              >
                <img
                  className="h-20 w-20 object-cover rounded-full"
                  src={getImg()}
                  alt={user.fullname}
                />
                <h2 className="text-black text-2xl font-bold">
                  {user.fullname}
                </h2>
              </div>
            );
          })
        ) : (
          <h3 className="w-50 mx-auto text-2xl text-red-500 bg-yellow-300 font-bold px-8 py-2 rounded-lg text-center">
            No Users
          </h3>
        )}
      </div>
    </div>
  );
};

export default App;
