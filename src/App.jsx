
//Containers
import Navbar from "./components/Navbar";
import Header from "./containers/Header"
import AboutUs from "./containers/AboutUs";
import SpecialMenu from "./containers/SpecialMenu/SpecialMenu";
import Chef from "./containers/Chef/Chef";

//style css
import "./app.css"
function App() {


  return (
    <> 
    <Navbar/>
    <Header/>
    <AboutUs/>
    <SpecialMenu/>
    <Chef/>
    </>
  );
}

export default App;
