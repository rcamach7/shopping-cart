import "../scss/Home.scss";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationDot,
  faScrewdriverWrench,
  faFileSignature,
} from "@fortawesome/free-solid-svg-icons";
import Footer from "../components/Footer";

function Home() {
  return (
    <main className="Home">
      <section className="home-preview">
        <h2>Hypercar Heaven</h2>
        <div className="preview-buttonContainer">
          <Link to="/products" className="preview-button">
            Explore Collection
          </Link>
        </div>
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

      <Footer />
    </main>
  );
}

export default Home;
