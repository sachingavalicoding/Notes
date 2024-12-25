import { useEffect, useState } from "react";
import { FaGithub, FaUser } from "react-icons/fa";
import { MdDarkMode } from "react-icons/md";
import { IoIosSunny } from "react-icons/io";
import { Link } from "react-router-dom";
const Navbar = () => {
  const [theme, setTheme] = useState("light");
  const handleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };
  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <nav className="bg-black text-white px-4 py-3 flex justify-between items-center fixed top-0 w-full z-10 shadow-md">
      {/* Title */}
      <h1 className="text-2xl font-bold">Todo List</h1>

      {/* Icons */}
      <div className="flex items-center gap-6 text-xl">
        <button
          className="hover:text-gray-400 transition duration-300"
          aria-label="Toggle Theme"
          onClick={handleTheme}
        >
          {theme == "light" ? <IoIosSunny /> : <MdDarkMode />}
        </button>

        <Link to={"/register"}
          className="hover:text-gray-400 transition duration-300"
        >
          <FaUser />
        </Link>

        <Link
         to={"https://github.com/sachingavalicoding"}
          className="hover:text-gray-400 transition duration-300"
        >
          <FaGithub />
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
