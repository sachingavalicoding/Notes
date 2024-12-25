import { BrowserRouter, Routes , Route } from "react-router"
import Todolist from "./02todolist/Todolist"
import Register from "./02todolist/Register"
import Navbar from "./02todolist/Navbar"
import Login from "./02todolist/Login"
const App = () => {
  return (
    <BrowserRouter>
    <Navbar />
      <Routes>
        <Route path= "/" element = {<Todolist />} />
        <Route path= "/register" element = {<Register />} />
        <Route path= "/login" element = {<Login/>} />
      </Routes>
    </BrowserRouter>
  )
}

/* import Todolist from "./02todolist/Todolist"

// export default App

const App = () => {
  return (
   <>
   <Todolist />
   </>
  )
} */

export default App