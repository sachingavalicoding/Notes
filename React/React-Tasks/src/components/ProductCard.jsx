/* eslint-disable react/prop-types */



const ProductCard = ({product}) => {
  return (
    <article
    key={product.id}
    className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105"
  >
    <img
      src={product.image}
      alt={product.title}
      className="w-full h-48 object-cover"
    />
    <div className="p-4">
      <h3 className="text-xl font-semibold text-gray-800">{product.title}</h3>
      <p className="text-gray-500 text-sm my-2">{product.category}</p>
      <p className="text-lg font-bold text-gray-900">${product.price}</p>
      <button className="mt-4 w-full py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
        Add to Cart
      </button>
    </div>
  </article>
  )
}

export default ProductCard