import { useState, useEffect, useRef } from "react";
import { ShoppingCart, Menu, X, Zap } from "lucide-react";

const links = ["Home", "Shop", "Flavors", "Scenes", "About", "Contact"];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <div className="container flex items-center justify-between">
        {/* Logo */}
        <a href="#hero" className="flex items-center gap-2 cursor-none group">
          <div className="relative">
            <Zap
              size={22}
              className="text-cyan-400"
              style={{ filter: "drop-shadow(0 0 8px #00f5ff)" }}
            />
          </div>
          <span
            className="font-display font-black text-xl italic tracking-widest text-white"
            style={{ fontFamily: "'Barlow Condensed', sans-serif", letterSpacing: "0.25em" }}
          >
            KINETIC
          </span>
        </a>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="nav-link"
            >
              {link}
            </a>
          ))}
        </div>

        {/* Cart */}
        <div className="flex items-center gap-4">
          <button
            className="relative cursor-none p-2 transition-all duration-300 hover:scale-110"
            style={{ color: "rgba(255,255,255,0.7)" }}
            aria-label="Cart"
          >
            <ShoppingCart
              size={22}
              className="hover:text-cyan-400"
              style={{ transition: "filter 0.3s ease, color 0.3s ease" }}
            />
            <span
              className="absolute -top-1 -right-1 w-4 h-4 rounded-full text-[9px] font-bold flex items-center justify-center text-black"
              style={{ background: "linear-gradient(135deg, #00f5ff, #9b30ff)" }}
            >
              2
            </span>
          </button>

          {/* Mobile hamburger */}
          <button
            className="md:hidden cursor-none p-2 text-white"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Menu"
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div
          className="md:hidden"
          style={{
            background: "rgba(5,5,5,0.95)",
            backdropFilter: "blur(20px)",
            borderTop: "1px solid rgba(255,255,255,0.06)",
            padding: "20px 40px 30px",
          }}
        >
          {links.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="nav-link"
              style={{ display: "block", padding: "12px 0", borderBottom: "1px solid rgba(255,255,255,0.04)" }}
              onClick={() => setMobileOpen(false)}
            >
              {link}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}
