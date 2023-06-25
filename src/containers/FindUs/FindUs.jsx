import images from "../../constants/images";
import Button from "../../components/button";
import SubHeading from "../../components/SubHeading";
const FindUs = () => {
  return (
    <section className="app__header section__padding app__wrapper" id="home">
      <div className="app__wrapper_info">
        <SubHeading title="Contact" />
        <h1 className="headtext__cormorant">Find Us</h1>
        <p className="p__open-sans app__wrapper_info-p">
          Lane Ends Bungalow, Whatcroft Hall Lane, Rudheath, CW9 7SG
        </p>
        <p className="p__open-sans">Mon - Fri: 10:00 am - 02:00 am </p>
        <p className="p__open-sans"  style={{margin: "1.5rem 0 3rem 0"}}>Sat - Sun: 10:00 am - 03:00 am </p>
        <Button title="Visit Us" />
      </div>
      <div className="app__wrapper_img">
        <img src={images.findus} alt="findus_img" title="findus img" />
      </div>
    </section>
  );
};

export default FindUs;
