import { useLanguage } from "../context/LanguageContext.jsx";
import skills from "../data/skills.js";
import "./Skills.css";

function Skills() {
  const { t, language } = useLanguage();

  return (
    <section id="skills" className="section skills">
      <div className="container">
        <span className="section-eyebrow reveal">{t.skills.eyebrow}</span>
        <h2 className="section-title reveal">{t.skills.title}</h2>
        <p className="section-subtitle reveal">{t.skills.subtitle}</p>

        <div className="skills__grid">
          {/* Single source of truth: src/data/skills.js.
              Add a new skill object there and it appears here automatically. */}
          {skills.map((skill, index) => {
            const Icon = skill.icon;
            return (
              <div
                key={skill.name}
                className="skills__card surface reveal"
                style={{ transitionDelay: `${(index % 5) * 70}ms` }}
              >
                <span
                  className="skills__icon-wrap"
                  style={{ color: skill.color }}
                >
                  <Icon />
                </span>
                <span className="skills__name">{skill.name}</span>
                <span className="skills__level">{skill.level[language]}</span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Skills;
