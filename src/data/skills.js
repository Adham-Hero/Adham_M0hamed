import {
  SiHtml5,
  SiCss,
  SiJavascript,
  SiReact,
  SiBootstrap,
  SiPython,
  SiNodedotjs,
  SiGit,
  SiMysql,
  SiFigma,
} from "react-icons/si";

// Add a new skill by pushing a new object here — no new component needed.
// `level` is bilingual so the UI shows it in the current language automatically.
const skills = [
  { name: "HTML5", icon: SiHtml5, color: "#e34f26", level: { en: "Advanced", ar: "متقدم" } },
  { name: "CSS3", icon: SiCss, color: "#2563eb", level: { en: "Advanced", ar: "متقدم" } },
  { name: "JavaScript", icon: SiJavascript, color: "#f7cb45", level: { en: "Advanced", ar: "متقدم" } },
  { name: "React", icon: SiReact, color: "#38bdf8", level: { en: "Intermediate", ar: "متوسط" } },
  { name: "Bootstrap", icon: SiBootstrap, color: "#7952b3", level: { en: "Intermediate", ar: "متوسط" } },
  { name: "Python", icon: SiPython, color: "#2dd9c2", level: { en: "Intermediate", ar: "متوسط" } },
  { name: "Node.js", icon: SiNodedotjs, color: "#6cc24a", level: { en: "Beginner", ar: "مبتدئ" } },
  { name: "Git & GitHub", icon: SiGit, color: "#fb7185", level: { en: "Intermediate", ar: "متوسط" } },
  { name: "SQL", icon: SiMysql, color: "#38bdf8", level: { en: "Beginner", ar: "مبتدئ" } },
  { name: "Figma", icon: SiFigma, color: "#f472b6", level: { en: "Beginner", ar: "مبتدئ" } },
];

export default skills;
