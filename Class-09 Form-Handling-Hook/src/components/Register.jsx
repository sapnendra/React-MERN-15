import React, { useState } from "react";

const Register = ({ setToggle, usersArray, setUsersArray }) => {
  const [formData, setFormData] = useState({
    fullname: "",
    username: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedUsers = [...usersArray, formData];
    setUsersArray(updatedUsers);
    localStorage.setItem("users", JSON.stringify(updatedUsers));
    alert("Registration Successfully");

    setFormData({
      fullname: "",
      username: "",
      password: "",
    });
  };

  return (
    <div className="flex flex-col gap-5 text-center w-100">
      <h1 className="text-3xl text-white font-bold">Registration Form</h1>
      <form
        className="flex flex-col gap-4 border border-gray-500 py-8 px-4 rounded-md"
        onSubmit={handleSubmit}
      >
        <input
          name="fullname"
          value={formData.fullname}
          onChange={(e) => handleChange(e)}
          required
          className="rounded-lg border border-gray-600 px-5 py-2 text-white text-white"
          type="text"
          placeholder="Full Name"
        />
        <input
          name="username"
          value={formData.username}
          onChange={(e) => handleChange(e)}
          required
          className="rounded-lg border border-gray-600 px-5 py-2 text-white text-white"
          type="text"
          placeholder="username"
        />
        <input
          name="password"
          value={formData.password}
          onChange={(e) => handleChange(e)}
          required
          className="rounded-lg border border-gray-600 px-5 py-2 text-white text-white"
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
          Already have an account?{" "}
          <span
            onClick={() => setToggle((prev) => !prev)}
            className="text-blue-400 text-lg cursor-pointer"
          >
            Login here
          </span>
        </p>
      </form>
    </div>
  );
};

export default Register;
