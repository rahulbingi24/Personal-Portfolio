import { Link } from "react-scroll";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav>
      <div className="nav-title">
        Rahul <span>Bingi</span>
      </div>

      <ul className="nav-menu">
        <li>
          <Link
            to="home"
            smooth={true}
            duration={500}
            offset={-40}
            activeClass="active"
            spy={true}
          >
            Home
          </Link>
        </li>

        <li>
          <Link
            to="about"
            smooth={true}
            duration={500}
            offset={20}
            spy={true}
            activeClass="active"
          >
            About
          </Link>
        </li>
        <li>
          <Link
            to="projects"
            smooth={true}
            duration={500}
            offset={20}
            activeClass="active"
            spy={true}
          >
            Projects
          </Link>
        </li>

        <li>
          <Link
            to="contact"
            smooth={true}
            duration={500}
            offset={20}
            activeClass="active"
            spy={true}
          >
            Contact
          </Link>
        </li>
        <li className="nav-icon">
          <a
            href="https://github.com/rahulbingi24"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub />
          </a>
        </li>

        <li className="nav-icon">
          <a
            href="https://linkedin.com/in/rahulbingi24"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin />
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
