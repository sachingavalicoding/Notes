/* eslint-disable react-refresh/only-export-components */
import { createContext, useEffect, useState } from "react";

export const ProductContext = createContext();

// eslint-disable-next-line react/prop-types
export const ProductContextProvider = ({ children }) => {

    const [products , setProducts ] = useState([]);
    const getData = async () => {
        try{
            const response = await fetch("https://fakestoreapi.com/products");
            const data = await response.json();
            setProducts(data);
            console.log(data)
        }catch(e){
            console.error(" Error in Fetching Data " + e);
        }
    }

    useEffect(() => {
        // only 1 time useEffect is excuted 
        getData();
    } ,[]);
  return (
    <ProductContext.Provider value={products}>
      {children}
    </ProductContext.Provider>
  );
};
