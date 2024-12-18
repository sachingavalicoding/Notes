import ProductLayout from "./components/ProductLayout";
import Task04 from "./components/Task04";
import { ProductContextProvider } from "./contexts/ProductContext";
import Task01 from "./components/Task01";
import Task02 from "./components/Task02";
import Task03 from "./components/Task03";
import Task05 from "./components/Task05";
const App = () => {
  return (
    <> 
      <div className="app">
      <Task01 />
       <Task02 />
       <Task03 />
       <Task04 />
       <Task05 />
      </div>
      <ProductContextProvider>
        <ProductLayout />
      </ProductContextProvider>
    </>
  );
};

export default App;
