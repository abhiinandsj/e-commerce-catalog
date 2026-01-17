import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import ProductList from "./ProductList";
import AddProduct from "./AddProduct";
import EditProduct from "./EditProduct";

function App() {
  return (
    <BrowserRouter>
  <div className="page-container">
    
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/admin" element={<ProductList admin={true} />} />
        <Route path="/add" element={<AddProduct />} />
        <Route path="/edit/:id" element={<EditProduct />} />
        <Route path="/user" element={<ProductList admin={false} />} />
      </Routes>
  </div>
</BrowserRouter>

  );
}

export default App;
