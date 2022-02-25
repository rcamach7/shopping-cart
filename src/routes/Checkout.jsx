import "../scss/Checkout.scss";
import CarCheckout from "../components/CarCheckout";
import {
  faCcVisa,
  faCcApplePay,
  faCcDiscover,
  faCcMastercard,
  faCcAmazonPay,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";

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
        <div className="cart-summary-container">
          <div className="summary-details">
            <h3>Order Details</h3>
            <div className="details-items">
              <p>({props.cart.length}) Registration Fee(s)</p>
              <span>{formatCurrency.format(750 * props.cart.length)}</span>
            </div>
            <div className="details-items">
              <p>CA 7.5% Sales Tax:</p>
              <span>{formatCurrency.format(calculateSalesTax())}</span>
            </div>
            <div className="details-total">
              Total: {formatCurrency.format(calculateTotalPrice())}
            </div>
            <button
              onClick={() => alert("Thank you, your order has been placed")}
            >
              Purchase
            </button>

            <div className="payments-accepted">
              <p>Payments Accepted</p>
              <FontAwesomeIcon icon={faCcVisa} />
              <FontAwesomeIcon icon={faCcApplePay} />
              <FontAwesomeIcon icon={faCcDiscover} />
              <FontAwesomeIcon icon={faCcMastercard} />
              <FontAwesomeIcon icon={faCcAmazonPay} />
            </div>
          </div>
        </div>
      ) : (
        <div className="empty-cart">
          <div className="continue-shopping">
            <p>Oops, looks like your cart is empty!</p>
            <Link className="products-link" to="/products">
              Continue shopping!
            </Link>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
}
