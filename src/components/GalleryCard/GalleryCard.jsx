import { AiOutlineInstagram } from "react-icons/ai";
import "./style.css";
// eslint-disable-next-line react/prop-types
const GalleryCard = ({ img }) => {
  return (
    <div className="app__GalleryCard">
      <div className="app__GalleryCard-overlay">
        <img src={img} />
        <div className="app__GalleryCard-icon">
          <AiOutlineInstagram color="white" fontSize={35} />
        </div>
      </div>
    </div>
  );
};

export default GalleryCard;
