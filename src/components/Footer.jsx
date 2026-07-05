import { Zap, Camera, MessageCircle, Play, Mail, Phone, User } from "lucide-react";

const navLinks = {
  Shop: ["All Flavors", "Bundles", "Merch", "Gift Cards"],
  Company: ["About Us", "Careers", "Press", "Sustainability"],
  "Customer Care": ["FAQ", "Shipping & Returns", "Track Order", "Contact Us"],
};

const socials = [
  { Icon: Camera, href: "#", label: "Instagram" },
  { Icon: MessageCircle, href: "#", label: "Twitter" },
  { Icon: Play, href: "#", label: "YouTube" },
];

export default function Footer() {
  return (
    <footer id="contact" style={{ background: "#030303", borderTop: "1px solid rgba(255,255,255,0.05)", paddingTop: "80px" }}>
      <div className="container">
        {/* Top row */}
        <div style={{ display: "grid", gridTemplateColumns: "1.5fr 1fr 1fr 1fr", gap: "48px", paddingBottom: "60px", borderBottom: "1px solid rgba(255,255,255,0.05)" }}>
          {/* Brand column */}
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "24px" }}>
              <Zap size={20} style={{ color: "var(--cyan)", filter: "drop-shadow(0 0 8px var(--cyan))" }} />
              <span style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 900, fontSize: "1.4rem", fontStyle: "italic", letterSpacing: "0.2em" }}>KINETIC</span>
            </div>
            <p style={{ color: "rgba(255,255,255,0.4)", fontSize: "0.85rem", lineHeight: 1.7, marginBottom: "24px", maxWidth: "240px" }}>
              Premium performance energy drinks crafted for those who refuse to settle. Zero compromise. Pure power.
            </p>
            {/* Contact info */}
            <div style={{ display: "flex", flexDirection: "column", gap: "10px", marginBottom: "24px" }}>
              {[
                { Icon: Phone, text: "+1 (555) 000-FUEL" },
                { Icon: Mail, text: "hello@kineticenergy.co" },
                { Icon: User, text: "linkedin.com/in/kinetic" },
              ].map(({ Icon, text }) => (
                <div key={text} style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                  <Icon size={14} style={{ color: "var(--cyan)", flexShrink: 0 }} />
                  <span style={{ fontSize: "0.78rem", color: "rgba(255,255,255,0.45)" }}>{text}</span>
                </div>
              ))}
            </div>
            {/* Socials */}
            <div style={{ display: "flex", gap: "12px" }}>
              {socials.map(({ Icon, href, label }) => (
                <a key={label} href={href} aria-label={label}
                  style={{ width: "36px", height: "36px", borderRadius: "10px", border: "1px solid rgba(255,255,255,0.1)", display: "flex", alignItems: "center", justifyContent: "center", color: "rgba(255,255,255,0.5)", transition: "all 0.3s ease" }}
                  onMouseEnter={e => { e.currentTarget.style.borderColor = "rgba(0,245,255,0.4)"; e.currentTarget.style.color = "var(--cyan)"; e.currentTarget.style.boxShadow = "0 0 15px rgba(0,245,255,0.2)"; }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.1)"; e.currentTarget.style.color = "rgba(255,255,255,0.5)"; e.currentTarget.style.boxShadow = "none"; }}
                >
                  <Icon size={15} />
                </a>
              ))}
            </div>
          </div>

          {/* Nav link columns */}
          {Object.entries(navLinks).map(([col, links]) => (
            <div key={col}>
              <div style={{ fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.25em", textTransform: "uppercase", color: "white", marginBottom: "20px" }}>{col}</div>
              {links.map((link) => (
                <a key={link} href="#" className="footer-link">{link}</a>
              ))}
            </div>
          ))}
        </div>

        {/* Bottom */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "24px 0", flexWrap: "wrap", gap: "16px" }}>
          <p style={{ fontSize: "0.75rem", color: "rgba(255,255,255,0.25)" }}>
            © 2026 KINETIC Energy. Crafted with passion by Malik. All rights reserved.
          </p>
          <div style={{ display: "flex", gap: "24px" }}>
            {["Privacy Policy", "Terms of Use", "Cookie Policy"].map((l) => (
              <a key={l} href="#" style={{ fontSize: "0.72rem", color: "rgba(255,255,255,0.3)", transition: "color 0.3s ease", textDecoration: "none" }}
                onMouseEnter={e => e.currentTarget.style.color = "var(--cyan)"}
                onMouseLeave={e => e.currentTarget.style.color = "rgba(255,255,255,0.3)"}
              >{l}</a>
            ))}
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
            <div style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#22c55e", boxShadow: "0 0 8px #22c55e" }} />
            <span style={{ fontSize: "0.7rem", color: "rgba(255,255,255,0.3)" }}>All systems operational</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
