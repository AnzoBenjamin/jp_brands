import { useState, useEffect, useRef } from "react";
import logo from "../assets/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMailBulk } from "@fortawesome/free-solid-svg-icons";
const Header = () => {
  const stickyRef = useRef<HTMLDivElement | null>(null);
  const [isClicked, setIsClicked] = useState(false);
  const [offset, setOffset] = useState(0);
  const [sticky, setSticky] = useState(false);

  useEffect(() => {
    if (!stickyRef?.current) {
      return;
    }
    setOffset(stickyRef.current.offsetTop);
  }, [stickyRef, setOffset]);

  useEffect(() => {
    const handleScroll = () => {
      if (!stickyRef.current) {
        return;
      }
      setSticky(window.scrollY > offset);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [setSticky, stickyRef, offset]);

  return (
    <header className={`s-header ${sticky ? "sticky" : ""}`} ref={stickyRef}>
      <div className="s-header__logo">
        <a href="index.html">
          <img src={logo} alt="Homepage" />
        </a>
      </div>

      <div className={`${isClicked ? "menu-is-open" : ""} s-header__content `}>
        <nav className="s-header__nav-wrap">
          <ul className="s-header__nav">
            <li>
              <a className="smoothscroll" href="#hero" title="Intro">
                Home
              </a>
            </li>
            <li>
              <a className="smoothscroll" href="#about" title="About">
                About
              </a>
            </li>
            <li>
              <a className="smoothscroll" href="#services" title="Services">
                Services
              </a>
            </li>
            <li>
              <a className="smoothscroll" href="#portfolio" title="Works">
                Works
              </a>
            </li>
          </ul>
        </nav>

        <a href="mailto:#0" className="btn btn--primary btn--small">
          <FontAwesomeIcon icon={faMailBulk} />
          Get In Touch
        </a>
      </div>

      <a
        className={`s-header__menu-toggle ${isClicked ? "is-clicked" : ""}`}
        href="#0"
        onClick={() => setIsClicked(!isClicked)}
      >
        <span>Menu</span>
      </a>
    </header>
  );
};

export default Header;
