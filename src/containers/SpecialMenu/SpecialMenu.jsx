import "./style.css";

import images from "../../constants/images";
import data from "../../constants/data";


import Button from"../../components/button";
import SubHeading from "../../components/SubHeading";
import MenuItem from "../../components/MenuItem/MenuItem";
const SpecialMenu = () => {
  return (
    <div className="app__SpecialMenu section__padding">
      <div className="app__SpecialMenu-title">
        <SubHeading title="Menu that fits you palatte" />
        <p className="headtext__cormorant">Today’s Special</p>
      </div>

      <div className="app__SpecialMenu-items">
        <div className="app__SpecialMenu-Wine">
          <h2 className="flex__center p__cormorant">Wine & Beer</h2>
          {data.wines.map((item,index) => (
            <MenuItem key={item.title+index} {...item} />
          ))}
        </div>
        <div className="app__SpecialMenu-img flex__center">
          <img src={images.menu} alt="SpecialMenu image" title="image" />
        </div>
        <div className="app__SpecialMenu-Cocktails">
          <h2 className="flex__center p__cormorant">Cocktails</h2>

          {data.cocktails.map((item,index) => (
            <MenuItem key={item.title+index} {...item} />
          ))}
        </div>
      </div>
      <div className="flex__center">
      <Button title="View More"/>
      </div>
    </div>
  );
};

export default SpecialMenu;
