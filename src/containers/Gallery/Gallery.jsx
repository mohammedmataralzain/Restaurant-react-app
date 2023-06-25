import GalleryCard from "../../components/GalleryCard/GalleryCard";
import SubHeading from "../../components/SubHeading";
import "./style.css";
import Button from "../../components/button";
import images from "../../constants/images";
// import images from "../../constants/images";
const Gallery = () => {
  return (
    <div className="app__gallery">
      <div className="app__gallery-info">
        <SubHeading title="Instagram" />
        <h1 className="headtext__cormorant" style={{ fontSize: "30px" }}>
          Photo Gallery
        </h1>
        <p className="p__open-sans" style={{ color: "#AAAAAA" }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat
          mattis ipsum turpis elit elit scelerisque egestas mu.
        </p>
        <Button title="View More" />
      </div>
        <div className="app__gallery_img">
          <GalleryCard img={images.gallery01} />
          <GalleryCard img={images.gallery03} />
          <GalleryCard img={images.gallery02} />
        </div>
    </div>
  );
};

export default Gallery;
