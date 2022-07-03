import ProductList from "./components/ProductList";
import ProductDetail from "./components/ProductDetail";
import Home from "./components/Home";
import Nav from "./components/Nav";
import { Route, Routes } from "react-router-dom";
export default function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/ProductList" element={<ProductList />}></Route>
        <Route path="/ProductList/:id" element={<ProductDetail />}></Route>
      </Routes>
    </div>
  );
}
