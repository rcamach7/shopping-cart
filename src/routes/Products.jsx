import "../scss/Products.scss";
import data from "../data/cars.json";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

function Products() {
  const [cars] = useState(data);
  return (
    <main className="Products">
      {cars.map((car, i) => (
        <CarBox key={i} car={car} />
      ))}
    </main>
  );
}

function CarBox(props) {
  const { car } = props;

  const formatCurrency = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 0,
  });

  return (
    <div className="CarBox">
      <div
        className="imageContainer"
        style={{ backgroundImage: `url(${car.imageURL})` }}
      >
        <FontAwesomeIcon icon={faHeart} className="favoriteHeart" />
      </div>

      <div className="carInfo">
        <p className="yearAndMake">{`${car.year} ${car.make}`}</p>
        <p className="model">{car.model}</p>
        <p className="priceAndMileage">{`${formatCurrency.format(
          car.price
        )} : ${car.miles}`}</p>

        <div className="action-buttons">
          <button style={{ backgroundColor: "rgb(130,179,67)" }}>
            Add To Cart
          </button>
          <button style={{ backgroundColor: "rgb(233,109,108)" }}>
            Remove From Cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default Products;
