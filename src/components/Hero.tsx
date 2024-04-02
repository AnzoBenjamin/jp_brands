import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import heroBg from "../assets/hero-bg.jpg";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
const Hero = () => {
  return (
    <section id="hero" className="s-hero target-section">
      <div className="s-hero__bg" style={{ backgroundImage: `url(${heroBg})` }}>
        <div className="gradient-overlay"></div>
      </div>

      <div className="row s-hero__content">
        <div className="column">
            <h1>Hello.</h1>
          <div className="s-hero__content-about">

            <p>
              We are JP Extra Brands. We love <br />
              building great brands <br />& design experiences.
            </p>

            <footer>
              <div className="s-hero__content-social">
                <a href="https://www.facebook.com/jp.extra.brands/">
                  <FontAwesomeIcon
                    icon={faFacebook}
                    className="fab"
                    aria-hidden="true"
                  />
                </a>
                <a href="https://www.instagram.com/jpextra_brands/">
                  <FontAwesomeIcon
                    icon={faInstagram}
                    className="fab"
                    aria-hidden="true"
                  />
                </a>
                <a href="https://wa.me/+256777111200">
                  <FontAwesomeIcon
                    icon={faWhatsapp}
                    className="fab"
                    aria-hidden="true"
                  />
                </a>
                <a href="tel:+256705574060">
                  <FontAwesomeIcon icon={faPhone} className="fab" aria-hidden="true"/>
                </a>
              </div>
            </footer>
          </div>
        </div>
      </div>

      <div className="s-hero__scroll">
        <a href="#about" className="s-hero__scroll-link smoothscroll">
          Scroll Down
        </a>
      </div>
    </section>
  );
};

export default Hero;
