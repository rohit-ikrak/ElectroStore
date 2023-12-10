import Base from "../components/Base";
import { contactForm } from "./HomePageComponents";

const Contact = () => {
  return (
    <Base title="Electro Store / Contact Us" 
    description={"Send us your contact... we promise to reply..."}
    buttonEnabled={true}
      buttonLink="/"
      buttonType="warning"
      buttonText="Home"
    >
      <div className="my-5">{contactForm()}</div>
    </Base>
  );
};
export default Contact;
