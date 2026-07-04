import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star } from "lucide-react";

const reviews = [
  { name: "Marcus J.", role: "Pro Gamer", avatar: "MJ", rating: 5, text: "Grape Grind is the only energy drink I trust during tournament play. Zero jitter. Pure, sustained focus for 6+ hours. Absolutely game-changing.", verified: true, glow: "#9b30ff" },
  { name: "Aaliya R.", role: "CrossFit Athlete", avatar: "AR", rating: 5, text: "I've tried every energy drink on the market. KINETIC hits different. The Grape Grind flavor is smooth, clean, and the energy curve is insane. No crash whatsoever.", verified: true, glow: "#00f5ff" },
  { name: "David C.", role: "Creative Director", avatar: "DC", rating: 5, text: "Late-night design sessions used to destroy me. KINETIC keeps me sharp for hours. The Grape Grind is my new office fuel.", verified: true, glow: "#7c3aed" },
  { name: "Sarah K.", role: "Software Engineer", avatar: "SK", rating: 5, text: "As someone who codes 10+ hours a day, I needed something cleaner than coffee. The mental clarity from KINETIC is absolutely real.", verified: true, glow: "#00f5ff" },
  { name: "James T.", role: "MMA Fighter", avatar: "JT", rating: 5, text: "Pure power in a can. Pre-workout fuel that doesn't make me feel sick during training. The grape flavor is absolutely elite.", verified: true, glow: "#ff6b35" },
  { name: "Luna M.", role: "Twitch Streamer", avatar: "LM", rating: 5, text: "My chat noticed my reaction time improved. Not even kidding. KINETIC Grape Grind + a good night's sleep = unstoppable.", verified: true, glow: "#9b30ff" },
];

const Stars = ({ n }) => (
  <div style={{ display: "flex", gap: "3px" }}>
    {Array.from({ length: n }).map((_, i) => (
      <Star key={i} size={14} fill="#f59e0b" style={{ color: "#f59e0b" }} />
    ))}
  </div>
);

export default function Reviews() {
  const [activeIdx, setActiveIdx] = useState(null);
  return (
    <section id="reviews" className="section">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          style={{ textAlign: "center", marginBottom: "16px" }}
        >
          <div className="section-label">Community</div>
          <h2 className="section-title">
            They fueled up.<br />
            <span className="gradient-text">They conquered.</span>
          </h2>
        </motion.div>

        {/* Average */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: "16px", marginBottom: "60px" }}
        >
          <span style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: "4rem", fontWeight: 900, color: "var(--cyan)", lineHeight: 1 }}>4.9</span>
          <div>
            <Stars n={5} />
            <div style={{ fontSize: "0.75rem", color: "rgba(255,255,255,0.4)", marginTop: "6px" }}>2,847 verified reviews</div>
          </div>
        </motion.div>

        {/* Grid */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "20px" }}>
          {reviews.map((r, i) => (
            <motion.div
              key={r.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              className="review-card"
              style={{ cursor: "none" }}
              onMouseEnter={() => setActiveIdx(i)}
              onMouseLeave={() => setActiveIdx(null)}
            >
              {/* Header */}
              <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "16px" }}>
                <div style={{
                  width: "44px", height: "44px", borderRadius: "50%",
                  background: `linear-gradient(135deg, ${r.glow}50, transparent)`,
                  border: `1px solid ${r.glow}40`,
                  display: "flex", alignItems: "center", justifyContent: "center",
                  fontWeight: 700, fontSize: "0.75rem",
                  boxShadow: activeIdx === i ? `0 0 20px ${r.glow}40` : "none",
                  transition: "box-shadow 0.3s ease",
                }}>
                  {r.avatar}
                </div>
                <div>
                  <div style={{ fontWeight: 700, fontSize: "0.9rem" }}>{r.name}</div>
                  <div style={{ fontSize: "0.7rem", color: "rgba(255,255,255,0.4)" }}>{r.role}</div>
                </div>
                {r.verified && (
                  <div style={{ marginLeft: "auto", fontSize: "0.6rem", color: "var(--cyan)", fontWeight: 600, letterSpacing: "0.1em" }}>✓ VERIFIED</div>
                )}
              </div>
              <Stars n={r.rating} />
              <p style={{ color: "rgba(255,255,255,0.6)", fontSize: "0.88rem", lineHeight: 1.7, marginTop: "14px" }}>
                "{r.text}"
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
