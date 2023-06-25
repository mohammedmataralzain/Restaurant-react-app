import SubHeading from "../../components/SubHeading";
import { AiOutlineInstagram, AiOutlineTwitter } from "react-icons/ai";
import { FaFacebookF } from "react-icons/fa";

import "./style.css";
const Footer = () => {
  return (
    <footer className="app__footer section__padding" id="home">
      <div className="app__footer-top">
        <div className="app__footer-col1">
          <h3 className="p__cormorant" style={{ fontSize: "2rem" }}>
            Contact Us
          </h3>
          <div>
            <p className="p__open-sans">9 W 53rd St, New York, NY 10019, USA</p>
            <p className="p__open-sans">+1 212-344-1230</p>
            <p className="p__open-sans">+1 212-555-1230</p>
          </div>
        </div>
        <div className="app__footer-col2">
          <h3 style={{ fontSize: "4rem" }}>Gerícht</h3>
          <SubHeading
            title="“The best way to find yourself is to lose yourself in the service of
          others.” "
          />

          <div className="app__footer-col2-icons">
            <FaFacebookF className="icon" />
            <AiOutlineTwitter className="icon" />
            <AiOutlineInstagram className="icon" />
          </div>
        </div>
        <div className="app__footer-col3">
          <h3 className="p__cormorant" style={{ fontSize: "2rem" }}>
            Working Hours
          </h3>
          <div>
            <p className="p__open-sans">Monday-Friday:</p>
            <p className="p__open-sans">08:00 am -12:00 am</p>
          </div>
          <div>
            <p className="p__open-sans">Saturday-Sunday:</p>
            <p className="p__open-sans">07:00 am -11:00 am</p>
          </div>
        </div>
      </div>
      <div className="app__footer-bottom">
        <p className="p__open-sans">
          {new Date().getFullYear()} Gerícht. All Rights reserved.
        </p>
          <span style={{fontFamily:"Bestermind",fontSize:"2rem"}}> By Mohammed Matar</span>
      </div>
    </footer>
  );
};

export default Footer;
