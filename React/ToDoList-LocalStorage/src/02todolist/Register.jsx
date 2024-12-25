import { useState } from "react";
import { client } from "../server/index.js";
import { Account, ID } from "appwrite";
import { Link, useNavigate } from "react-router-dom";
const Register = () => {
  const account = new Account(client);
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    id: null,
    username: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    // using spread we restore our not change

    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await account.create(
        ID.unique(),
        formData.email,
        formData.password,
        formData.username
      );
      alert(" Register Successfully");
      navigate("/login");
    } catch (e) {
      alert(` Error In Register ${e}`)
      console.log(" Error in Sign Up", e);
    }
  };
  return (
    <div className="w-full h-screen flex flex-col items-center px-4 justify-center pb-20 bg-slate-900">
      <form
        method=""
        onSubmit={handleSubmit}
        className=" bg-slate-200   py-6 w-full  sm:w-96 h-96 rounded-xl shadow-lg flex justify-center items-center flex-col gap-6 "
      >
        <h2 className="font-semibold text-red-400 uppercase text-4xl ">
          {" "}
          Sign Up{" "}
        </h2>
        <input
          className="px-6 py-3 rounded-lg shadow-2xl border-1 border-black "
          type="text"
          name="username"
          id="username"
          placeholder="Username..."
          value={formData.username}
          onChange={handleChange}
          required
        />
        <input
          className="px-6 py-3 rounded-lg shadow-2xl border-1 border-black "
          type="email"
          name="email"
          id="email"
          placeholder="Email..."
          value={formData.email}
          onChange={handleChange}
          required
        />
        <input
          className="px-6 py-3 rounded-lg shadow-2xl border-1 border-black "
          type="password"
          name="password"
          id="password"
          placeholder="Password..."
          value={formData.password}
          onChange={handleChange}
          minLength={8}
          maxLength={256}
          required
        />

        <div className="flex flex-col items-center text-center gap-4">
       
        <button
          type="submit"
          className="px-8 py-3 text-white rounded-lg bg-slate-800"
        >
          {" "}
          Sign Up{" "}
        </button>
        <Link to={"/login"}> You already have an account ?<span className="text-xl text-red-400 font-semibold"> Login</span> </Link>
        </div>
      </form>
    </div>
  );
};

export default Register;
