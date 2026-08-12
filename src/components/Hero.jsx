import { useState } from "react";
import { FiUser, FiHeart, FiChevronDown } from "react-icons/fi";
import { useLanguage } from "../context/LanguageContext.jsx";
import "./Hero.css";

function Hero() {
  const { t } = useLanguage();
  const [imgFailed, setImgFailed] = useState(false);

  return (
    <section id="home" className="hero">
      {/* Decorative background: a faint grid, no floating blobs */}
      <div className="hero__bg" aria-hidden="true">
        <div className="hero__grid" />
        <div className="hero__blob hero__blob--teal" />
      </div>

      <div className="container hero__inner">
        {/* ---------- Text content ---------- */}
        <div className="hero__content">
          <div className="hero__badges">
            <span className="hero__badge surface">
              <span className="hero__badge-dot hero__badge-dot--code" />
              {t.hero.badgeCode}
            </span>
            <span className="hero__badge surface">
              <span className="hero__badge-dot hero__badge-dot--health" />
              {t.hero.badgeHealth}
            </span>
          </div>

          <h1 className="hero__greeting reveal is-visible">{t.hero.greeting}</h1>
          <p className="hero__role reveal is-visible">{t.hero.role}</p>
          <p className="hero__tagline reveal is-visible">{t.hero.tagline}</p>
          <p className="hero__description reveal is-visible">
            {t.hero.description}
          </p>

          <div className="hero__ctas reveal is-visible">
            <a href="#projects" className="btn btn-primary">
              {t.hero.ctaProjects}
            </a>
            <a href="#about" className="btn btn-outline">
              {t.hero.ctaAbout}
            </a>
            <a href="#contact" className="btn btn-ghost">
              {t.hero.ctaContact} →
            </a>
          </div>
        </div>

        {/* ---------- Visual ---------- */}
        <div className="hero__visual">
          <div className="hero__card glass">
            <div className="hero__avatar">
              {!imgFailed ? (
                <img
                  src="/images/profile.jpg"
                  alt="Adham Mohamed"
                  onError={() => setImgFailed(true)}
                />
              ) : (
                <div className="hero__avatar-placeholder">
                  <FiUser />
                </div>
              )}
            </div>

            {/* Signature element: an ECG pulse line that resolves into `</>` —
                the fusion of vital signs and code syntax. */}
            <svg
              className="hero__signature"
              viewBox="0 0 400 90"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path
                className="hero__signature-pulse"
                d="M0,45 H60 L75,12 L95,78 L112,45 H150"
                stroke="var(--coral)"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                className="hero__signature-bracket hero__signature-bracket--1"
                d="M182,20 L160,45 L182,70"
                stroke="var(--teal)"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                className="hero__signature-bracket hero__signature-bracket--2"
                d="M215,14 L197,76"
                stroke="var(--text-primary)"
                strokeWidth="3"
                strokeLinecap="round"
              />
              <path
                className="hero__signature-bracket hero__signature-bracket--3"
                d="M230,20 L252,45 L230,70"
                stroke="var(--cyan)"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>

            <div className="hero__card-footer">
              <FiHeart className="hero__heart-icon" />
              <span>Cairo University · Faculty of Nursing</span>
            </div>
          </div>

          <div className="hero__chip surface">
            <span className="hero__chip-code">{"<React />"}</span>
          </div>
        </div>
      </div>

      <a href="#about" className="hero__scroll-hint" aria-label="Scroll down">
        <span>{t.hero.scrollHint}</span>
        <FiChevronDown />
      </a>
    </section>
  );
}

export default Hero;
