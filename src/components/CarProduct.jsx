import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function CarProduct(props) {
  const { car } = props;

  const formatCurrency = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 0,
  });

  return (
    <div className="CarProduct">
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
            onClick={() => props.updateCart(car, true)}
          >
            Add To Cart
          </button>
          <button
            style={{ backgroundColor: "rgb(233,109,108)" }}
            onClick={() => props.updateCart(car, false)}
          >
            Remove From Cart
          </button>
        </div>
      </div>
    </div>
  );
}
