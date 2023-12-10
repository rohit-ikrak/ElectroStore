import Base from "../components/Base";
import { FaHeart } from "react-icons/fa";
function About() {
  return (
    <Base title="Electro Store / About Us" 
    description={"A Perfect E-Commerce Website"}
    buttonEnabled={true}
      buttonLink="/"
      buttonType="warning"
      buttonText="Home"
    >
      <div>
        <center>
        <br /><br /><br /><br />
        <h1><FaHeart />  Nothing to see here.</h1>
        <br /><br /><br /><br /><br /><br /><br />
        </center>
      </div>
    </Base>
  );
}

export default About;
