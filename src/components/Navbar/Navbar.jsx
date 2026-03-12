import { Link } from "react-scroll";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav>
      <div className="nav-title">Rahul Bingi</div>

      <ul className="nav-menu">
        <li>
          <Link to="home" smooth={true} duration={500} offset={0}>
            Home
          </Link>
        </li>

        <li>
          <Link to="about" smooth={true} duration={500} offset={20}>
            About
          </Link>
        </li>
        <li>
          <Link to="projects" smooth={true} duration={500} offset={20}>
            Projects
          </Link>
        </li>

        <li>
          <Link to="contact" smooth={true} duration={500} offset={20}>
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
