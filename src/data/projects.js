// Add a new project by pushing a new object here — never create a new component.
// `title` and `description` are bilingual objects; `technologies` and links
// are language-independent so they're written once.
const projects = [
  {
    id: 1,
    title: {
      en: "VitalSense — Patient Vitals Dashboard",
      ar: "VitalSense — لوحة متابعة العلامات الحيوية",
    },
    description: {
      en: "A concept dashboard that visualizes patient heart rate, blood pressure, and oxygen levels in real time, designed with nursing workflows in mind.",
      ar: "لوحة تحكم مفاهيمية لعرض معدل ضربات القلب وضغط الدم ونسبة الأكسجين للمريض لحظيًا، مصممة مع مراعاة سير عمل التمريض.",
    },
    image: "/images/projects/vitalsense.jpg",
    technologies: ["React", "Chart.js", "CSS3"],
    github: "https://github.com/adham-mohamed/vitalsense",
    demo: "https://vitalsense-demo.vercel.app",
  },
  {
    id: 2,
    title: {
      en: "SkyCast — Weather App",
      ar: "SkyCast — تطبيق الطقس",
    },
    description: {
      en: "A clean weather application that fetches live forecasts by city, with a responsive layout and smooth loading states.",
      ar: "تطبيق طقس بسيط يجلب توقعات الطقس المباشرة حسب المدينة، بتصميم متجاوب وحالات تحميل سلسة.",
    },
    image: "/images/projects/skycast.jpg",
    technologies: ["JavaScript", "REST API", "HTML5", "CSS3"],
    github: "https://github.com/adham-mohamed/skycast",
    demo: "https://skycast-demo.vercel.app",
  },
  {
    id: 3,
    title: {
      en: "SymptomAI — Triage Assistant (Concept)",
      ar: "SymptomAI — مساعد فرز الأعراض (مفهوم)",
    },
    description: {
      en: "An exploratory AI-assisted tool that suggests urgency levels from reported symptoms, combining my interest in healthcare and AI.",
      ar: "أداة استكشافية بمساعدة الذكاء الاصطناعي تقترح درجة الأولوية بناءً على الأعراض المُدخلة، تجمع بين اهتمامي بالرعاية الصحية والذكاء الاصطناعي.",
    },
    image: "/images/projects/symptomai.jpg",
    technologies: ["Python", "React", "Node.js"],
    github: "https://github.com/adham-mohamed/symptomai",
    demo: "",
  },
  {
    id: 4,
    title: {
      en: "This Portfolio",
      ar: "هذا الموقع الشخصي",
    },
    description: {
      en: "The bilingual, theme-aware portfolio you're looking at right now — built with React, Vite, and a custom Context-based design system.",
      ar: "نفس الموقع الشخصي ثنائي اللغة الذي تتصفحه الآن — مبني باستخدام React و Vite ونظام تصميم مخصص بالـ Context API.",
    },
    image: "/images/projects/portfolio.jpg",
    technologies: ["React", "Vite", "JavaScript", "CSS3"],
    github: "https://github.com/adham-mohamed/portfolio",
    demo: "",
  },
];

export default projects;
