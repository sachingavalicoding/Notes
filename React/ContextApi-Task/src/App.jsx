import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProductsLayout from "./components/ProductsLayout";
import ProductProvider from "./contexts/ProductProvider";
import CartItems from "./components/CartItems";
import FevItems from "./components/FevItems";
import Navbar from "./components/Navbar";
import DetailProductPage from "./components/DetailProductPage";
const App = () => {
  return (
    <ProductProvider>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<ProductsLayout />} />
          <Route path="/cart" element={<CartItems />} />
          <Route path="/fev" element={<FevItems />} />
          <Route path="/details" element={<DetailProductPage />} />
        </Routes>
      </BrowserRouter>
    </ProductProvider>
  );
};

export default App;
