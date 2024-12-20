import { useState } from "react";

const FormCreate = () => {

  const [formData , setFormData ] = useState({
    username:"",
    email:"",
    password:""
  })

  const handleChange = (e) => {
    // using spread we retore our not change 
      setFormData({
        ...formData,
        [e.target.name ]: e.target.value, 
      })
  }

  const handleSubmit = () => {
    alert( ` Welcome ${formData.username} Your Password is ${formData.password}`)
  }
  return (
    <div className="w-full h-screen flex items-center justify-center">
      <div className=" bg-slate-200 w-96 h-96 rounded-xl shadow-lg flex justify-center items-center flex-col gap-6 ">
        <h2 className="font-semibold text-red-400 uppercase text-4xl "> Sign Up </h2>
        <input
          className="px-6 py-3 rounded-lg shadow-2xl border-1 border-black "
          type="text"
          name="username"
          id="username"
          placeholder="Username..."
          value={formData.username}
          onChange={handleChange}
        />
        <input
          className="px-6 py-3 rounded-lg shadow-2xl border-1 border-black "
          type="email"
          name="email"
          id="email"
          placeholder="Email..."
          value={formData.email}
          onChange={handleChange}
        />
        <input
          className="px-6 py-3 rounded-lg shadow-2xl border-1 border-black "
          type="password"
          name="password"
          id="password"
          placeholder="Password..."
          value={formData.password}
          onChange={handleChange}
        />
        <button onClick={handleSubmit} className="px-8 py-3 text-white rounded-lg bg-slate-800">
          {" "}
          Submit{" "}
        </button>
      </div>
    </div>
  );
};

export default FormCreate;
