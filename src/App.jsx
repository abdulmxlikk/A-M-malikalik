import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Flavors from "./components/Flavors";
import Nutrition from "./components/Nutrition";
import Benefits from "./components/Benefits";
import Gallery from "./components/Gallery";
import Reviews from "./components/Reviews";
import FAQ from "./components/FAQ";
import Newsletter from "./components/Newsletter";
import Footer from "./components/Footer";

gsap.registerPlugin(ScrollTrigger);

export default function App() {
  const cursorDotRef = useRef(null);
  const cursorRingRef = useRef(null);

  useEffect(() => {
    // ── Lenis smooth scroll ──
    const lenis = new Lenis({ duration: 1.3, smoothWheel: true });
    function raf(time) { lenis.raf(time); requestAnimationFrame(raf); }
    requestAnimationFrame(raf);
    lenis.on("scroll", ScrollTrigger.update);
    gsap.ticker.add((time) => lenis.raf(time * 1000));
    gsap.ticker.lagSmoothing(0);

    // ── Custom cursor ──
    const dot = cursorDotRef.current;
    const ring = cursorRingRef.current;
    let mouseX = 0, mouseY = 0;
    let ringX = 0, ringY = 0;

    const moveCursor = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      gsap.to(dot, { x: mouseX, y: mouseY, duration: 0.1, ease: "none" });
    };
    window.addEventListener("mousemove", moveCursor);

    // Ring follows with lag
    const animateRing = () => {
      ringX += (mouseX - ringX) * 0.15;
      ringY += (mouseY - ringY) * 0.15;
      if (ring) { ring.style.transform = `translate(${ringX - 18}px, ${ringY - 18}px)`; }
      requestAnimationFrame(animateRing);
    };
    animateRing();

    // Hover expansion
    const interactives = document.querySelectorAll("button, a, [class*='btn'], [class*='card'], [style*='cursor: none']");
    const addHover = (el) => {
      el.addEventListener("mouseenter", () => ring?.classList.add("hovered"));
      el.addEventListener("mouseleave", () => ring?.classList.remove("hovered"));
    };
    interactives.forEach(addHover);

    // ── GSAP scroll-triggered reveal ──
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) { entry.target.classList.add("visible"); }
      });
    }, { threshold: 0.08 });
    document.querySelectorAll(".fade-up").forEach((el) => observer.observe(el));

    return () => {
      lenis.destroy();
      window.removeEventListener("mousemove", moveCursor);
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return (
    <>
      {/* Custom cursor */}
      <div className="cursor-dot" ref={cursorDotRef} />
      <div className="cursor-ring" ref={cursorRingRef} />

      <div style={{ position: "relative" }}>
        <Navbar />
        <Hero />
        <Flavors />
        <Nutrition />
        <Benefits />
        <Gallery />
        <Reviews />
        <FAQ />
        <Newsletter />
        <Footer />
      </div>
    </>
  );
}
