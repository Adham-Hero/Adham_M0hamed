import { useLanguage } from "../context/LanguageContext.jsx";
import projects from "../data/projects.js";
import ProjectCard from "./ProjectCard.jsx";
import "./Projects.css";

function Projects() {
  const { t, language } = useLanguage();

  return (
    <section id="projects" className="section projects">
      <div className="container">
        <span className="section-eyebrow reveal">{t.projects.eyebrow}</span>
        <h2 className="section-title reveal">{t.projects.title}</h2>
        <p className="section-subtitle reveal">{t.projects.subtitle}</p>

        <div className="projects__grid">
          {/* To add a new project: add one object to src/data/projects.js.
              No new component is created here — ProjectCard is fully reusable. */}
          {projects.map((project, index) => (
            <div
              className="reveal"
              key={project.id}
              style={{ transitionDelay: `${(index % 3) * 90}ms` }}
            >
              <ProjectCard
                title={project.title[language]}
                description={project.description[language]}
                image={project.image}
                technologies={project.technologies}
                github={project.github}
                demo={project.demo}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
