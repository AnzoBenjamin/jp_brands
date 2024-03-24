import imageOne from "../assets/1.jpg";
import imageTwo from "../assets/2.jpg";
import imageThree from "../assets/3.jpg";
import imageFour from "../assets/4.jpg";
import imageFive from "../assets/5.jpg";
import imageSix from "../assets/6.jpg";
import imageSeven from "../assets/7.jpg";
import imageEight from "../assets/8.jpg";

const Portfolio = () => {
  return (
    <section id="portfolio" className="s-portfolio">
      <div className="row s-porfolio__top">
        <div className="column large-6 w-900-stack">
          <div className="section-title" data-num="03" data-aos="fade-up">
            <h3 className="h6">Recent Works</h3>
          </div>
        </div>
        <div className="column large-6 w-900-stack">
          <h1 className="display-1" data-aos="fade-up">
            Here are some of our projects we done lately. Feel free to check
            them out.
          </h1>
        </div>
      </div>

      <div className="s-portfolio__list collapse">
        <div data-aos="fade-up">
          <div className="folio-item">
            <img src={imageOne} alt="" />
          </div>
        </div>
        <div data-aos="fade-up">
          <div className="folio-item">
            <img src={imageTwo} alt="" />
          </div>
        </div>
        <div className="column" data-aos="fade-up">
          <div className="folio-item">
            <img src={imageThree} alt="" />
          </div>
        </div>
        <div className="column" data-aos="fade-up">
          <div className="folio-item">
            <img src={imageFour} alt="" />
          </div>
        </div>
        <div className="column" data-aos="fade-up">
          <div className="folio-item">
            <img src={imageFive} alt="" />
          </div>
        </div>
        <div className="column" data-aos="fade-up">
          <div className="folio-item">
            <img src={imageSix} alt="" />
          </div>
        </div>
        <div className="column" data-aos="fade-up">
          <div className="folio-item">
            <img src={imageSeven} alt="" />
          </div>
        </div>
        <div className="column" data-aos="fade-up">
          <div className="folio-item">
            <img src={imageEight} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
