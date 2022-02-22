import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Products from "./Products";
import Navbar from "../components/Navbar";
import data from "../data/cars.json";
import { useState } from "react";

export default function RouteSwitch() {
  const [cars] = useState(data);
  const [cart, setCart] = useState([]);

  const updateCart = (carId, toAdd) => {
    // If field is passed in as true, the update function is to add to cart.
    // User can only have 1 quantity of each car added to cart.
    if (toAdd) {
      let alreadyAdded = false;
      cart.forEach((cartCarId) => {
        if (cartCarId === carId) {
          alreadyAdded = true;
        }
      });
      if (!alreadyAdded) {
        const updatedCart = [...cart];
        updatedCart.push(carId);
        setCart(updatedCart);
      }
    } else {
      if (!(cart.indexOf(carId) === -1)) {
        const updatedCart = [...cart];
        let indexToRemove = updatedCart.indexOf(carId);
        updatedCart.splice(indexToRemove, 1);
        setCart(updatedCart);
      }
    }
  };

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/products"
          element={<Products cars={cars} updateCart={updateCart} cart={cart} />}
        />
      </Routes>
    </BrowserRouter>
  );
}
