import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Check } from "lucide-react";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      setSent(true);
      setEmail("");
    }
  };

  return (
    <section id="newsletter" className="section" style={{ background: "linear-gradient(135deg, rgba(155,48,255,0.06) 0%, rgba(0,245,255,0.03) 100%)" }}>
      <div className="container" style={{ maxWidth: "680px", textAlign: "center" }}>
        {/* Decorative top line */}
        <div style={{ width: "60px", height: "1px", background: "linear-gradient(90deg, transparent, var(--cyan))", margin: "0 auto 24px" }} />

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="section-label" style={{ textAlign: "center" }}>Stay Charged</div>
          <h2 className="section-title" style={{ marginBottom: "16px" }}>
            Join the<br />
            <span className="gradient-text">KINETIC Circle.</span>
          </h2>
          <p style={{ color: "rgba(255,255,255,0.5)", marginBottom: "40px", lineHeight: 1.7 }}>
            Early drops, exclusive deals, and the insider pulse from the KINETIC universe — sent straight to your inbox.
          </p>

          {/* Perks */}
          <div style={{ display: "flex", justifyContent: "center", gap: "28px", marginBottom: "40px", flexWrap: "wrap" }}>
            {["Early Access", "Exclusive Deals", "Free Shipping"].map((p) => (
              <div key={p} style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                <div style={{ width: "18px", height: "18px", borderRadius: "50%", background: "rgba(0,245,255,0.15)", border: "1px solid rgba(0,245,255,0.4)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <Check size={10} style={{ color: "var(--cyan)" }} />
                </div>
                <span style={{ fontSize: "0.8rem", color: "rgba(255,255,255,0.6)", fontWeight: 500 }}>{p}</span>
              </div>
            ))}
          </div>

          {!sent ? (
            <form onSubmit={handleSubmit} style={{ display: "flex", gap: "12px", maxWidth: "500px", margin: "0 auto" }}>
              <input
                type="email"
                className="newsletter-input"
                placeholder="Enter your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <button type="submit" className="btn-primary" style={{ whiteSpace: "nowrap", flexShrink: 0 }}>
                Subscribe <ArrowRight size={15} />
              </button>
            </form>
          ) : (
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="glass"
              style={{ display: "inline-flex", alignItems: "center", gap: "12px", padding: "16px 28px", borderRadius: "100px", border: "1px solid rgba(0,245,255,0.3)", color: "var(--cyan)" }}
            >
              <Check size={18} /> You're in! Welcome to the KINETIC Circle. ⚡
            </motion.div>
          )}
          <p style={{ marginTop: "16px", fontSize: "0.72rem", color: "rgba(255,255,255,0.25)" }}>
            No spam, ever. Unsubscribe anytime. We respect your data.
          </p>
        </motion.div>

        {/* Decorative bottom line */}
        <div style={{ width: "60px", height: "1px", background: "linear-gradient(90deg, var(--purple), transparent)", margin: "40px auto 0" }} />
      </div>
    </section>
  );
}
