import { useEffect, useState, createContext, useMemo } from "react";

// eslint-disable-next-line react-refresh/only-export-components
export const ProductContext = createContext();

// eslint-disable-next-line react/prop-types
const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [fevItems, setFevItems] = useState([]);
  const [detailProductPage, setDetailProductPage] = useState(products[0]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getData = async () => {
      setLoading(true);
      try {
        const response = await fetch("https://dummyjson.com/products");
        const data = await response.json();
        setProducts(data.products);
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setLoading(false);
      }
    };

    getData();
  }, []);

  useEffect(() => {
    const savedCartItems = JSON.parse(localStorage.getItem("cartItems"));
    const savedFevItems = JSON.parse(localStorage.getItem("fevItems"));

    if (savedCartItems) {
      setCartItems(savedCartItems);
    }

    if (savedFevItems) {
      setFevItems(savedFevItems);
    }
  }, []);

  // Save cart and favorite items to localStorage whenever they change
  useEffect(() => {
    if (cartItems.length > 0) {
      localStorage.setItem("cartItems", JSON.stringify(cartItems));
    }
  }, [cartItems]);

  useEffect(() => {
    if (fevItems.length > 0) {
      localStorage.setItem("fevItems", JSON.stringify(fevItems));
    }
  }, [fevItems]);



  const contextValue = useMemo(
    () => ({
      products,
      cartItems,
      setCartItems,
      fevItems,
      setFevItems,
      detailProductPage,
      setDetailProductPage,
      loading,
    }),
    [products, cartItems, fevItems, detailProductPage, loading]
  );

  return (
    <ProductContext.Provider value={contextValue}>
      {children}
    </ProductContext.Provider>
  );
};

export default ProductProvider;
