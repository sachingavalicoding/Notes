import { useContext } from "react"
import { UserContext } from "./contexts/UserContext"
import Profile from "./components/Profile";

const App = () => {
  const {user } = useContext(UserContext);
  return (
    <div>
      <h1> Hello {user} </h1>
      <Profile />
    </div>
  )
}

export default App