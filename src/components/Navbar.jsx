import "../scss/Navbar.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import logo from "../assets/logo.svg";
import { Link } from "react-router-dom";
import { useRef } from "react";

function Navbar(props) {
  const dropDownRef = useRef(null);

  const toggleDropDown = () => {
    const displayValue = dropDownRef.current.style.display;
    if (displayValue === "" || displayValue === "none") {
      dropDownRef.current.style.display = "block";
    } else {
      dropDownRef.current.style.display = "none";
    }
  };

  return (
    <nav className="Navbar">
      <ul>
        <Link to="/" className="navbar-logo">
          <img src={logo} alt="" />
        </Link>
        <li className="navbar-toggleSubmenu" onClick={toggleDropDown}>
          <FontAwesomeIcon icon={faBars} className="hamburger-icon" />
          {props.numItems > 0 ? (
            <div className="cart-count">
              <div className="badge">
                {props.numItems > 0 ? props.numItems : null}
              </div>
            </div>
          ) : null}
        </li>
      </ul>

      <nav ref={dropDownRef} className="dropDown">
        <ul>
          <Link
            to="/"
            className="dropDown-item"
            style={{ borderTop: "solid grey 1px" }}
            onClick={toggleDropDown}
          >
            Homepage
          </Link>
          <Link
            to="/products"
            className="dropDown-item"
            onClick={toggleDropDown}
          >
            Browse Collection
          </Link>
          <Link
            to="/checkout"
            className="dropDown-item"
            onClick={toggleDropDown}
          >
            My Cart
          </Link>
        </ul>
      </nav>
    </nav>
  );
}

export default Navbar;
