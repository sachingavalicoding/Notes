import { useContext, useState } from "react"
import { UserContext } from "../contexts/UserContext"


const Profile = () => {
  const {user , setUser} = useContext(UserContext);
  const [input , setInput]= useState("");

  const handleForm = (e) => {
    e.preventDefault();
    setUser(input)
  }
  return (
    <div>
        <h1> My name is {user}</h1>
        <form action="" onSubmit={handleForm}>
        <input type="text" onChange={(e) => setInput(e.target.value)} value={input} />
        <button type="submit">Add user </button>
        </form>
    </div>
  )
}

export default Profile