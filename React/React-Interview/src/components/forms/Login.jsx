import { useState } from "react";

const Login = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [data , setData ] = useState([]);

  const handleForm = (e)=> {
    e.preventDefault();
    setData([...data , {name , email}]);
    setName("");
    setEmail("");
  }
  return (
    <div className="container section">
      <h2> Login </h2>
      <form onSubmit={handleForm}>
        <input
          type="text"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="email"
          name="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button type="submit"> Submit </button>
      </form>
     {
      data.length ? <> <table border="1" cellPadding="5" cellSpacing="0">
      <thead>
        <tr>
          <th>Name</th>
          <th>Email</th>
        </tr>
      </thead>
      <tbody>
        {data.map((ele, index) => (
          <tr key={index}>
            <td>{ele.name}</td>
            <td>{ele.email}</td>
          </tr>
        ))}
      </tbody>
    </table> </> : " "
     }
    </div>
  );
};

export default Login;
