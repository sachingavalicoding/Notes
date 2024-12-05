import { useState } from "react";

const Contact = () => {
  const [form , setForm] = useState({
    name:"",
    email:"",
    tel:""
  });

  const handleChange = (e) => {
       const {name , value } = e.target;
       console.log(name)
       console.log(value)
       setForm((prev) => ({
        ...prev , 
        [name] : value
       }))
  }
  const handleForm = (e)=> {
    e.preventDefault();
    console.log("Form Submitted:", form);
    // Reset form fields
    setForm({
      name: "",
      email: "",
      tel:""
    });
   
  }
  return (
    <div className="container section">
      <h2> Contact </h2>
      <form className="section" onSubmit={handleForm}>
        <input
          type="text"
          name="name"
          value={form.name}
          onChange={handleChange}
        />
        <input
          type="email"
          name="email"
          id="email"
          value={form.email}
          onChange={handleChange}
        />
        <input type="tel" name="tel" id="" value={form.tel} onChange={handleChange} />
        <button type="submit"> Submit </button>
      </form>
     
    </div>
  );
};

export default Contact;
