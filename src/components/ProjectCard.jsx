import { useState } from "react";
import { FiGithub, FiExternalLink, FiImage } from "react-icons/fi";
import { useLanguage } from "../context/LanguageContext.jsx";
import "./ProjectCard.css";

// Reusable, data-driven project card.
// Usage:
// <ProjectCard
//   title="Project Name"
//   description="Project description"
//   image="/images/projects/project.jpg"
//   technologies={["React", "CSS", "JavaScript"]}
//   github="https://github.com/..."
//   demo="https://..."
// />
function ProjectCard({ title, description, image, technologies = [], github, demo }) {
  const { t } = useLanguage();
  const [imgFailed, setImgFailed] = useState(false);

  return (
    <article className="project-card glass">
      <div className="project-card__image">
        {!imgFailed && image ? (
          <img src={image} alt={title} onError={() => setImgFailed(true)} />
        ) : (
          <div className="project-card__image-placeholder">
            <FiImage />
          </div>
        )}
        <div className="project-card__image-overlay" />
      </div>

      <div className="project-card__body">
        <h3 className="project-card__title">{title}</h3>
        <p className="project-card__description">{description}</p>

        <ul className="project-card__tech">
          {technologies.map((tech) => (
            <li key={tech} className="project-card__tech-chip">
              {tech}
            </li>
          ))}
        </ul>

        <div className="project-card__actions">
          {github && (
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline project-card__btn"
            >
              <FiGithub /> {t.projects.code}
            </a>
          )}

          {demo ? (
            <a
              href={demo}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary project-card__btn"
            >
              <FiExternalLink /> {t.projects.demo}
            </a>
          ) : (
            <span className="project-card__coming-soon">
              {t.projects.comingSoon}
            </span>
          )}
        </div>
      </div>
    </article>
  );
}

export default ProjectCard;
