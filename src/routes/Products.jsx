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

function Products(props) {
  return (
    <main className="Products">
      <div className="filter-options">
        <p>Price filter: </p>
        <FontAwesomeIcon icon={faArrowDown19} className="filter-option" />
        <FontAwesomeIcon icon={faArrowDown91} className="filter-option" />
      </div>

      <div className="products-container">
        {props.cars.map((car, i) => (
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
