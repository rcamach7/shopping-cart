import "../scss/Products.scss";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Products(props) {
  return (
    <main className="Products">
      {props.cars.map((car, i) => (
        <CarBox key={i} car={car} updateCart={props.updateCart} />
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
          <button
            style={{ backgroundColor: "rgb(130,179,67)" }}
            onClick={() => props.updateCart(car.id, true)}
          >
            Add To Cart
          </button>
          <button
            style={{ backgroundColor: "rgb(233,109,108)" }}
            onClick={() => props.updateCart(car.id, false)}
          >
            Remove From Cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default Products;
