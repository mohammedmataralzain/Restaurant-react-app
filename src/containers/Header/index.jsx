import Button from "../../components/button";
import images from "../../constants/images";
import SubHeading from "../../components/SubHeading";

import "./style.css"

const Header = () => {
  return (
    <header className="app__header section__padding app__wrapper" id="home">
      <div className="app__wrapper_info">
        <SubHeading title="Chase the new Flavour"/>
        <h1 className="headtext__cormorant">The key to Fine dining</h1>
        <p className="p__open-sans app__wrapper_info-p">
          Sit tellus lobortis sed senectus vivamus molestie. Condimentum
          volutpat morbi facilisis quam scelerisque sapien. Et, penatibus
          aliquam amet tellus
        </p>
      <Button title="Explore Menu"/>
      </div>
      <div className="app__wrapper_img">
        <img src={images.welcome} alt="header_img" title="header img"/>
      </div>
    </header>
  );
};

export default Header;
