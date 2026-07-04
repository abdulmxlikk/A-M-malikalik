import { motion } from "framer-motion";
import { Zap, Target, Shield, Clock, Brain, Flame } from "lucide-react";

const benefits = [
  { icon: Zap, title: "Instant Surge", desc: "Feel the energy within 15 minutes. 200mg caffeine delivers a clean, powerful boost that hits fast and lasts long.", color: "#00f5ff" },
  { icon: Brain, title: "Mental Clarity", desc: "B-vitamin complex and natural nootropics sharpen focus, enhance memory and eliminate brain fog instantly.", color: "#9b30ff" },
  { icon: Shield, title: "Zero Crash", desc: "Our patented formula ensures a smooth energy curve — no jitters, no anxiety, no painful crash afterward.", color: "#7c3aed" },
  { icon: Clock, title: "6-Hour Energy", desc: "Sustained performance energy that doesn't fade. Engineered for athletes, creators, and night-owl grinders.", color: "#00f5ff" },
  { icon: Target, title: "Peak Performance", desc: "Trusted by professional gamers, elite athletes and creatives who demand every edge possible.", color: "#9b30ff" },
  { icon: Flame, title: "Thermogenic Boost", desc: "Natural metabolism enhancers help maximize your body's energy output and calorie burning potential.", color: "#ff6b35" },
];

export default function Benefits() {
  return (
    <section id="benefits" className="section">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          style={{ textAlign: "center", marginBottom: "70px" }}
        >
          <div className="section-label">Why KINETIC</div>
          <h2 className="section-title">
            Engineered to<br />
            <span className="gradient-text">win every moment.</span>
          </h2>
        </motion.div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "24px" }}>
          {benefits.map((b, i) => {
            const Icon = b.icon;
            return (
              <motion.div
                key={b.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: i * 0.1 }}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                className="glass"
                style={{
                  padding: "36px 28px",
                  borderRadius: "24px",
                  border: "1px solid rgba(255,255,255,0.06)",
                  cursor: "none",
                  transition: "border-color 0.4s ease, box-shadow 0.4s ease",
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.borderColor = `${b.color}40`;
                  e.currentTarget.style.boxShadow = `0 20px 60px ${b.color}10`;
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.borderColor = "rgba(255,255,255,0.06)";
                  e.currentTarget.style.boxShadow = "none";
                }}
              >
                {/* Icon */}
                <div style={{
                  width: "52px",
                  height: "52px",
                  borderRadius: "14px",
                  background: `${b.color}10`,
                  border: `1px solid ${b.color}30`,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: "20px",
                  boxShadow: `0 0 20px ${b.color}15`,
                }}>
                  <Icon size={22} style={{ color: b.color }} />
                </div>

                <h3 style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: "1.6rem", fontWeight: 900, fontStyle: "italic", marginBottom: "12px", textTransform: "uppercase" }}>
                  {b.title}
                </h3>
                <p style={{ color: "rgba(255,255,255,0.5)", fontSize: "0.88rem", lineHeight: 1.7 }}>
                  {b.desc}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
