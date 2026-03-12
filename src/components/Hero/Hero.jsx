import profile from "../../assets/profile.jpg";
import { Link } from "react-scroll";
import "./Hero.css";
const Hero = () => {
  return (
    <section className="hero-section" id="home">
      <div className="profile">
        <img src={profile} />
      </div>
      <div className="profile-desc">
        <div className="welcome-text">Welcome to my portfolio</div>
        <div className="greeting-text">Hi, I'm Rahul Bingi</div>

        <div className="title-text">
          <div className="title-sub-text">I'm</div> A Full Stack Developer
        </div>
        <div className="desc-text">
          I build modern and user-friendly web applications.
        </div>
        <div>
          <a href="/Rahul_Bingi_Software_Developer.pdf" download>
            <button className="download-btn">Download CV</button>
          </a>
          <div className="view-my-projects-btn">
            <Link to="projects" smooth={true} duration={500} offset={20}>
              View my projects
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
