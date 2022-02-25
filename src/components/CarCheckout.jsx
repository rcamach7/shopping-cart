import { faTrashCan } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function CarCheckout(props) {
  const formatCurrency = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 0,
  });

  const { car } = props;
  return (
    <div className="CarCheckout">
      <div className="carInfo">
        <div
          className="carImage"
          style={{ backgroundImage: `url(${car.imageURL})` }}
        ></div>

        <div className="carDetails">
          <p>{`${car.year} ${car.make}`}</p>
          <p>{car.model}</p>
          <p>{car.miles}</p>
        </div>

        <div className="carPrice">
          <p>{`${formatCurrency.format(car.price)}`}</p>
        </div>

        <button onClick={() => props.updateCart(car)}>
          <FontAwesomeIcon icon={faTrashCan} />
        </button>
      </div>
    </div>
  );
}
