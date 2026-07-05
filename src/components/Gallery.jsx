import { motion } from "framer-motion";

const galleryImages = [
  { src: "./images/am-hero.png", label: "Grape Grind", span: "col-span-2 row-span-2", tall: true },
  { src: "./images/am-blue-ice.png", label: "Blue Rush", span: "", tall: false },
  { src: "./images/am-lemon-lime.png", label: "Lemon Lime", span: "", tall: false },
  { src: "./images/am-mango-rush.png", label: "Mango Thunder", span: "", tall: false },
  { src: "./images/am-green-apple.png", label: "Strawberry Surge", span: "", tall: false },
];

export default function Gallery() {
  return (
    <section id="gallery" className="section" style={{ background: "linear-gradient(180deg, #080810 0%, var(--black) 100%)" }}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          style={{ textAlign: "center", marginBottom: "60px" }}
        >
          <div className="section-label">Product Gallery</div>
          <h2 className="section-title">
            Every can is a<br />
            <span className="gradient-text">masterpiece.</span>
          </h2>
        </motion.div>

        {/* Pinterest-like grid */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gridTemplateRows: "auto auto", gap: "16px" }}>
          {/* Featured large */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            style={{ gridColumn: "1", gridRow: "1 / 3", borderRadius: "24px", overflow: "hidden", background: "linear-gradient(135deg, rgba(155,48,255,0.15), rgba(0,245,255,0.05))", border: "1px solid rgba(155,48,255,0.2)", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "40px 20px", minHeight: "420px", position: "relative", cursor: "none" }}
            whileHover={{ borderColor: "rgba(155,48,255,0.5)", boxShadow: "0 0 60px rgba(155,48,255,0.15)" }}
          >
            <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse at center, rgba(155,48,255,0.1), transparent 70%)" }} />
            <motion.img src="./images/am-hero.png" alt="Grape Grind" style={{ height: "280px", objectFit: "contain", position: "relative", zIndex: 1, filter: "drop-shadow(0 0 40px rgba(155,48,255,0.6))" }}
              animate={{ y: [0, -12, 0] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            />
            <div style={{ position: "absolute", bottom: "20px", left: "20px", zIndex: 2 }}>
              <div style={{ fontSize: "0.65rem", letterSpacing: "0.25em", color: "rgba(155,48,255,0.8)", textTransform: "uppercase", fontWeight: 600 }}>Featured</div>
              <div style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: "1.4rem", fontWeight: 900, fontStyle: "italic", color: "white" }}>Grape Grind</div>
            </div>
          </motion.div>

          {/* Other cans */}
          {[
            { src: "./images/am-blue-ice.png", label: "Blue Rush", glow: "#00d4ff", row: "1", col: "2" },
            { src: "./images/am-lemon-lime.png", label: "Lemon Lime", glow: "#c8d232", row: "1", col: "3" },
            { src: "./images/am-mango-rush.png", label: "Mango Thunder", glow: "#ff9900", row: "2", col: "2" },
            { src: "./images/am-green-apple.png", label: "Strawberry Surge", glow: "#ff3355", row: "2", col: "3" },
          ].map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              style={{ gridColumn: item.col, gridRow: item.row, borderRadius: "20px", overflow: "hidden", background: `linear-gradient(135deg, ${item.glow}10, rgba(0,0,0,0.5))`, border: `1px solid ${item.glow}20`, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "24px 16px", cursor: "none", position: "relative" }}
              whileHover={{ borderColor: `${item.glow}50`, boxShadow: `0 0 40px ${item.glow}15`, y: -4 }}
            >
              <img src={item.src} alt={item.label} style={{ height: "140px", objectFit: "contain", filter: `drop-shadow(0 0 20px ${item.glow}50)` }} />
              <div style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: "1rem", fontWeight: 900, fontStyle: "italic", color: "white", marginTop: "12px", textTransform: "uppercase" }}>{item.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
