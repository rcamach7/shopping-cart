import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./routes/Home";
import Products from "./routes/Products";
import Navbar from "./components/Navbar";

const root = document.getElementById("root");
ReactDOM.render(
  <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/products" element={<Products />} />
    </Routes>
  </BrowserRouter>,
  root
);
