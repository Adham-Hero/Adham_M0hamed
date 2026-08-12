import { createContext, useContext, useEffect, useState } from "react";
import translations from "../data/translations";

const LanguageContext = createContext(null);

const STORAGE_KEY = "adham-portfolio-lang";

function getInitialLanguage() {
  const saved = localStorage.getItem(STORAGE_KEY);
  if (saved === "en" || saved === "ar") return saved;
  // Fall back to browser language if nothing saved yet
  return navigator.language?.startsWith("ar") ? "ar" : "en";
}

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState(getInitialLanguage);

  // Keep <html lang> / dir in sync with the chosen language,
  // and persist the choice so it survives a page reload.
  useEffect(() => {
    document.documentElement.lang = language;
    document.documentElement.dir = language === "ar" ? "rtl" : "ltr";
    localStorage.setItem(STORAGE_KEY, language);
  }, [language]);

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === "en" ? "ar" : "en"));
  };

  const t = translations[language];
  const isRTL = language === "ar";

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t, isRTL }}>
      {children}
    </LanguageContext.Provider>
  );
}

// Custom hook — use this in components instead of useContext directly.
export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return ctx;
}
