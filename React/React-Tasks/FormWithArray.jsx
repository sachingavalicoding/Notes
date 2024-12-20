import { useState } from "react";

const FormWithArray = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [users , setUsers] = useState([]);

  const handleChange = (e) => {
    // using spread we retore our not change

    const {name , value  } = e.target;
    setFormData({
      ...formData,
      [name]: value ,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setUsers([...users , formData]);
  };
  return (
    <div className="w-full h-screen flex items-center justify-center">
      <form
        method=""
        onSubmit={handleSubmit}
        className=" bg-slate-200 w-96 h-96 rounded-xl shadow-lg flex justify-center items-center flex-col gap-6 "
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
        <button
          type="submit"
          className="px-8 py-3 text-white rounded-lg bg-slate-800"
        >
          {" "}
          Sign Up  {" "}
        </button>
      </form>

      <div>
        <p> {formData.username} </p>
        <p> {formData.password} </p>
        {
            users.map((ele , index) => {
                return (<p key={index}> {ele} </p> )
            })
        }
      </div>
    </div>
  );
};

export default FormWithArray;
