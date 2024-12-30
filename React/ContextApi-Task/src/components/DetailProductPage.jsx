import { useContext} from "react";
import { ProductContext } from "../contexts/ProductProvider";

const DetailProductPage = () => {
  const { detailProductPage, products , setCartItems ,setFevItems } = useContext(ProductContext);
  const { thumbnail, title, brand, category, price, description, rating } =
    detailProductPage;

  // Find related products (e.g., by category)
  const relatedProducts = products.filter(
    (product) => product.category === category && product.id !== detailProductPage.id
  );

  const addToCart = (product) => {
    setCartItems((prevItems ) => [product , ...prevItems])
  }
  const addToFev = (product) => {
    setFevItems((prevItems ) => [product , ...prevItems])
  }



  return (
    <div className="container mx-auto py-16 ">
      <div className="grid grid-cols-1 justify-center lg:grid-cols-4 gap-8">
        <div className="lg:col-span-2">
          <img
            src={thumbnail}
            alt={title}
            className="w-full h-[70%] object-cover rounded-lg" // Set height to 'full'
          />
        </div>
        <div className="lg:col-span- px-3">
          <h1 className="text-3xl font-bold mb-4">{title}</h1>
          <p className="text-gray-600 mb-4">{brand}</p>
          <p className="text-gray-500 mb-4">Category: {category}</p>
          <p className="text-gray-700 mb-4">{description}</p>
          <div className="flex items-center mb-4">
            <span className="text-2xl font-semibold text-green-500">
              ${price}
            </span>
            <span className="text-sm text-yellow-500 ml-4">
              ⭐ {rating}
            </span>
          </div>
         <div className="flex items-center w-full gap-4 ">
         <button onClick={() => addToCart(detailProductPage)} className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
            Add to Cart
          </button>
          <button onClick={() => addToFev(detailProductPage)} className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded">
            Add to Favorite 
          </button>
         </div>
        </div>
      </div>

      <div className="mt-10 px-3">
        <h2 className="text-2xl font-bold mb-4">Related Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {relatedProducts.slice(0, 4).map((product) => (
            <div key={product.id} className="border border-gray-200 rounded-lg overflow-hidden">
              <img
                src={product.thumbnail}
                alt={product.title}
                className="w-full h-40 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold">{product.title}</h3>
                <span className="text-gray-600">${product.price}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DetailProductPage;