import "./CarFooter.css";
import { FaInstagram, FaTiktok, FaFacebookF } from "react-icons/fa";
import { FiTwitter, FiYoutube } from "react-icons/fi";

function CarFooter() {
  return (
    <>
      <section className="footer-section">
        <div className="sec-one">
          <h1>Hello There</h1>
        </div>
        <div className="sec-two">
          <div className="sec-copy-two">
            <div className="icon-container">
              <FaInstagram />
            </div>
            <div className="icon-container">
              <FiTwitter />
            </div>
            <div className="icon-container">
              <FaTiktok />
            </div>
            <div className="icon-container">
              <FaFacebookF />
            </div>
            <div className="icon-container">
              <FiYoutube />
            </div>
          </div>
        </div>
        <div className="sec-three">&copy; CARS AND RIZWAN</div>
      </section>
    </>
  );
}

export default CarFooter;
