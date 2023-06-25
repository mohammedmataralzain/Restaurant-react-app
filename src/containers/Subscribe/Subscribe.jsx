import Button from "../../components/button";
import SubHeading from "../../components/SubHeading";
import "./style.css"
const Subscribe = () => {
  return (
    <section className="app__subscribe section__padding" id="Subscribe">
        <SubHeading title="Newsletter" />
        <h3 className="headtext__cormorant" style={{fontSize : "3rem" }}>Subscribe to Our Newsletter</h3>
        <p className="p__open-sans"  style={{margin: "1.5rem 0 3rem 0"}}>And never miss latest Updates!</p>
        <form>
            <input type="email" required placeholder="Email Address"/>
            <Button title="Subscribe"/>
        </form>
    </section>
  )
}

export default Subscribe