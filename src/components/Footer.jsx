import "../scss/Footer.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faFacebook,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
  return (
    <div className="Footer">
      <form
        action=""
        className="subscribe-form"
        onSubmit={(e) => e.preventDefault}
      >
        <h3>Join Our Family</h3>
        <p>Get alerted whenever new inventory drops!</p>
        <div className="input-container">
          <input type="text" />
          <input type="submit" value="Subscribe" className="submit-email" />
        </div>
      </form>

      <div className="company-links">
        <div className="links-details">
          <h4>iLusso</h4>
          <p>About us</p>
          <p>FAQ</p>
        </div>
        <div className="links-socials">
          <h4>Contact Us</h4>
          <p>Github</p>
          <p>Facebook</p>
        </div>
      </div>
    </div>
  );
}
