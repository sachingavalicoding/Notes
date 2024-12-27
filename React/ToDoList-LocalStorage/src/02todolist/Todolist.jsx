import { useEffect, useState } from "react";
import { IoIosAddCircleOutline } from "react-icons/io";
import { FaEdit, FaTrashAlt } from "react-icons/fa";
import { MdCheckBox, MdCheckBoxOutlineBlank, MdEdit } from "react-icons/md";
import { FaGithub, FaUser } from "react-icons/fa";
import { MdDarkMode } from "react-icons/md";
import { IoIosSunny } from "react-icons/io";
import { Link } from "react-router-dom";
const Todolist = () => {
  const initialTodos = JSON.parse(localStorage.getItem("todos")) || [];
  const initialTheme = localStorage.getItem("theme") || "light";
  const [todos, setTodos] = useState(initialTodos);
  const [input, setInput] = useState("");
  //for toggle add button for add new todo or edit todo
  const [editBtn, setEditBtn] = useState(false);
  const [editItem, setEditItem] = useState(null);

  const [theme, setTheme] = useState(initialTheme);
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

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);
  const handleTodos = () => {
    if (input.length > 0 && editBtn) {
      setTodos(
        todos.map((todo) => {
          if (todo.id === editItem) {
            todo.name = input;
          }
          return todo;
        })
      );
      setEditBtn(false);
      setEditItem(null);
      setInput("");
    } else if (input.length > 0 && !input.startsWith(" ")) {
      setTodos([
        {
          id: Date.now(),
          name: input,
          isCompleted: false,
        },
        ...todos,
      ]);
    } else {
      alert(" Enter Todo first ");
    }

    setInput("");
  };
  const handleInput = (e) => {
    setInput(e.target.value);
  };

  const handleDelete = (id) => {
    let newArray = todos.filter((todo) => todo.id !== id);
    setTodos(newArray);
  };
  const handleUpdate = (id) => {
    let getUpdatedTodo = todos.find((ele) => {
      return ele.id === id;
    });

    setInput(getUpdatedTodo.name);
    setEditBtn(true);
    setEditItem(id);
  };

  const handleCompleted = (id) => {
    const newCompletedItems = todos.map((todo) => {
      if (todo.id === id) {
        todo.isCompleted = !todo.isCompleted;
      }
      return todo;
    });

    setTodos(newCompletedItems);
  };
  return (
    <section className="w-full flex px-6 items-center justify-center  bg-gradient-to-r from-violet-600 to-indigo-600 h-screen">
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

          <Link
            to={"/register"}
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
      <main
        className={` relative top-0 left-0 overflow-hidden  rounded-2xl py-8 w-full md:w-96 flex flex-col gap-4 border-[1px] h-[32rem]  border-black ${
          theme == "light" ? "text-black bg-slate-50" : "text-white bg-black"
        } `}
      >
        <h2
          className={`text-center font-semibold  text-4xl ${
            theme == "light" ? "text-black" : "text-white "
          }`}
        >
          {" "}
          Todo list{" "}
        </h2>
        <div className=" px-2 py-3 flex items-center gap-4 justify-between">
          <input
            type="text"
            value={input}
            onChange={handleInput}
            className="px-2 py-2 rounded-md border-[1px] border-black text-red-800 w-full"
            placeholder="Enter todos ..."
          />

          {editBtn ? (
            <button
              onClick={handleTodos}
              className="bg-red-500 text-2xl rounded-full p-2 text-white"
            >
              <MdEdit />
            </button>
          ) : (
            <button
              onClick={handleTodos}
              className="bg-indigo-600 text-2xl rounded-full p-2 text-white"
            >
              <IoIosAddCircleOutline />
            </button>
          )}
        </div>

        <ul className="w-full px-2 flex flex-col gap-2   overflow-x-hidden overflow-y-auto h-96 ">
          {todos.length == 0 ? (
            <li className="text-center text-gray-500 mt-10">
              🎉 Add your first todo!
            </li>
          ) : (
            todos.length > 0 &&
            todos.map(({ id, name, isCompleted }) => {
              return (
                <li
                  className={`px-3 flex items-center  justify-between py-3 shadow-2xl rounded-lg transition-transform duration-500 delay-150  linear  hover:translate-x-4   border-[3px]  ${
                    theme == "light" ? "border-transparent" : "border-white"
                  } ${id === editItem ? " border-blue-600 " : "border-black"}`}
                  key={id}
                >
                  <div className="flex items-center gap-2 ">
                    <span>
                      {isCompleted ? (
                        <MdCheckBox
                          onClick={() => handleCompleted(id)}
                          className={`text-2xl text-green-600 }`}
                        />
                      ) : (
                        <MdCheckBoxOutlineBlank
                          onClick={() => handleCompleted(id)}
                          className={`text-2xl `}
                        />
                      )}
                    </span>

                    {
                      <p
                        className={`
                        ${isCompleted ? "text-green-600 line-through" : ""} `}
                      >
                        {" "}
                        {name}{" "}
                      </p>
                    }
                  </div>
                  <div className="flex gap-4 ">
                    <button
                      className="p-2 bg-red-500 text-white rounded-full"
                      onClick={() => handleDelete(id)}
                    >
                      {" "}
                      <FaTrashAlt />{" "}
                    </button>
                    <button
                      className="p-2 bg-indigo-700 text-white rounded-full"
                      onClick={() => handleUpdate(id)}
                    >
                      {" "}
                      <FaEdit />{" "}
                    </button>
                  </div>
                </li>
              );
            })
          )}
        </ul>
        <div className=" w-full bg-slate-200  left-0  flex justify-around items-center ">
          <p className="text-black"> Total todos is : {todos.length}</p>
          <button
            onClick={() => setTodos([])}
            className="px-8 py-3 text-white bg-black rounded-md"
          >
            {" "}
            Delete All{" "}
          </button>
        </div>
      </main>
    </section>
  );
};

export default Todolist;
