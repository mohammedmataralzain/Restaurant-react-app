import images from "../../constants/images";
import SubHeadig from "../../components/SubHeading";
import "./style.css"
const Chef = () => {
  return (
    <div className="app__Chef section__padding  app__bg app__wrapper" id="Chef">
      <div className="app__Chef-img app__wrapper_img">
        <img src={images.chef} alt="img chef" title="img chef" />
      </div>
      <div className="app__Chef-details app__wrapper_info">
        <SubHeadig title="Chef’s Word" />
        <h2 className="headtext__cormorant">What we believe in</h2>
        <div className="">
        <p className="app__Chef-content p__open-sans">
         <span style={{fontFamily:"initial"}}> “ </span>Lorem ipsum dolor sit amet, consectetur adipiscing elit auctor sit .
          auctor sit iaculis in arcu. Vulputate nulla lobortis mauris eget sit.
          Nulla scelerisque scelerisque congue ac consequat, aliquam molestie
          lectus eu. Congue iaculis integer curabitur semper sit nunc.
        </p>
        </div>
        <p className="headtext__cormorant"  style={{fontSize:"32px"}}>Kevin Luo</p>
        <p className="p__open-sans" style={{color:"#AAAAAA"}}>Chef & Founder</p>
        <p  className="p__open-sans" style={{fontFamily:"Bestermind",fontSize:"64px",marginTop:"3rem"}}>Kevin Luo</p>
      </div>
    </div>
  );
};

export default Chef;
