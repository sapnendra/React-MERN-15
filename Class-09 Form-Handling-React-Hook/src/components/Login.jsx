import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";

const Login = ({ setToggle }) => {
  const [user, setUser] = useState({
    username: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const regUsers = JSON.parse(localStorage.getItem("users")) || [];

    const found = regUsers.find(
      (u) =>
        u.username?.toString().trim() === user.username.toString().trim() &&
        u.password.toString().trim() === user.password.toString().trim()
    );

    if (found) {
      toast.success("Login Successful", {
        position: "top-left",
      });
    } else {
      toast.error("Invalid credentials", {
        position: "top-left",
      });
    }

    setUser({
      username: "",
      password: "",
    });
  };

  return (
    <div className="flex flex-col gap-5 text-center w-100">
      <h1 className="text-3xl text-white font-bold">Login Form</h1>
      <form
        autoComplete="off"
        className="flex flex-col gap-4 border border-gray-500 py-8 px-4 rounded-md"
        onSubmit={(e) => handleSubmit(e)}
      >
        <input
          name="username"
          value={user.username}
          onChange={(e) => handleChange(e)}
          className="rounded-lg border border-gray-600 px-5 py-2 text-white"
          type="text"
          placeholder="username"
        />
        <input
          name="password"
          value={user.password}
          onChange={(e) => handleChange(e)}
          className="rounded-lg border border-gray-600 px-5 py-2 text-white"
          type="password"
          placeholder="Password"
        />
        <button
          type="submit"
          className="cursor-pointer px-5 py-2 bg-blue-700 text-white font-bold text-lg rounded-lg"
        >
          Submit
        </button>
        <p className="text-white text-left pl-2">
          Don't have account?{" "}
          <span
            onClick={() => setToggle((prev) => !prev)}
            className="text-blue-400 text-lg cursor-pointer"
          >
            Register here
          </span>
        </p>
      </form>
      <ToastContainer />
    </div>
  );
};

export default Login;
