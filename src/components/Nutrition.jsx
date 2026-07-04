import { motion } from "framer-motion";
import { useRef } from "react";

const nutrients = [
  { name: "Calories", value: "10 kcal", bar: 5 },
  { name: "Total Carbs", value: "2g", bar: 8 },
  { name: "Sugars", value: "0g", bar: 0 },
  { name: "Caffeine", value: "200mg", bar: 80 },
  { name: "B3 Niacin", value: "21mg", bar: 75 },
  { name: "B6 Vitamin", value: "2.1mg", bar: 60 },
  { name: "B12 Vitamin", value: "6μg", bar: 55 },
  { name: "Taurine", value: "1000mg", bar: 70 },
];

const containerVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};
const itemVariants = {
  hidden: { opacity: 0, x: -30 },
  show: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function Nutrition() {
  return (
    <section id="nutrition" className="section" style={{ background: "linear-gradient(180deg, var(--black) 0%, #080810 100%)" }}>
      <div className="container">
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "80px", alignItems: "center" }}>
          
          {/* Left: Nutrition card */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="glass" style={{
              borderRadius: "28px",
              padding: "40px",
              border: "1px solid rgba(0,245,255,0.1)",
              boxShadow: "0 0 60px rgba(0,245,255,0.04), inset 0 0 40px rgba(0,245,255,0.02)",
            }}>
              {/* Header */}
              <div style={{ borderBottom: "2px solid white", paddingBottom: "12px", marginBottom: "8px" }}>
                <div style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: "2.2rem", fontWeight: 900, fontStyle: "italic", letterSpacing: "0.05em" }}>
                  NUTRITION FACTS
                </div>
                <div style={{ fontSize: "0.8rem", color: "rgba(255,255,255,0.55)" }}>Serving size: 1 can (355ml)</div>
              </div>
              <div style={{ borderBottom: "8px solid white", paddingBottom: "8px", marginBottom: "16px" }}>
                <div style={{ fontSize: "0.7rem", color: "rgba(255,255,255,0.6)" }}>Amount Per Serving</div>
                <div style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between" }}>
                  <div style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 900, fontStyle: "italic" }}>Calories</div>
                  <div style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: "2.5rem", fontWeight: 900 }}>10</div>
                </div>
              </div>

              {/* Nutrient rows */}
              <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                style={{ display: "flex", flexDirection: "column", gap: "12px" }}
              >
                {nutrients.map((n) => (
                  <motion.div key={n.name} variants={itemVariants}>
                    <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "6px" }}>
                      <span style={{ fontSize: "0.85rem", fontWeight: 600 }}>{n.name}</span>
                      <span style={{ fontSize: "0.85rem", color: "var(--cyan)", fontWeight: 700 }}>{n.value}</span>
                    </div>
                    <div style={{ height: "3px", background: "rgba(255,255,255,0.08)", borderRadius: "3px" }}>
                      <motion.div
                        className="nutrition-bar"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${n.bar}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
                      />
                    </div>
                  </motion.div>
                ))}
              </motion.div>

              {/* Footer */}
              <div style={{ borderTop: "1px solid rgba(255,255,255,0.1)", marginTop: "20px", paddingTop: "14px", fontSize: "0.65rem", color: "rgba(255,255,255,0.4)", lineHeight: 1.6 }}>
                * Percent Daily Values based on a 2,000 calorie diet. Contains caffeine. Not recommended for children, pregnant women, or persons sensitive to caffeine.
              </div>
            </div>
          </motion.div>

          {/* Right: copy */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9 }}
          >
            <div className="section-label">What's Inside</div>
            <h2 className="section-title" style={{ marginBottom: "24px" }}>
              Clean formula.<br />
              <span className="gradient-text">Maximum power.</span>
            </h2>
            <p style={{ color: "rgba(255,255,255,0.55)", lineHeight: 1.8, marginBottom: "40px", maxWidth: "360px" }}>
              KINETIC Grape Grind is engineered with precision — zero sugar, zero junk. Just 200mg of premium caffeine, essential B-vitamins, and powerful taurine for a clean, sustained energy surge.
            </p>

            {/* Key highlights */}
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              {[
                { icon: "⚡", label: "200mg Natural Caffeine", sub: "From green tea extract" },
                { icon: "🧬", label: "B-Vitamin Complex", sub: "B3, B6, B12 for mental clarity" },
                { icon: "💧", label: "Fully Sugar-Free", sub: "0g sugar, 0g artificial sweeteners" },
                { icon: "🔥", label: "1000mg Taurine", sub: "Amino acid for endurance" },
              ].map((item) => (
                <div key={item.label} className="glass" style={{ display: "flex", alignItems: "center", gap: "16px", padding: "16px 20px", borderRadius: "14px", transition: "all 0.3s ease" }}
                  onMouseEnter={e => e.currentTarget.style.borderColor = "rgba(0,245,255,0.25)"}
                  onMouseLeave={e => e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)"}
                >
                  <span style={{ fontSize: "1.4rem" }}>{item.icon}</span>
                  <div>
                    <div style={{ fontWeight: 700, fontSize: "0.9rem", marginBottom: "2px" }}>{item.label}</div>
                    <div style={{ fontSize: "0.75rem", color: "rgba(255,255,255,0.45)" }}>{item.sub}</div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
