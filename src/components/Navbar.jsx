import "../scss/Navbar.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";
import { useRef } from "react";

function Navbar() {
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
          <FontAwesomeIcon icon={faBars} />
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
            Browse Products
          </Link>
          <li className="dropDown-item" onClick={toggleDropDown}>
            About Page
          </li>
          <li className="dropDown-item" onClick={toggleDropDown}>
            My Cart
          </li>
        </ul>
      </nav>
    </nav>
  );
}

export default Navbar;
