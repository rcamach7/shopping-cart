import "../scss/Home.scss";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationDot,
  faScrewdriverWrench,
  faFileSignature,
} from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faFacebook,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

function Home() {
  return (
    <main className="Home">
      <section className="home-preview">
        <h2>THE 2022 LX</h2>
        <Link to="/products" className="preview-button">
          Browse Products
        </Link>
      </section>

      <section className="home-options">
        <div>
          <FontAwesomeIcon className="icon" icon={faScrewdriverWrench} />
          <span>Build Your Own</span>
        </div>
        <div>
          <FontAwesomeIcon className="icon" icon={faLocationDot} />
          <span>Find Dealers</span>
        </div>
        <div>
          <FontAwesomeIcon className="icon" icon={faFileSignature} />
          <span>Leasing Options</span>
        </div>
      </section>

      <footer>
        <p>Follow me on: </p>
        <FontAwesomeIcon className="icon" icon={faGithub} />
        <FontAwesomeIcon className="icon" icon={faFacebook} />
        <FontAwesomeIcon className="icon" icon={faLinkedin} />
      </footer>
    </main>
  );
}

export default Home;
