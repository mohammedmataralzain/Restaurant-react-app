import Navbar from "./components/Navbar";
import Header from "./containers/Header"
import "./app.css"
import AboutUs from "./containers/AboutUs";
import SpecialMenu from "./containers/SpecialMenu/SpecialMenu";
import Chef from "./containers/Chef/Chef";

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
