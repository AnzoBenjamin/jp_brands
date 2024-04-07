import { useState, useRef, useEffect } from "react";
import { createPortal } from "react-dom";
import imageOne from "../assets/1.jpg";
import imageTwo from "../assets/2.jpg";
import imageThree from "../assets/3.jpg";
import imageFour from "../assets/4.jpg";
import imageFive from "../assets/5.jpg";
import imageSix from "../assets/6.jpg";
import imageSeven from "../assets/7.jpg";
import imageEight from "../assets/8.jpg";
import imageNine from "../assets/9.jpg";
import imageTen from "../assets/10.jpg";
import imageEleven from "../assets/11.jpg";
import imageTwelve from "../assets/12.jpg";
import imageThirteen from "../assets/13.jpg";
import imageFourteen from "../assets/14.jpg";
import imageFifteen from "../assets/15.jpg";
import imageSixteen from "../assets/16.jpg";
import imageSeventeen from "../assets/17.jpg";
import imageEighteen from "../assets/18.jpg";
import imageNighteen from "../assets/19.jpg";
import imageTwenty from "../assets/20.jpg";
import imageTwentyOne from "../assets/21.jpg";
import imageTwentyTwo from "../assets/22.jpg";
import imageTwentyThree from "../assets/23.jpg";
import imageTwentyFour from "../assets/24.jpg";

import Reveal from "./Reveal";
import { motion, useInView, useAnimation } from "framer-motion";

const images = [
  imageOne,
  imageTwo,
  imageThree,
  imageFour,
  imageFive,
  imageSix,
  imageSeven,
  imageEight,
  imageNine,
  imageTen,
  imageEleven,
  imageTwelve,
  imageThirteen,
  imageFourteen,
  imageFifteen,
  imageSixteen,
  imageSeventeen,
  imageEighteen,
  imageNighteen,
  imageTwenty,
  imageTwentyOne,
  imageTwentyTwo,
  imageTwentyThree,
  imageTwentyFour,
];
const Portfolio = () => {
  const [isExpandedIndex, setIsExpandedIndex] = useState(-1); // -1 indicates none expanded initially
  const [isClicked, setIsClicked] = useState(false);
  const [imageStyles, setImageStyles] = useState({});

  const embedRefs = useRef<HTMLDivElement[]>([]);
  const imageRef = useRef(null);
  const isInView = useInView(imageRef, { once: true });
  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView]);
  const handleClick = (index: number) => {
    setIsClicked(true);
    setIsExpandedIndex(index === isExpandedIndex ? -1 : index); // Toggle based on clicked index
    const rect = embedRefs.current[index].getBoundingClientRect();
    const innerWidth = window.innerWidth;
    const innerHeight = window.innerHeight;
    setImageStyles({
      transform: `translateY(${
        innerHeight / 2 - rect.height / 2 - rect.top
      }px) translateX(${
        innerWidth / 2 - rect.width / 2 - rect.left
      }px) scale(1.7)`, // Adjust scaling as needed
    });
  };

  const handleOverlay = () => {
    setIsExpandedIndex(-1);
    setIsClicked(false);
  };
  const overlayElement = document.getElementById("overlay");
  return (
    <section id="portfolio" className="s-portfolio">
      <div className="row s-porfolio__top">
        <div className="column large-6 w-900-stack">
          <Reveal>
            <div className="section-title" data-num="03" data-aos="fade-up">
              <h3 className="h6">Recent Works</h3>
            </div>
          </Reveal>
        </div>
        <div className="column large-6 w-900-stack">
          <Reveal>
            <h1 className="display-1" data-aos="fade-up">
              Here are some of our projects we done lately. Feel free to check
              them out.
            </h1>
          </Reveal>
        </div>
      </div>
      <motion.div
        className="gallery"
        ref={imageRef}
        transition={{ staggerChildren: 0.15 }}
      >
        <div id="overlay"></div>

        {images.map((image, index) => {
          const isActive = index === isExpandedIndex; // Determine active state
          const defaultEffect = isClicked ? "is-not-active" : ""; // CSS class for default effect
          return (
            <motion.div
              key={index}
              className={`gallery__item ${isActive ? "is-expanded" : ""} ${
                !isActive ? defaultEffect : ""
              }`}
              variants={{
                hidden: { scale: 0.25 },
                visible: { scale: 1 },
              }}
              initial="hidden"
              animate={mainControls}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <>
                {isActive &&
                  overlayElement &&
                  createPortal(
                    <div className="overlay" onClick={handleOverlay}></div>,
                    overlayElement
                  )}
                <div
                  className={`embed ${isActive ? "is-active" : ""}`}
                  onClick={() => handleClick(index)}
                  ref={(el) =>
                    (embedRefs.current[index] = el as HTMLDivElement)
                  }
                  style={isActive ? imageStyles : {}}
                >
                  <img src={image} />
                </div>
              </>
            </motion.div>
          );
        })}
      </motion.div>
    </section>
  );
};

export default Portfolio;
