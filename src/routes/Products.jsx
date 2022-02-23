import "../scss/Products.scss";
import CarProduct from "../components/CarProduct";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faFacebook,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import {
  faArrowDown19,
  faArrowDown91,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

function Products(props) {
  const [filteredProducts, setFilteredProducts] = useState(props.cars);

  // If true, filters in ascending order, if false, filters in descending order.
  const filterProducts = (ascending) => {
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

  return (
    <main className="Products">
      <div className="filter-options">
        <p>Price filter: </p>
        <FontAwesomeIcon
          icon={faArrowDown91}
          className="filter-option"
          onClick={() => filterProducts(false)}
        />
        <FontAwesomeIcon
          icon={faArrowDown19}
          className="filter-option"
          onClick={() => filterProducts(true)}
        />
      </div>

      <div className="products-container">
        {filteredProducts.map((car, i) => (
          <CarProduct key={i} car={car} updateCart={props.updateCart} />
        ))}
      </div>

      <footer>
        <FontAwesomeIcon className="icon" icon={faGithub} />
        <FontAwesomeIcon className="icon" icon={faFacebook} />
        <FontAwesomeIcon className="icon" icon={faLinkedin} />
      </footer>
    </main>
  );
}

export default Products;
