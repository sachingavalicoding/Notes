import { useContext, useState } from "react";
import { motion } from "framer-motion";
import { FaShoppingCart, FaHeart, FaShareAlt, FaPlus } from "react-icons/fa";
import { ProductContext } from "../contexts/ProductProvider";
import { CgClose } from "react-icons/cg";
import { useNavigate } from "react-router-dom";

/* eslint-disable react/prop-types */
const Card = ({ product }) => {
  const { setCartItems, setFevItems, setDetailProductPage } =
    useContext(ProductContext);
  const { id, title, price, rating, thumbnail, brand, category } = product;
  const [showIcons, setShowIcons] = useState(false);
  const navigate = useNavigate();
  const handlePlusClick = () => {
    setShowIcons(!showIcons);
  };
  const handleAddToCart = (product) => {
    setCartItems((prev) => [...prev, product]);
    setShowIcons(!showIcons);
  };
  const handleAddToFev = (product) => {
    setFevItems((prev) => [...prev, product]);
    setShowIcons(!showIcons);
  };
  const showMorePage = () => {
    setDetailProductPage(product);
    navigate("/details");
  };
  return (
    <div
      key={id}
      className="relative w-80 h-96 bg-white shadow-lg rounded-lg overflow-hidden group cursor-pointer"
    >
      {/* Image and Basic Info */}
      <div  className="absolute inset-0 flex flex-col">
        <img
         onClick={showMorePage}
          src={thumbnail}
          alt={title}
          className="w-full h-[65%] object-cover"
        />
        <div className="p-4">
          <h2 className="text-lg font-semibold text-gray-800 truncate">
            {title}
          </h2>
          <p className="text-sm text-gray-600">{brand}</p>
          <p className="text-sm text-gray-500">Category: {category}</p>
          <div className="flex items-center justify-between mt-4">
            <span className="text-lg font-semibold text-green-600">
              ${price}
            </span>
            <span className="text-sm text-yellow-500">⭐ {rating}</span>
          </div>
        </div>
      </div>

      {/* Plus Icon (Click to show dropdown) */}
      <motion.button
        whileTap={{ scale: 0.9 }}
        onClick={handlePlusClick}
        className="absolute bottom-14 right-4 text-2xl text-gray-600 hover:text-gray-800"
      >
        <FaPlus />
      </motion.button>

      {/* Dropdown for Cart, Favorite, and Share Icons */}
      {showIcons && (
        <motion.div
          initial={{ opacity: 0, scale: 0.7 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.7 }}
          transition={{ duration: 0.3 }}
          className="absolute bottom-14 right-4 bg-white shadow-md rounded-lg p-3 flex flex-col gap-2"
        >
          <motion.button
            whileTap={{ scale: 0.9 }}
            className="flex items-center text-blue-500 hover:text-blue-600 text-lg"
            onClick={() => handleAddToCart(product)}
          >
            <FaShoppingCart className="mr-2" />
            Add to Cart
          </motion.button>
          <motion.button
            whileTap={{ scale: 0.9 }}
            className="flex items-center text-red-500 hover:text-red-600 text-lg"
            onClick={() => handleAddToFev(product)}
          >
            <FaHeart className="mr-2" />
            Add to Favorites
          </motion.button>
          <motion.button
            whileTap={{ scale: 0.9 }}
            className="flex items-center text-green-500 hover:text-green-600 text-lg"
            onClick={() => console.log("Share this Product")}
          >
            <FaShareAlt className="mr-2" />
            Share
          </motion.button>
          <motion.button
            whileTap={{ scale: 0.9 }}
            className="flex items-center text-slate-950 hover:text-black text-lg"
            onClick={handlePlusClick}
          >
            <CgClose className="mr-2" />
            Close
          </motion.button>
        </motion.div>
      )}
    </div>
  );
};

export default Card;
