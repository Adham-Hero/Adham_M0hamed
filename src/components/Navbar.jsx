import { useEffect, useState } from "react";
import { FiSun, FiMoon, FiMenu, FiX, FiGlobe } from "react-icons/fi";
import { useLanguage } from "../context/LanguageContext.jsx";
import { useTheme } from "../context/ThemeContext.jsx";
import "./Navbar.css";

// Nav links live in one place — edit this array to add/remove/reorder links.
// `key` maps to translations.nav.<key>, `id` maps to the section's HTML id.
const NAV_LINKS = [
  { key: "home", id: "home" },
  { key: "about", id: "about" },
  { key: "projects", id: "projects" },
  { key: "skills", id: "skills" },
  { key: "contact", id: "contact" },
];

function Navbar() {
  const { t, toggleLanguage, isRTL } = useLanguage();
  const { theme, toggleTheme } = useTheme();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Add a subtle "elevated" style once the page has scrolled a bit.
  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 12);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close the mobile menu automatically if the viewport grows back to desktop.
  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth > 860) setIsMenuOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const handleLinkClick = () => setIsMenuOpen(false);

  return (
    <header className={`navbar ${isScrolled ? "navbar--scrolled" : ""}`}>
      <div className="container navbar__inner">
        <a href="#home" className="navbar__logo" onClick={handleLinkClick}>
          <span className="navbar__logo-mark">&lt;/&gt;</span>
          Adham<span className="navbar__logo-dot">.</span>
        </a>

        <nav
          className={`navbar__links ${isMenuOpen ? "navbar__links--open" : ""}`}
          aria-label="Primary"
        >
          <ul>
            {NAV_LINKS.map((link) => (
              <li key={link.id}>
                <a href={`#${link.id}`} onClick={handleLinkClick}>
                  {t.nav[link.key]}
                </a>
              </li>
            ))}
          </ul>

          {/* Controls duplicated inside the mobile drawer for easy thumb access */}
          <div className="navbar__mobile-controls">
            <button className="navbar__pill-btn" onClick={toggleLanguage}>
              <FiGlobe /> {t.nav.langSwitch}
            </button>
            <button className="navbar__pill-btn" onClick={toggleTheme}>
              {theme === "dark" ? <FiSun /> : <FiMoon />}
              {theme === "dark" ? "Light" : "Dark"}
            </button>
          </div>
        </nav>

        <div className="navbar__actions">
          <button
            className="navbar__icon-btn"
            onClick={toggleLanguage}
            aria-label="Switch language"
            title={isRTL ? "English" : "العربية"}
          >
            <FiGlobe />
            <span>{t.nav.langSwitch}</span>
          </button>

          <button
            className="navbar__icon-btn navbar__icon-btn--square"
            onClick={toggleTheme}
            aria-label="Toggle dark / light mode"
            title={theme === "dark" ? "Light mode" : "Dark mode"}
          >
            {theme === "dark" ? <FiSun /> : <FiMoon />}
          </button>

          <button
            className="navbar__icon-btn navbar__icon-btn--square navbar__hamburger"
            onClick={() => setIsMenuOpen((prev) => !prev)}
            aria-label="Toggle menu"
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
