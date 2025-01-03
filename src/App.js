import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./pages/Home";
// import Sale from "./pages/Sale";
import Categories from "./pages/Categories";
import CategoryProduct from "./components/CategoryProduct";
import NavBar from "./components/NavBar";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/sale" element={<Sale />} /> */}
        <Route path="/Categories" element={<Categories />} />
        <Route path="/category/:categoryName" element={<CategoryProduct />} />
      </Routes>
    </>
  );
}

export default App;
