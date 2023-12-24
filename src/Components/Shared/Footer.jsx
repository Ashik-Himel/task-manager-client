import { FaLongArrowAltRight, FaMailBulk } from "react-icons/fa";
import email from "../../assets/email.png";
import fb from "../../assets/fb.png";
import github from "../../assets/github.png";
import linkedin from "../../assets/linkedin.png";
import Container from "./Container";

const Footer = () => {
  return (
    <div>
      <Container>
        <footer className="footer items-center px-7 py-16 text-neutral-content">
          <aside className="items-center ">
            <h1 className="text-4xl  font-semibold">
              Task<span className="text-red-400">Manage</span>
            </h1>
            <div>
              <p>Copyright © 2023 - All right reserved</p>
              <div className="flex items-center gap-2">
                {" "}
                <FaMailBulk />
                <p>ashikujjamanhimel@gmail.com</p>
              </div>
            </div>
          </aside>
          <nav className="grid-flow-col gap-3 md:place-self-center md:justify-self-end">
            <div className="text-lg mt-1 flex items-center gap-1">
              <p>Follow Us On</p>
              <FaLongArrowAltRight />
            </div>
            <a href="https://www.linkedin.com/in/ashik-himel">
              <img className="w-8 h-8  rounded-lg" src={linkedin} />
            </a>
            <a href="https://www.facebook.com/ashikujjaman.himel">
              <img className="w-8 h-8 rounded-lg" src={fb} />
            </a>
            <a href="mailto:ashikujjamanhimel@gmail.com">
              <img className="w-8 h-8 rounded-lg" src={github} />
            </a>
            <a href="https://github.com/Ashik-Himel">
              <img className="w-8 h-8 rounded-lg" src={email} />
            </a>
          </nav>
        </footer>
      </Container>
    </div>
  );
};

export default Footer;
