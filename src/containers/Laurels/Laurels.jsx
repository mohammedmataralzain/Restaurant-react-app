import "./style.css";
import SubHeading from "../../components/SubHeading";
import data from "../../constants/data";
import AwardCard from "../../components/AwordCard/AwardCard";
import images from "../../constants/images";

const Awards = () => {
  return (
    <section
      className="app__awards section__padding app__wrapper app__bg"
      id="awards"
    >
      <div className="app__wrapper_info">
        <SubHeading title="Awards & recognition" />
        <h1 className="headtext__cormorant">Our Laurels</h1>
        <div className="app__Laurels-awards">
          {data.awards.map((award, index) => (
            <AwardCard key={index + award.title} {...award} />
          ))}
        </div>
      </div>
      <div className="app__wrapper_img">
        <img src={images.laurels} alt="Laurels_img" title="Laurels img" />
      </div>
    </section>
  );
};

export default Awards;
