import "../scss/Checkout.scss";
import CarCheckout from "../components/CarCheckout";

export default function Checkout(props) {
  const calculateSalesTax = () => {
    let salesTax = 0;
    props.cart.forEach((car) => {
      salesTax += car.price * 0.075;
    });
    return salesTax;
  };

  // Assumes 7.5% sales tax, 750 per vehicle registration fees plus the price of the car.
  const calculateTotalPrice = () => {
    let total = 0;
    props.cart.forEach((car) => {
      total += car.price;
    });
    total += calculateSalesTax() + 750 * props.cart.length;
    return total;
  };

  const formatCurrency = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 0,
  });

  return (
    <div className="Checkout">
      <h3 className="site-title">View And Edit Cart</h3>
      <div className="items-container">
        {props.cart.map((cartCar, i) => {
          return (
            <CarCheckout key={i} car={cartCar} updateCart={props.updateCart} />
          );
        })}
      </div>

      {props.cart.length > 0 ? (
        <div className="cart-summary">
          <div className="summary-details">
            <h3>Order Details</h3>
            <p>
              ({props.cart.length}) Registration Fee(s){" "}
              {formatCurrency.format(750 * props.cart.length)}
            </p>
            <p>
              CA 7.5% Sales Tax: {formatCurrency.format(calculateSalesTax())}
            </p>
            <p className="details-total">
              Total: {formatCurrency.format(calculateTotalPrice())}
            </p>
            <button>Purchase</button>
          </div>
        </div>
      ) : null}
    </div>
  );
}
