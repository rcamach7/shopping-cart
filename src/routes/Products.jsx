import "../scss/Products.scss";
import data from "../data/cars.json";
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
  return (
    <div className="CarBox">
      <div
        className="imageContainer"
        style={{ backgroundImage: `url(${car.imageURL})` }}
      ></div>

      <div className="carInfo">
        <p className="yearAndMake">{`${car.year} ${car.make}`}</p>
        <p className="model">{car.model}</p>
        <p className="priceAndMileage">{`$${car.price} * ${car.miles} miles`}</p>
      </div>
    </div>
  );
}

export default Products;
