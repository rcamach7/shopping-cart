import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Products from "./Products";
import Navbar from "../components/Navbar";
import data from "../data/cars.json";
import Checkout from "./Checkout";
import { useState } from "react";

export default function RouteSwitch() {
  const [cars] = useState(data);
  const [cart, setCart] = useState([
    {
      id: 1,
      make: "Lexus",
      year: "1999",
      model: "LS400",
      miles: "100k Miles",
      price: 5000,
      imageURL:
        "https://res.cloudinary.com/de2ymful4/image/upload/v1645224462/shopping-cart-project/car1_xbopkt.jpg",
    },
    {
      id: 2,
      make: "Lexus",
      year: "2011",
      model: "LFA",
      miles: "800 Miles",
      price: 500000,
      imageURL:
        "https://res.cloudinary.com/de2ymful4/image/upload/v1645224462/shopping-cart-project/car2_knz6go.jpg",
    },
  ]);

  const updateCart = (car, toAdd) => {
    // If field is passed in as true, the update function is to add to cart.
    // User can only have 1 quantity of each car added to cart.
    if (toAdd) {
      let alreadyAdded = false;
      cart.forEach((cartCar) => {
        if (cartCar.id === car.id) {
          alreadyAdded = true;
        }
      });
      if (!alreadyAdded) {
        const updatedCart = [...cart];
        updatedCart.push(car);
        setCart(updatedCart);
      }
    } else {
      let indexToDelete = -1;
      cart.forEach((cartCar, i) => {
        if (cartCar.id === car.id) {
          indexToDelete = i;
        }
      });
      if (indexToDelete !== -1) {
        const updatedCart = [...cart];
        updatedCart.splice(indexToDelete, 1);
        setCart(updatedCart);
      }
    }
  };

  return (
    <BrowserRouter>
      <Navbar numItems={cart.length} />
      <Routes>
        <Route path="/shopping-cart" element={<Home />} />
        <Route
          path="/products"
          element={<Products cars={cars} updateCart={updateCart} cart={cart} />}
        />
        <Route
          path="/checkout"
          element={<Checkout cars={cars} cart={cart} updateCart={updateCart} />}
        />
      </Routes>
    </BrowserRouter>
  );
}
