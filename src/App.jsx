import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import About from "./components/About.jsx";
import Skills from "./components/Skills.jsx";
import Projects from "./components/Projects.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";
import useScrollReveal from "./hooks/useScrollReveal.js";
import { useLanguage } from "./context/LanguageContext.jsx";

function App() {
  const { language } = useLanguage();

  // Re-run the reveal-on-scroll observer whenever the language changes,
  // since switching language re-renders text nodes inside `.reveal` elements.
  useScrollReveal([language]);

  return (
    <>
      <main>
        <Navbar />
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
