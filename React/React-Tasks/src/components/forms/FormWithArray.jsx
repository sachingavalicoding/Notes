import { useState } from "react";

const FormWithArray = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [users, setUsers] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setUsers([...users, formData]);
    setFormData({ username: "", email: "", password: "" }); // Reset form
  };

  return (
    <div className="w-full h-screen flex items-center flex-col justify-center">
      <form
        onSubmit={handleSubmit}
        className="bg-slate-200 w-96 h-96 rounded-xl shadow-lg flex justify-center items-center flex-col gap-6 "
      >
        <h2 className="font-semibold text-red-400 uppercase text-4xl">
          Sign Up
        </h2>
        <input
          className="px-6 py-3 rounded-lg shadow-2xl border-1 border-black"
          type="text"
          name="username"
          placeholder="Username..."
          value={formData.username}
          onChange={handleChange}
        />
        <input
          className="px-6 py-3 rounded-lg shadow-2xl border-1 border-black"
          type="email"
          name="email"
          placeholder="Email..."
          value={formData.email}
          onChange={handleChange}
        />
        <input
          className="px-6 py-3 rounded-lg shadow-2xl border-1 border-black"
          type="password"
          name="password"
          placeholder="Password..."
          value={formData.password}
          onChange={handleChange}
        />
        <button
          type="submit"
          className="px-8 py-3 text-white rounded-lg bg-slate-800"
        >
          Sign Up
        </button>
      </form>

      <div className="ml-6">
        <h3 className="font-bold text-lg">User List:</h3>
        {users.map((user, index) => (
          <p key={index} className="flex flex-col gap-2 px-3 py-4 shadow-md w-96  ">
            <strong> Name : {user.username}</strong>
            <strong> Email : {user.email}</strong>
            <strong>Password :{user.password} </strong>
          </p>
        ))}
      </div>
    </div>
  );
};

export default FormWithArray;
