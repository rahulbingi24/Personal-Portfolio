import "./Project.css";

const Project = () => {
  const projects = [
  {
    title: "Health Fit Elite",
    description:
      "A modern fitness web application that helps users explore workout routines, health tips, and fitness programs through a clean and responsive interface.",
    tech: ["React", "JavaScript", "CSS"],
    link: "https://health-fit-elite.vercel.app/"
  },
  {
    title: "Late Night Bites",
    description:
      "A responsive food ordering website designed to showcase menu items and provide a smooth browsing experience for users looking for late-night meals.",
    tech: ["React", "JavaScript", "CSS"],
    link: "https://late-night-bite-s.vercel.app/"
  },
  {
    title: "Weather Application",
    description:
      "A weather forecasting application that fetches real-time weather data from an external API and displays temperature, location, and weather conditions dynamically.",
    tech: ["JavaScript", "Weather API", "CSS"],
    link: "https://weather-app-rahulbingi24.vercel.app/"
  },
  {
    title: "Expense Tracker",
    description:
      "A personal finance tracking application that allows users to record expenses, monitor spending, and manage their budget efficiently.",
    tech: ["HTML","CSS", "JavaScript", "Local Storage"],
    link: "https://expense-tracker-eight-tau-88.vercel.app/"
  }
];

  return (
    <section className="projects-section" id="projects">
      <h2 className="projects-title">Projects</h2>

      <div className="projects-container">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <h3>{project.title}</h3>

            <p className="project-desc">{project.description}</p>

            <div className="project-tech">
              {project.tech.map((t, i) => (
                <span key={i}>{t}</span>
              ))}
            </div>

            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="project-btn"
            >
              View Project
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Project;
