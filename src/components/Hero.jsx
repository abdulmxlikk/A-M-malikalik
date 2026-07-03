import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Can3D from "./Can3D";

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const containerRef = useRef(null);

  useEffect(() => {
    // Scroll-triggered subtle zoom out of the entire can container for parallax depth
    ScrollTrigger.create({
      trigger: ".hero",
      start: "top top",
      end: "bottom top",
      scrub: 1.5,
      onUpdate: (self) => {
        const progress = self.progress;
        gsap.set(containerRef.current, {
          scale: 1 - progress * 0.15,
          y: progress * 50
        });
      }
    });

    return () => {};
  }, []);

  return (
    <section className="hero" id="hero" style={{ position: "relative", minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", overflow: "hidden" }}>
      {/* Premium Luxury Background System */}
      <div className="hero-bg-premium">
        <div className="hero-glow-accent-1" />
        <div className="hero-glow-accent-2" />
      </div>
      
      {/* Film Grain/Noise Texture for expensive cinematic feel */}
      <div className="hero-noise" />

      {/* Massive typography behind the can for that premium advertisement feel */}
      <div 
        className="hero-text-centered fade-up" 
        style={{ 
          position: "absolute", 
          zIndex: 1, 
          textAlign: "center", 
          width: "100%", 
          pointerEvents: "none", 
          top: "45%", 
          transform: "translateY(-50%)" 
        }}
      >
        <h1 style={{ 
          fontSize: "clamp(4rem, 15vw, 15rem)", 
          fontWeight: 900, 
          lineHeight: 0.8, 
          color: "rgba(255,255,255,0.03)", 
          textTransform: "uppercase",
          letterSpacing: "-0.05em",
          margin: 0
        }}>
          MALIK
        </h1>
      </div>

      {/* 3D Can Overlay - Centered and absolute */}
      <div 
        className="hero-can-wrapper" 
        ref={containerRef}
        style={{ 
          position: "absolute", 
          zIndex: 5, 
          width: "100%", 
          height: "100vh", // Full height for large showcase
          display: "flex", 
          justifyContent: "center", 
          alignItems: "center" 
        }}
      >
        <Can3D />
      </div>

      {/* Foreground Text / Action Buttons (Pushed to bottom) */}
      <div 
        className="hero-foreground-content fade-up" 
        style={{ 
          position: "absolute", 
          bottom: "10%", 
          zIndex: 10, 
          textAlign: "center", 
          width: "100%", 
          padding: "0 20px" 
        }}
      >
        <div style={{ marginBottom: "20px" }}>
          <h2 style={{ fontSize: "1.5rem", fontWeight: 700, color: "white", marginBottom: "8px", textTransform: "uppercase", letterSpacing: "2px" }}>
            <span style={{ color: "var(--red-soft)" }}>A M</span> Energy
          </h2>
          <p style={{ color: "var(--text-muted)", fontSize: "1rem", maxWidth: "400px", margin: "0 auto 0 auto" }}>
            Premium Performance. Zero Compromise. Fuel your grind.
          </p>
        </div>
        
        <div className="hero-actions" style={{ justifyContent: "center", marginTop: "15px" }}>
          <a href="#flavors" className="btn btn-primary" style={{ pointerEvents: "auto" }}>
            🔥 Explore Flavors
          </a>
        </div>
      </div>

      <div className="hero-smoke" style={{ opacity: 0.6 }} />
    </section>
  );
}
