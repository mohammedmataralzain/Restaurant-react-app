//Containers
import Navbar from "./components/Navbar";
import Header from "./containers/Header";
import AboutUs from "./containers/AboutUs";
import SpecialMenu from "./containers/SpecialMenu/SpecialMenu";
import Chef from "./containers/Chef/Chef";
import Awards from "./containers/Laurels/Laurels";
import Intro from "./containers/Intro/Intro";

//style css
import "./app.css";
import Gallery from "./containers/Gallery/Gallery";
import FindUs from "./containers/FindUs/FindUs";
import Subscribe from "./containers/Subscribe/Subscribe";
import Footer from "./containers/Footer/Footer";
function App() {
  return (
    <>
      <Navbar />
      <Header />
      <AboutUs />
      <SpecialMenu />
      <Chef />
      <Intro/>
      <Awards/>
      <Gallery/>
      <FindUs/>
      <Subscribe/>
      <Footer/>
    </>
  );
}

export default App;
