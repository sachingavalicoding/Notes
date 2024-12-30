import { useContext } from "react";
import { IoMdHeart} from "react-icons/io";
import { Link } from "react-router-dom";
import { ProductContext } from "../contexts/ProductProvider";
import { IoCart } from "react-icons/io5";
import { BiSolidHome } from "react-icons/bi";


const Navbar = () => {

  const {cartItems , fevItems } = useContext(ProductContext);
  return (
    <nav className="w-full fixed top-0 py-4 left-0 flex items-center justify-between px-4 md:px-10 bg-slate-950 shadow-lg z-20">
      <Link to={"/"} className="text-xl text-white font-light"> 
        Context Api Task 
      </Link>
      <div className="flex items-center gap-4 text-xl text-white">

      <Link to={"/"} className="text-xl text-white font-light"> 
        <BiSolidHome />
      </Link>
        <Link to={"/cart"} className="relative"> 
          <IoCart/>
          {cartItems.length > 0 && (
            <span className="absolute bottom-3 left-3 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
              {cartItems.length}
            </span>
          )}
        </Link>
        <Link to={"/fev"} className="relative">
          <IoMdHeart />
          {fevItems.length > 0 && (
            <span className="absolute bottom-3 left-3 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
              {fevItems.length}
            </span>
          )}
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;