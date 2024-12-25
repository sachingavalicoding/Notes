import { IoMdAdd } from "react-icons/io";
import { FiMinus } from "react-icons/fi";
const Counter = () => {
  return (
    <section className="w-full h-screen grid place-items-center">
        <main className="w-96  flex gap-6 items-center justify-between ">
            <IoMdAdd className="text-7xl shadow-md font-bold text-white" />
            <span className="text-[8rem] font-light text-white"> 1 </span>
            <FiMinus className="text-7xl shadow-sm  rounded-full  font-bold text-white" />
        </main>
    </section>
  )
}

export default Counter