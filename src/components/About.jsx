import { useState } from "react";
import { FiUser, FiBookOpen, FiCompass, FiTarget } from "react-icons/fi";
import { useLanguage } from "../context/LanguageContext.jsx";
import "./About.css";

function About() {
  const { t } = useLanguage();
  const [imgFailed, setImgFailed] = useState(false);

  // Info rows are data-driven so adding a new fact later is a one-line change.
  const infoRows = [
    { icon: FiBookOpen, label: t.about.educationLabel, value: t.about.educationValue },
    { icon: FiCompass, label: t.about.interestsLabel, value: t.about.interestsValue },
    { icon: FiTarget, label: t.about.goalLabel, value: t.about.goalValue },
  ];

  return (
    <section id="about" className="section about">
      <div className="container about__inner">
        <div className="about__portrait reveal">
          <div className="about__portrait-frame glass">
            {!imgFailed ? (
              <img
                src="/images/about.jpg"
                alt="Adham Mohamed"
                onError={() => setImgFailed(true)}
              />
            ) : (
              <div className="about__portrait-placeholder">
                <FiUser />
              </div>
            )}
          </div>
          <span className="about__portrait-ring" aria-hidden="true" />
        </div>

        <div className="about__content">
          <span className="section-eyebrow reveal">{t.about.eyebrow}</span>
          <h2 className="section-title reveal">{t.about.title}</h2>
          <p className="about__bio reveal">{t.about.bio}</p>

          <div className="about__grid">
            {infoRows.map((row, index) => (
              <div className="about__info-card glass reveal" key={row.label} style={{ transitionDelay: `${index * 90}ms` }}>
                <row.icon className="about__info-icon" />
                <div>
                  <span className="about__info-label">{row.label}</span>
                  <p className="about__info-value">{row.value}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
