import { useState } from "react";

import "./style.css";

import images from "../../constants/images";

import { GiHamburgerMenu } from "react-icons/gi";
import { MdOutlineRestaurantMenu } from "react-icons/md";
const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <nav className="app__navbar">
      <div className="app__navbar-logo">
        <img src={images.gericht} alt="app logo" title="logo" />
      </div>

      <ul className="app__navbar-links">
        <li className="p__open-sans">
          <a href="#Home">Home</a>
        </li>
        <li className="p__open-sans">
          <a href="#aboutUs">About Us</a>
        </li>
        <li className="p__open-sans">
          <a href="#Subscribe">Subscribe</a>
        </li>
        <li className="p__open-sans">
          <a href="#Chef">Chef</a>
        </li>
        <li className="p__open-sans">
          <a href="#intro">Intro</a>
        </li>
      </ul>

      <div className="app__navbar-login">
        <a className="p__open-sans" href="#login">
          Log in / registration
        </a>
        <div></div>
        <a className="p__open-sans" href="#bookTable">
          book table
        </a>
      </div>

      <div className="app__navbar-smallScreen">
        <GiHamburgerMenu
          color="#fff"
          fontSize={45}
          onClick={() => setToggle(true)}
        />
        {toggle && (
          <div className="app__navbar-overlay slide-bottom flex__center">
            <MdOutlineRestaurantMenu
              fontSize={50}
              onClick={() => setToggle(false)}
              className="overlay-close-screen"
            />
            <ul>
              <li className="p__open-sans">
                <a href="#Home">Home</a>
              </li>
              <li className="p__open-sans">
                <a href="#aboutUs">About Us</a>
              </li>
              <li className="p__open-sans">
                <a href="#Subscribe">Subscribe</a>
              </li>
              <li className="p__open-sans">
                <a href="#Chef">Chef</a>
              </li>
              <li className="p__open-sans">
                <a href="#intro">Intro</a>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
