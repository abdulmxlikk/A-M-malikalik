import { useState, useRef, useEffect } from "react";
import gsap from "gsap";

const flavors = [
  {
    id: 1,
    name: "Classic Original",
    tag: "Boost Your Energy",
    image: "/images/am-berry-blast.png", // Reusing the black/red can
    colors: ["#1a1a1a", "#e6192a"],
    accent: "rgba(230, 25, 42, 0.3)",
    glow: "rgba(230, 25, 42, 0.15)",
    description:
      "The legendary A M original. A powerful blend built to wake up your senses instantly. Perfect for intense workouts where focus is everything. Clean finish, zero aftertaste.",
    profile: "Classic / Smooth / Intense"
  },
  {
    id: 2,
    name: "Lemon Lime",
    tag: "For Active People",
    image: "/images/am-lemon-lime.png",
    colors: ["#e8e24e", "#7ecb3c"],
    accent: "rgba(200, 210, 50, 0.3)",
    glow: "rgba(200, 210, 50, 0.15)",
    description:
      "A sharp, electric fusion of zesty lemon and sweet lime. All natural ingredients that keep you energized, focused and ready to take on any challenge.",
    profile: "Citrus / Sharp / Refreshing"
  },
  {
    id: 3,
    name: "Blue Rush",
    tag: "Electric Cool",
    image: "/images/am-blue-ice.png",
    colors: ["#0044ff", "#00d4ff"],
    accent: "rgba(0, 212, 255, 0.3)",
    glow: "rgba(0, 212, 255, 0.15)",
    description:
      "Pure deep berry refreshment. A frosty, sweet rush of blue raspberry that cools you down while hyping you up. The ultimate heat-beater for extreme pressure.",
    profile: "Blue Raspberry / Frosty / Sweet"
  },
  {
    id: 4,
    name: "Grape Blast",
    tag: "Bold Flavor",
    image: "/images/am-mango-rush.png", // Placeholder until they upload the purple can to Vercel
    colors: ["#6600cc", "#9933ff"],
    accent: "rgba(102, 0, 204, 0.3)",
    glow: "rgba(102, 0, 204, 0.15)",
    description:
      "A sudden blast of deep, rich grape flavor combined with the unmistakable A M energy rush. Sweet, powerful, and aggressively refreshing.",
    profile: "Dark Grape / Sweet / Bold"
  },
  {
    id: 5,
    name: "Strawberry",
    tag: "Sweet Raspberry / Strawberry",
    image: "/images/am-green-apple.png", // Placeholder until red can is uploaded
    colors: ["#ff0033", "#ff6666"],
    accent: "rgba(255, 0, 51, 0.3)",
    glow: "rgba(255, 0, 51, 0.15)",
    description:
      "Fresh, juicy, and undeniable. The bright bite of fresh strawberries balancing out a smooth energy boost. Highly addictive and built for pure focus.",
    profile: "Wild Berry / Juicy / Ripe"
  }
];

export default function Flavors() {
  const [activeIdx, setActiveIdx] = useState(0);
  const activeFlavor = flavors[activeIdx];
  const canRef = useRef(null);
  const detailsRef = useRef(null);

  const handleSelect = (idx) => {
    if (idx === activeIdx) return;
    
    // Animate out
    gsap.to([canRef.current, detailsRef.current], {
      opacity: 0,
      y: 15,
      duration: 0.2,
      onComplete: () => {
        setActiveIdx(idx);
        // Animate in
        gsap.fromTo(
          [canRef.current, detailsRef.current],
          { opacity: 0, y: -15 },
          { opacity: 1, y: 0, duration: 0.4, ease: "power2.out", stagger: 0.05 }
        );
      }
    });
  };

  return (
    <section className="section" id="flavors">
      <div className="container">
        <div className="fade-up">
          <div className="section-eyebrow">The Collection</div>
          <h2 className="section-title">
            Five bold flavors. One unstoppable energy.
          </h2>
        </div>

        {/* Big Detail View */}
        <div
          className="flavor-showcase fade-up"
          style={{
            "--flavor-accent": activeFlavor.accent,
            "--flavor-glow": activeFlavor.glow
          }}
        >
          <div className="flavor-showcase-image" ref={canRef}>
            <div className="glow-backdrop" />
            <img
              src={activeFlavor.image}
              alt={activeFlavor.name}
              className="big-can-img"
            />
          </div>

          <div className="flavor-showcase-details" ref={detailsRef}>
            <div className="flavor-tag-large">{activeFlavor.tag}</div>
            <h3 className="flavor-name-large">{activeFlavor.name}</h3>
            
            <div className="flavor-colors-large">
              {activeFlavor.colors.map((c, i) => (
                <span
                  key={i}
                  className="flavor-dot-large"
                  style={{ background: c }}
                  title={`Color: ${c}`}
                />
              ))}
            </div>

            <p className="flavor-long-desc">{activeFlavor.description}</p>
            
            <div className="flavor-profile">
              <span className="profile-label">Taste Profile:</span>
              <span className="profile-value">{activeFlavor.profile}</span>
            </div>
          </div>
        </div>

        {/* Thumbnail Selector */}
        <div className="flavors-selector fade-up">
          {flavors.map((flavor, idx) => (
            <button
              key={flavor.id}
              className={`flavor-thumb ${idx === activeIdx ? "active" : ""}`}
              onClick={() => handleSelect(idx)}
              style={{
                "--thumb-accent": flavor.accent
              }}
            >
              <img src={flavor.image} alt={flavor.name} />
              <div className="thumb-name">{flavor.name}</div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
