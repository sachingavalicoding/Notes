import { useContext } from "react";
import { ProductContext } from "../contexts/ProductProvider";
import Card from "./Card";

const ProductsLayout = () => {
  const { products } = useContext(ProductContext);

  return (
    <div className="w-full min-h-screen bg-slate-100 pt-16 ">
      <h1 className="text-3xl font-bold text-center mb-6">Our Products</h1>
      <ul className=" mt-6 w-full md:w-[90%] px-4 md:px-0 flex items-center flex-wrap justify-center gap-6 gap-y-16 mx-auto">
        {products.map((product) => (
          <li key={product.id}>
            <Card product={product} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductsLayout;
