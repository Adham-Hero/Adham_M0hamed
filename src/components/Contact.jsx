import { useState } from "react";
import { FiMail, FiGithub, FiLinkedin, FiSend, FiCheckCircle } from "react-icons/fi";
import { useLanguage } from "../context/LanguageContext.jsx";
import socials from "../data/socials.js";
import "./Contact.css";

const initialForm = { name: "", email: "", message: "" };

function Contact() {
  const { t } = useLanguage();
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState("idle"); // idle | sending | sent | error

  // Contact info cards are data-driven — add a new channel by adding a row.
  const infoLinks = [
    {
      icon: FiMail,
      label: t.contact.emailLabel,
      value: socials.email,
      href: `mailto:${socials.email}`,
    },
    {
      icon: FiGithub,
      label: t.contact.githubLabel,
      value: socials.github.replace("https://", ""),
      href: socials.github,
    },
    {
      icon: FiLinkedin,
      label: t.contact.linkedinLabel,
      value: socials.linkedin.replace("https://", ""),
      href: socials.linkedin,
    },
  ];

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  // No backend yet — this simulates a submit so the form UI is fully demo-able.
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      setStatus("error");
      return;
    }

    setStatus("sending");
    setTimeout(() => {
      setStatus("sent");
      setForm(initialForm);
    }, 900);
  };

  return (
    <section id="contact" className="section contact">
      <div className="container">
        <span className="section-eyebrow reveal">{t.contact.eyebrow}</span>
        <h2 className="section-title reveal">{t.contact.title}</h2>
        <p className="section-subtitle reveal">{t.contact.subtitle}</p>

        <div className="contact__grid">
          {/* ---------- Info cards ---------- */}
          <div className="contact__info reveal">
            {infoLinks.map((item) => (
              <a
                key={item.label}
                href={item.href}
                target={item.href.startsWith("http") ? "_blank" : undefined}
                rel="noopener noreferrer"
                className="contact__info-card glass"
              >
                <span className="contact__info-icon">
                  <item.icon />
                </span>
                <span>
                  <span className="contact__info-label">{item.label}</span>
                  <p className="contact__info-value">{item.value}</p>
                </span>
              </a>
            ))}
          </div>

          {/* ---------- Form ---------- */}
          <form className="contact__form glass reveal" onSubmit={handleSubmit} noValidate>
            <div className="contact__field">
              <label htmlFor="name">{t.contact.formName}</label>
              <input
                id="name"
                name="name"
                type="text"
                value={form.name}
                onChange={handleChange}
                placeholder={t.contact.formNamePlaceholder}
              />
            </div>

            <div className="contact__field">
              <label htmlFor="email">{t.contact.formEmail}</label>
              <input
                id="email"
                name="email"
                type="email"
                value={form.email}
                onChange={handleChange}
                placeholder={t.contact.formEmailPlaceholder}
              />
            </div>

            <div className="contact__field">
              <label htmlFor="message">{t.contact.formMessage}</label>
              <textarea
                id="message"
                name="message"
                rows="5"
                value={form.message}
                onChange={handleChange}
                placeholder={t.contact.formMessagePlaceholder}
              />
            </div>

            <button type="submit" className="btn btn-primary contact__submit" disabled={status === "sending"}>
              {status === "sending" ? (
                t.contact.formSending
              ) : (
                <>
                  <FiSend /> {t.contact.formSend}
                </>
              )}
            </button>

            {status === "sent" && (
              <p className="contact__feedback contact__feedback--success">
                <FiCheckCircle /> {t.contact.formSuccess}
              </p>
            )}
            {status === "error" && (
              <p className="contact__feedback contact__feedback--error">
                {t.contact.formErrorRequired}
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
