import { useContext } from "react";
import { ProductContext } from "../contexts/ProductProvider";
import Card from "./Card";

const FevItems = () => {
  const { fevItems , setFevItems} = useContext(ProductContext);
  const clearAllData = () => {
    setFevItems([]);
  }
  return (
    <div className="w-full min-h-screen bg-slate-100 pt-16 relative">
        <div className="flex w-full items-center justify-around mt-5 relative">
    
    <button
      onClick={clearAllData}
      className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded top-10 z-10 right-4 absolute"
    >
      {" "}
      Clear All Data{" "}
    </button>
   
     <h1 className="text-xl lg:text-3xl font-bold  ">Favorite Items </h1>
     <p className="text-xl lg:text-3xl font-bold "> Total : {fevItems.length}</p>
     </div>
      <ul className="mt-6 w-full md:w-[90%] px-4 md:px-0 flex items-center flex-wrap justify-center gap-6 gap-y-16 mx-auto">
        {fevItems.map((product) => (
          <li key={product.id}>
            <Card product={product} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FevItems;
