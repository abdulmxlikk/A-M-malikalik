import { useState, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";

const flavors = [
  {
    id: 1,
    name: "Grape Grind",
    tag: "THE SIGNATURE",
    image: "./images/am-hero.png",
    colors: ["#6600cc", "#9b30ff"],
    accent: "rgba(155,48,255,0.3)",
    glow: "#9b30ff",
    description:
      "A sudden blast of deep, rich grape flavor combined with the unmistakable KINETIC energy rush. Sweet, powerful, and aggressively refreshing — built for those who demand more.",
    profile: "Dark Grape · Sweet · Bold · Electric",
    caffeine: "200mg",
    cal: "10 kcal",
    sugar: "0g sugar",
  },
  {
    id: 2,
    name: "Blue Rush",
    tag: "ELECTRIC COOL",
    image: "./images/am-blue-ice.png",
    colors: ["#0044ff", "#00d4ff"],
    accent: "rgba(0,212,255,0.3)",
    glow: "#00d4ff",
    description:
      "Pure deep berry refreshment. A frosty, sweet rush of blue raspberry that cools you down while hyping you up. Zero crash. Maximum cool.",
    profile: "Blue Raspberry · Frosty · Sweet · Pure",
    caffeine: "180mg",
    cal: "5 kcal",
    sugar: "0g sugar",
  },
  {
    id: 3,
    name: "Lemon Lime",
    tag: "CITRUS SURGE",
    image: "./images/am-lemon-lime.png",
    colors: ["#e8e24e", "#7ecb3c"],
    accent: "rgba(200,210,50,0.3)",
    glow: "#c8d232",
    description:
      "A sharp, electric fusion of zesty lemon and sweet lime. All-natural ingredients that keep you energized, focused and ready to take on any challenge.",
    profile: "Citrus · Sharp · Refreshing · Vibrant",
    caffeine: "160mg",
    cal: "8 kcal",
    sugar: "0g sugar",
  },
  {
    id: 4,
    name: "Strawberry Surge",
    tag: "WILD BERRY",
    image: "./images/am-green-apple.png",
    colors: ["#ff0033", "#ff6666"],
    accent: "rgba(255,0,51,0.3)",
    glow: "#ff3355",
    description:
      "Fresh, juicy, and undeniable. The bright bite of fresh strawberries balancing a smooth energy boost. Highly addictive and built for pure focus.",
    profile: "Wild Berry · Juicy · Ripe · Smooth",
    caffeine: "180mg",
    cal: "8 kcal",
    sugar: "0g sugar",
  },
  {
    id: 5,
    name: "Mango Thunder",
    tag: "TROPICAL STORM",
    image: "./images/am-mango-rush.png",
    colors: ["#ff8c00", "#ffcc00"],
    accent: "rgba(255,200,0,0.3)",
    glow: "#ff9900",
    description:
      "A tropical storm of golden mango that hits hard and lingers. Sweet, exotic and dangerously addictive — the ultimate performance fuel for warm days.",
    profile: "Ripe Mango · Tropical · Golden · Vivid",
    caffeine: "190mg",
    cal: "12 kcal",
    sugar: "0g sugar",
  },
];

export default function Flavors() {
  const [activeIdx, setActiveIdx] = useState(0);
  const activeFlavor = flavors[activeIdx];
  const canRef = useRef(null);
  const detailsRef = useRef(null);

  const handleSelect = (idx) => {
    if (idx === activeIdx) return;
    gsap.to([canRef.current, detailsRef.current], {
      opacity: 0,
      y: 20,
      duration: 0.25,
      onComplete: () => {
        setActiveIdx(idx);
        gsap.fromTo(
          [canRef.current, detailsRef.current],
          { opacity: 0, y: -20 },
          { opacity: 1, y: 0, duration: 0.45, ease: "power3.out", stagger: 0.06 }
        );
      },
    });
  };

  return (
    <section id="flavors" className="section" style={{ background: `radial-gradient(ellipse 80% 60% at 50% 50%, ${activeFlavor.accent} 0%, transparent 70%), var(--black)`, transition: "background 0.6s ease" }}>
      <div className="container">
        {/* Header */}
        <motion.div
          className="fade-up"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          style={{ marginBottom: "64px" }}
        >
          <div className="section-label">The Collection</div>
          <h2 className="section-title">
            Five bold flavors.<br />
            <span className="gradient-text">One unstoppable energy.</span>
          </h2>
        </motion.div>

        {/* Large showcase */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "80px", alignItems: "center", marginBottom: "64px" }}>
          {/* Can image */}
          <div ref={canRef} style={{ display: "flex", justifyContent: "center", alignItems: "center", position: "relative", minHeight: "500px" }}>
            {/* Glow behind can */}
            <div style={{
              position: "absolute",
              width: "60%",
              height: "60%",
              background: `radial-gradient(circle, ${activeFlavor.glow}40 0%, transparent 70%)`,
              filter: "blur(40px)",
              zIndex: 1,
            }} />
            <motion.img
              key={activeIdx}
              src={activeFlavor.image}
              alt={activeFlavor.name}
              initial={{ scale: 0.85, rotate: -5, opacity: 0 }}
              animate={{ scale: 1, rotate: 0, opacity: 1 }}
              transition={{ duration: 0.6, ease: [0.34, 1.56, 0.64, 1] }}
              style={{
                height: "420px",
                objectFit: "contain",
                position: "relative",
                zIndex: 2,
                filter: `drop-shadow(0 0 40px ${activeFlavor.glow}60)`,
              }}
            />
          </div>

          {/* Details */}
          <div ref={detailsRef}>
            <div style={{
              display: "inline-block",
              padding: "6px 18px",
              borderRadius: "100px",
              border: `1px solid ${activeFlavor.glow}50`,
              background: `${activeFlavor.glow}10`,
              marginBottom: "20px",
            }}>
              <span style={{ fontSize: "0.65rem", fontWeight: 700, letterSpacing: "0.25em", color: activeFlavor.glow }}>{activeFlavor.tag}</span>
            </div>

            <h3 style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: "clamp(3rem, 7vw, 6rem)", fontWeight: 900, fontStyle: "italic", textTransform: "uppercase", lineHeight: 0.9, marginBottom: "24px" }}>
              {activeFlavor.name}
            </h3>

            {/* Color swatches */}
            <div style={{ display: "flex", gap: "10px", marginBottom: "24px" }}>
              {activeFlavor.colors.map((c, i) => (
                <div key={i} style={{ width: "32px", height: "32px", borderRadius: "50%", background: c, boxShadow: `0 0 15px ${c}80, inset 0 0 8px rgba(255,255,255,0.2)` }} />
              ))}
            </div>

            <p style={{ color: "rgba(255,255,255,0.6)", lineHeight: 1.75, marginBottom: "28px", maxWidth: "400px" }}>
              {activeFlavor.description}
            </p>

            {/* Mini stats */}
            <div style={{ display: "flex", gap: "20px", marginBottom: "28px" }}>
              {[activeFlavor.caffeine, activeFlavor.cal, activeFlavor.sugar].map((stat, i) => (
                <div key={i} className="glass" style={{ padding: "12px 20px", borderRadius: "12px", textAlign: "center" }}>
                  <div style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: "1.1rem", fontWeight: 900, fontStyle: "italic", color: activeFlavor.glow }}>
                    {stat}
                  </div>
                </div>
              ))}
            </div>

            {/* Profile */}
            <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
              <span style={{ fontSize: "0.7rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "rgba(255,255,255,0.35)" }}>Profile</span>
              <span style={{ fontSize: "0.85rem", color: "rgba(255,255,255,0.7)", fontWeight: 500 }}>{activeFlavor.profile}</span>
            </div>

            <div style={{ display: "flex", gap: "16px", marginTop: "32px" }}>
              <button className="btn-primary">Add to Cart</button>
              <button className="btn-outline">Learn More</button>
            </div>
          </div>
        </div>

        {/* Flavor selector thumbnails */}
        <div style={{ display: "flex", gap: "16px", justifyContent: "center", flexWrap: "wrap" }}>
          {flavors.map((flavor, idx) => (
            <button
              key={flavor.id}
              onClick={() => handleSelect(idx)}
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: "8px",
                padding: "16px",
                borderRadius: "16px",
                border: idx === activeIdx ? `1px solid ${flavor.glow}70` : "1px solid rgba(255,255,255,0.06)",
                background: idx === activeIdx ? `${flavor.glow}08` : "rgba(255,255,255,0.02)",
                cursor: "none",
                transition: "all 0.3s ease",
                boxShadow: idx === activeIdx ? `0 0 20px ${flavor.glow}20` : "none",
                transform: idx === activeIdx ? "translateY(-4px) scale(1.05)" : "none",
              }}
            >
              <img
                src={flavor.image}
                alt={flavor.name}
                style={{ height: "80px", objectFit: "contain", filter: idx === activeIdx ? `drop-shadow(0 0 10px ${flavor.glow}80)` : "none", transition: "filter 0.3s ease" }}
              />
              <span style={{ fontSize: "0.65rem", fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase", color: idx === activeIdx ? flavor.glow : "rgba(255,255,255,0.4)" }}>
                {flavor.name}
              </span>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
