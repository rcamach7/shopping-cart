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
      <h2>Shopping Cart</h2>
      <div className="cartContainer">
        {props.cart.map((cartCar, i) => {
          return (
            <CarCheckout key={i} car={cartCar} updateCart={props.updateCart} />
          );
        })}
      </div>

      {props.cart.length > 0 ? (
        <div className="cartSummary">
          <h3>Order Summery</h3>
          <p>
            ({props.cart.length}) Registration Fee(s){" "}
            {formatCurrency.format(750 * props.cart.length)}
          </p>
          <p>CA 7.5% Sales Tax: {formatCurrency.format(calculateSalesTax())}</p>
          <p>Total: {formatCurrency.format(calculateTotalPrice())}</p>
        </div>
      ) : null}
    </div>
  );
}
