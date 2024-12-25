import { useState, useEffect, useMemo } from "react";
import { client } from "../server/index.js";
import { Account } from "appwrite";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  // Create the Account instance only once
  const account = useMemo(() => new Account(client), []);

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  useEffect(() => {
    // Check for an existing session
    const checkSession = async () => {
      try {
        const user = await account.get(); // Check if a session exists
        if (user) {
          alert("You are already logged in!");
          navigate("/"); // Navigate if a session exists
        }
      } catch (err) {
        console.log("No active session, proceed to login.", err);
      }
    };
    checkSession();
  }, [account, navigate]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await account.createEmailPasswordSession(
        formData.email,
        formData.password
      );
      alert("Login Successfully");
      navigate("/");
    } catch (e) {
      if (e.code === 409) {
        alert("You are already logged in!");
        navigate("/");
      } else {
        alert(`Error in Login: ${e.message}`);
        console.log("Error in Login", e);
      }
    }
  };

  return (
    <div className="w-full h-screen bg-slate-900 flex flex-col items-center px-4 justify-center pb-20">
      <form
        onSubmit={handleSubmit}
        className="bg-slate-200 py-6 w-full sm:w-96 h-96 rounded-xl shadow-lg flex justify-center items-center flex-col gap-6"
      >
        <h2 className="font-semibold text-red-400 uppercase text-4xl">Login</h2>
        <input
          className="px-6 py-3 rounded-lg shadow-2xl border-1 border-black"
          type="email"
          name="email"
          id="email"
          placeholder="Email..."
          value={formData.email}
          onChange={handleChange}
          required
        />
        <input
          className="px-6 py-3 rounded-lg shadow-2xl border-1 border-black"
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
          Sign in
        </button>
        <Link to={"/login"}> Create an account  ?<span className="text-xl text-red-400 font-semibold"> Register</span> </Link>
      </div>
      </form>
    </div>
  );
};

export default Login;
