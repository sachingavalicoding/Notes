import { useContext, useState, useEffect } from "react";
import { ProductContext } from "../contexts/ProductContext";
import ProductCard from "./ProductCard";

const ProductLayout = () => {
  const products = useContext(ProductContext);
  const [category, setCategory] = useState(""); 
  const [filterProducts, setFilterProducts] = useState(products); 

  const uniqueCategories = [...new Set(products.map((product) => product.category))];

  
  const handleTabs = (element) => {
    setCategory(element);
  };



  useEffect(() => {
  
    const filtered = products.filter(
      (product) =>
        (category ? product.category === category : true)
    );
    setFilterProducts(filtered); 
  }, [category,products]); 

  return (
    <>
      <h2 className="text-4xl font-bold text-center pt-5">Products</h2>

   

      {/* Tabs for categories */}
      <ul className="flex items-center flex-wrap w-full justify-center gap-4 px-4 pt-8">
        {uniqueCategories.map((element, index) => {
          return (
            <li
              className="px-6 uppercase cursor-pointer py-3 bg-slate-100 rounded-md text-gray-900 shadow-sm"
              key={index}
              onClick={() => handleTabs(element)}
            >
              {element}
            </li>
          );
        })}
      </ul>

      {/* Product Grid */}
      <div className="lg:w-[80%] w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 py-10 px-6 mx-auto">
        {filterProducts.map((product) => {
          return <ProductCard key={product.id} product={product} />;
        })}
      </div>
    </>
  );
};

export default ProductLayout;
