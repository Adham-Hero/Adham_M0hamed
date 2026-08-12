import { useEffect } from "react";

// Watches every element with the `.reveal` class and adds `.is-visible`
// once it scrolls into view. Runs once at the App level so any section
// can opt in just by adding the `reveal` class — no per-component wiring.
function useScrollReveal(deps = []) {
  useEffect(() => {
    const elements = document.querySelectorAll(".reveal:not(.is-visible)");

    if (!("IntersectionObserver" in window) || elements.length === 0) {
      elements.forEach((el) => el.classList.add("is-visible"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -60px 0px" }
    );

    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);
}

export default useScrollReveal;
