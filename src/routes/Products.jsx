import "../scss/Products.scss";
import CarProduct from "../components/CarProduct";
import Footer from "../components/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowDown19,
  faArrowDown91,
  faShoppingCart,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { Link } from "react-router-dom";

function Products(props) {
  const [filteredProducts, setFilteredProducts] = useState(props.cars);

  // If true, filters in ascending order, if false, filters in descending order.
  const sortByPrice = (ascending) => {
    const filtered = [...filteredProducts];
    if (ascending) {
      filtered.sort((a, b) => {
        if (a.price > b.price) {
          return 1;
        }
        if (a.price < b.price) {
          return -1;
        }
        return 0;
      });
    } else {
      filtered.sort((a, b) => {
        if (a.price < b.price) {
          return 1;
        }
        if (a.price > b.price) {
          return -1;
        }
        return 0;
      });
    }
    setFilteredProducts(filtered);
  };

  const filterByMake = (make) => {
    // If user selects show all cars, we skip any code below and set products to original value.
    if (make === "Show All") {
      setFilteredProducts(props.cars);
      return;
    }

    const updatedProducts = [...props.cars].filter((car) => {
      if (car.make !== make) {
        return false;
      }
      return car;
    });
    setFilteredProducts(updatedProducts);
  };

  return (
    <main className="Products">
      <div className="filter-options">
        <div className="options-price">
          <p>Sort by price: </p>
          <FontAwesomeIcon
            icon={faArrowDown91}
            className="filter-option"
            onClick={() => sortByPrice(false)}
          />
          <FontAwesomeIcon
            icon={faArrowDown19}
            className="filter-option"
            onClick={() => sortByPrice(true)}
          />
        </div>

        <div className="options-make">
          <p>Filter by make: </p>
          <select onChange={(e) => filterByMake(e.target.value)}>
            <option>Show All</option>
            {/* Creates a new set of non-repeated vehicle makes based on car inventory objects, and returns each as an option in the select dropdown box */}
            {[...new Set(props.cars.map((car) => car.make))].map(
              (uniqueMake, i) => {
                return <option key={i}>{uniqueMake}</option>;
              }
            )}
          </select>
        </div>
      </div>

      <div className="products-container">
        {filteredProducts.map((car, i) => (
          <CarProduct key={i} car={car} updateCart={props.updateCart} />
        ))}
      </div>

      <Link to="/checkout" className="checkout-container">
        <div className="badge">
          <FontAwesomeIcon icon={faShoppingCart} />
          {props.cart.length > 0 ? (
            <div className="cart-count">
              <div className="mini-badge">
                {props.cart.length > 0 ? props.cart.length : null}
              </div>
            </div>
          ) : null}
        </div>
      </Link>

      <Footer />
    </main>
  );
}

export default Products;
