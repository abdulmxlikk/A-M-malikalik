import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
  { q: "How much caffeine does KINETIC contain?", a: "KINETIC Grape Grind contains 200mg of natural caffeine per 355ml can — derived from premium green tea extract. That's equivalent to about two medium-strength espresso shots." },
  { q: "Is KINETIC sugar-free?", a: "Yes! Every KINETIC flavor contains 0g of sugar and 0g of artificial sweeteners. We use only natural flavor enhancers to deliver that bold, satisfying taste." },
  { q: "How long does the energy last?", a: "Most users report 4–6 hours of sustained, clean energy with zero crash. The B-vitamin complex plus caffeine combination creates a smooth, extended energy curve unlike traditional energy drinks." },
  { q: "Is it safe to drink daily?", a: "KINETIC is formulated for healthy adults. We recommend no more than 1–2 cans per day. Not recommended for persons under 18, pregnant or nursing women, or those sensitive to caffeine." },
  { q: "Do you ship internationally?", a: "Yes! We currently ship to over 40+ countries. International orders typically arrive within 7–14 business days. Free shipping on orders $40+." },
  { q: "What makes KINETIC different from other energy drinks?", a: "Premium natural caffeine + B-vitamin complex + taurine + zero sugar + zero crash. We spent 3 years developing a formula that actually tastes incredible while delivering elite-tier performance." },
];

export default function FAQ() {
  const [openIdx, setOpenIdx] = useState(null);

  return (
    <section id="faq" className="section" style={{ background: "linear-gradient(180deg, var(--black) 0%, #080810 50%, var(--black) 100%)" }}>
      <div className="container" style={{ maxWidth: "760px" }}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          style={{ textAlign: "center", marginBottom: "60px" }}
        >
          <div className="section-label">Got Questions?</div>
          <h2 className="section-title">Frequently asked.</h2>
        </motion.div>

        <div>
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="faq-item"
            >
              <button
                className="faq-question"
                style={{ width: "100%", background: "none", border: "none", color: openIdx === i ? "var(--cyan)" : "white" }}
                onClick={() => setOpenIdx(openIdx === i ? null : i)}
              >
                <span style={{ fontSize: "0.95rem", fontWeight: 600, textAlign: "left", flex: 1, paddingRight: "20px" }}>
                  {faq.q}
                </span>
                <motion.div
                  animate={{ rotate: openIdx === i ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  style={{ color: openIdx === i ? "var(--cyan)" : "rgba(255,255,255,0.4)", flexShrink: 0 }}
                >
                  <ChevronDown size={18} />
                </motion.div>
              </button>

              <AnimatePresence>
                {openIdx === i && (
                  <motion.div
                    className="faq-answer"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.35, ease: "easeInOut" }}
                  >
                    <p style={{ paddingTop: "16px", paddingBottom: "8px" }}>{faq.a}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
