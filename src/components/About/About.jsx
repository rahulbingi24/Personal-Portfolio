import "./About.css";

const About = () => {
  const educationData = [
    {
      degree: "Master of Computer Applications (MCA)",
      college: "R G Kedia College of Commerce, Hyderabad",
      year: "2023 – 2025",
      description:
        "Focused on web development, software engineering, and modern programming technologies.",
    },
    {
      degree: "Bachelor's Degree",
      college: "Sri Arunodaya Degree College, Korutla",
      year: "2020 – 2023",
      description:
        "Studied computer fundamentals, programming concepts, and database systems.",
    },
    {
      degree: "Intermediate (MPC)",
      college: "Sri Chaitanya Junior College, Jagtial",
      year: "2018 – 2020",
      description: "Mathematics, Physics, and Chemistry.",
    },
  ];

  return (
    <section className="about-section" id="about">
      <div className="about">
        <div className="about-container">
          <h2 className="about-title">About Me</h2>

          <p className="about-text">
            Hello! I'm <span>Rahul Bingi</span>, a Full Stack Developer passionate about
            crafting modern web experiences. I specialize in building responsive
            user interfaces and robust backend systems. My goal is to create
            scalable applications that deliver real value to users.
          </p>

          <h2 className="skills-title">Skills</h2>
          <div className="about-skills">
            <span>HTML</span>
            <span>CSS</span>
            <span>JavaScript</span>
            <span>React</span>
            <span>Next</span>
            <span>Node.js</span>
            <span>Express</span>
            <span>MongoDB</span>
          </div>
        </div>
      </div>
      <div className="education">
        <h2 className="education-title">Education</h2>

        <div className="education-container">
          {educationData.map((edu, index) => (
            <div className="education-card" key={index}>
              <h3>{edu.degree}</h3>
              <p className="college">{edu.college}</p>
              <span className="year">{edu.year}</span>
              <p className="edu-desc">{edu.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
