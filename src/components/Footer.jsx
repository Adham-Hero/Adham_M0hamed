import { FiGithub, FiLinkedin, FiInstagram, FiFacebook, FiMail } from "react-icons/fi";
import { useLanguage } from "../context/LanguageContext.jsx";
import socials from "../data/socials.js";
import "./Footer.css";

const socialLinks = [
  { icon: FiGithub, href: socials.github, label: "GitHub" },
  { icon: FiLinkedin, href: socials.linkedin, label: "LinkedIn" },
  { icon: FiInstagram, href: socials.instagram, label: "Instagram" },
  { icon: FiFacebook, href: socials.facebook, label: "Facebook" },
  { icon: FiMail, href: `mailto:${socials.email}`, label: "Email" },
];

function Footer() {
  const { t } = useLanguage();
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container footer__inner">
        <p className="footer__copy">
          © {year} Adham Mohamed. {t.footer.rights}
        </p>

        <div className="footer__social">
          {socialLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.href.startsWith("http") ? "_blank" : undefined}
              rel="noopener noreferrer"
              className="footer__social-btn"
              aria-label={link.label}
            >
              <link.icon />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}

export default Footer;
