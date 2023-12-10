import { Container } from "react-bootstrap"
import { FaInstagram, FaGithub,FaLinkedinIn, FaFacebookF, FaYoutube } from 'react-icons/fa';
const Footer = () => {
    return (
        <Container fluid className="bg-dark p-5 text-white text-center">

            <h3>We provide best products</h3>
            <p>All rights reserved by <b> @KVCH</b></p>
            <FaInstagram />        <FaGithub />         <FaFacebookF />      <FaLinkedinIn />     <FaYoutube />
        </Container>
    )
}

export default Footer