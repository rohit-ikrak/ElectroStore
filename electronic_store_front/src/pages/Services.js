import Base from "../components/Base";
import { FaHeart } from "react-icons/fa";
function Services() {
  return (
    <Base
      title="Services we provide"
      description="In this page we will discuss about the services that we provide."
      buttonEnabled={true}
      buttonLink="/"
      buttonType="warning"
      buttonText="Home"
    >
      <div>
      <br /><br /><br /><br />
        <center>
          
        <h1><FaHeart /> Nothing to see here.</h1>
        </center>
        <br /><br /><br /><br /><br /><br /><br />
      </div>
    </Base>
  );
}

export default Services;
