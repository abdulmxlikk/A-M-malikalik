import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Can3D from "./Can3D";
import { ArrowRight, ChevronDown } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

// Generate floating particles
const particles = Array.from({ length: 60 }, (_, i) => ({
  id: i,
  left: `${Math.random() * 100}%`,
  delay: `${Math.random() * 8}s`,
  duration: `${6 + Math.random() * 6}s`,
  size: `${1 + Math.random() * 2}px`,
}));

// Floating blurred grape slices
const fruits = [
  { top: "12%", left: "5%", size: 90, delay: "0s", dur: "9s" },
  { top: "70%", left: "2%", size: 70, delay: "2s", dur: "11s" },
  { top: "20%", right: "4%", size: 100, delay: "1s", dur: "8s" },
  { top: "60%", right: "6%", size: 75, delay: "3s", dur: "12s" },
];

export default function Hero() {
  const canWrapperRef = useRef(null);
  const sectionRef = useRef(null);
  const mouseRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    // Mouse parallax on the can
    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;
      const x = (clientX / innerWidth - 0.5) * 30;
      const y = (clientY / innerHeight - 0.5) * -20;
      if (canWrapperRef.current) {
        gsap.to(canWrapperRef.current, {
          x, y,
          duration: 1.2,
          ease: "power2.out",
        });
      }
    };
    window.addEventListener("mousemove", handleMouseMove);

    // Scroll parallax
    ScrollTrigger.create({
      trigger: sectionRef.current,
      start: "top top",
      end: "bottom top",
      scrub: 1.5,
      onUpdate: (self) => {
        if (canWrapperRef.current) {
          gsap.set(canWrapperRef.current, {
            scale: 1 - self.progress * 0.18,
            y: self.progress * 60,
          });
        }
      },
    });

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <section
      id="hero"
      ref={sectionRef}
      className="hero-section"
      style={{ minHeight: "100vh" }}
    >
      {/* Smoke / glow background */}
      <div className="hero-smoke" />

      {/* Floating particles */}
      <div className="hero-particles">
        {particles.map((p) => (
          <div
            key={p.id}
            className="particle"
            style={{
              left: p.left,
              bottom: 0,
              width: p.size,
              height: p.size,
              animationDelay: p.delay,
              animationDuration: p.duration,
            }}
          />
        ))}
      </div>

      {/* Blurred fruit slices */}
      {fruits.map((f, i) => (
        <div
          key={i}
          className="floating-fruit"
          style={{
            top: f.top,
            left: f.left,
            right: f.right,
            width: f.size,
            height: f.size,
            animationDelay: f.delay,
            animationDuration: f.dur,
            background: `radial-gradient(circle at 40% 40%, rgba(155,48,255,0.6), rgba(0,245,255,0.3), rgba(124,58,237,0.2))`,
            border: "2px solid rgba(155,48,255,0.3)",
          }}
        />
      ))}

      {/* Main layout: text left, can center, tagline right */}
      <div className="container" style={{ position: "relative", zIndex: 20, width: "100%", paddingTop: "80px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", alignItems: "center", minHeight: "85vh", gap: "40px" }}>

          {/* LEFT: Tagline + CTA */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: [0.25, 0.46, 0.45, 0.94] }}
            style={{ display: "flex", flexDirection: "column", gap: "32px" }}
          >
            {/* Eyebrow */}
            <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
              <div style={{ width: "32px", height: "1px", background: "var(--cyan)", boxShadow: "0 0 8px var(--cyan)" }} />
              <span style={{ fontSize: "0.7rem", letterSpacing: "0.3em", textTransform: "uppercase", color: "var(--cyan)", fontWeight: 600 }}>
                KINETIC Energy
              </span>
            </div>

            {/* Tagline */}
            <div>
              <p style={{ fontSize: "1.15rem", color: "rgba(255,255,255,0.75)", lineHeight: 1.7, fontWeight: 300 }}>
                The focused grape surge.<br />
                <strong style={{ color: "white", fontWeight: 700 }}>Zero crash.</strong><br />
                Pure performance.
              </p>
            </div>

            {/* Stats row */}
            <div style={{ display: "flex", gap: "24px" }}>
              {[["200mg", "Caffeine"], ["Zero", "Sugar Crash"], ["100%", "Focus"]].map(([val, label]) => (
                <div key={label} style={{ textAlign: "center" }}>
                  <div style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: "1.5rem", fontWeight: 900, fontStyle: "italic", color: "var(--cyan)", lineHeight: 1 }}>
                    {val}
                  </div>
                  <div style={{ fontSize: "0.65rem", letterSpacing: "0.15em", textTransform: "uppercase", color: "rgba(255,255,255,0.45)", marginTop: "4px" }}>
                    {label}
                  </div>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              <button className="btn-primary" style={{ width: "fit-content" }}>
                GET FUELED
                <ArrowRight size={16} />
              </button>
              <button className="btn-outline" style={{ width: "fit-content" }}>
                See All Flavors
              </button>
            </div>
          </motion.div>

          {/* CENTER: 3D Can */}
          <div style={{ position: "relative", height: "85vh" }}>
            {/* Giant bg headline (behind can) */}
            <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%,-50%)", textAlign: "center", zIndex: 5, pointerEvents: "none", width: "100vw" }}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.2, delay: 0.2 }}
              >
                <div className="hero-title">
                  <span className="hero-headline-1">KINETIC BY</span>
                  <span className="hero-headline-2">MALIK</span>
                </div>
              </motion.div>
            </div>

            {/* 3D Can wrapper */}
            <div ref={canWrapperRef} className="can-3d-container">
              <Can3D />
            </div>

            {/* Neon ground glow under can */}
            <div style={{
              position: "absolute",
              bottom: "15%",
              left: "50%",
              transform: "translateX(-50%)",
              width: "280px",
              height: "40px",
              background: "radial-gradient(ellipse, rgba(155,48,255,0.35) 0%, transparent 70%)",
              filter: "blur(15px)",
              zIndex: 9,
              pointerEvents: "none",
            }} />
          </div>

          {/* RIGHT: product info */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
            style={{ display: "flex", flexDirection: "column", gap: "32px", alignItems: "flex-end", textAlign: "right" }}
          >
            {/* Flavor badge */}
            <div style={{
              padding: "12px 24px",
              borderRadius: "100px",
              background: "rgba(155,48,255,0.1)",
              border: "1px solid rgba(155,48,255,0.3)",
              backdropFilter: "blur(20px)",
              boxShadow: "0 0 20px rgba(155,48,255,0.15)",
            }}>
              <span style={{ fontSize: "0.75rem", fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", color: "rgba(255,255,255,0.9)" }}>
                🍇 Grape Grind
              </span>
            </div>

            {/* Flavor description */}
            <div style={{ maxWidth: "260px" }}>
              <div style={{ fontSize: "0.7rem", letterSpacing: "0.25em", textTransform: "uppercase", color: "var(--purple)", fontWeight: 600, marginBottom: "8px" }}>
                Flavor Profile
              </div>
              <p style={{ fontSize: "0.9rem", color: "rgba(255,255,255,0.55)", lineHeight: 1.7 }}>
                Deep, rich grape with a sweet power burst that hits instantly and lingers.
              </p>
            </div>

            {/* Volume info */}
            <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
              {[["355ml", "Can Size"], ["12pk", "Value Pack"], ["$2.99", "Per Can"]].map(([val, label]) => (
                <div key={label} style={{ display: "flex", alignItems: "center", gap: "12px", justifyContent: "flex-end" }}>
                  <span style={{ fontSize: "0.65rem", letterSpacing: "0.15em", textTransform: "uppercase", color: "rgba(255,255,255,0.35)" }}>{label}</span>
                  <span style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: "1.2rem", fontWeight: 900, fontStyle: "italic", color: "white" }}>{val}</span>
                </div>
              ))}
            </div>

            {/* Ratings */}
            <div style={{ display: "flex", flexDirection: "column", gap: "6px", alignItems: "flex-end" }}>
              <div style={{ display: "flex", gap: "4px" }}>
                {"★★★★★".split("").map((s, i) => (
                  <span key={i} style={{ color: "#f59e0b", fontSize: "1rem" }}>{s}</span>
                ))}
              </div>
              <span style={{ fontSize: "0.7rem", color: "rgba(255,255,255,0.4)", letterSpacing: "0.1em" }}>
                4.9 / 5 · 2,847 reviews
              </span>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        style={{
          position: "absolute",
          bottom: "32px",
          left: "50%",
          transform: "translateX(-50%)",
          zIndex: 20,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "8px",
        }}
      >
        <span style={{ fontSize: "0.6rem", letterSpacing: "0.3em", textTransform: "uppercase", color: "rgba(255,255,255,0.3)" }}>
          SCROLL
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown size={16} style={{ color: "rgba(255,255,255,0.3)" }} />
        </motion.div>
      </motion.div>
    </section>
  );
}
