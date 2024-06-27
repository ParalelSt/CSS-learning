import React from "react";

export default function Hero() {
  return (
    <div className="hero-container">
      <section className="hero">
        <div className="left-section">
          <div className="reviews-container"></div>
          <h1 className="section-title">
            New Caramelised Biscuit falvour live!
          </h1>
          <h3 className="section-comment">Fuel your day with protein cereal</h3>
          <div className="section-images">
            <img src="icon-high-protein.webp" alt="high-protein" />
            <img src="icon-high-fibre.webp" alt="high-fibre" />
            <img src="icon-low-sugar.webp" alt="low-sugar" />
            <img
              src="Eleat-Iconography-Core-Blue-Gut-Friendly.webp"
              alt="gut-friendly"
            />
            <img
              src="Eleat-Iconography-Core-Blue-Gluten-Free.webp"
              alt="gluten-free"
            />
            <img
              src="Eleat-Iconography-Core-Blue-Vegan-Friendly.webp"
              alt="vegan-friendly"
            />
          </div>
        </div>
        <div className="right-section"></div>
        <div className="right-section">
          <img src="Cereal_preview.webp" alt="cereal-preview" />
        </div>
      </section>
    </div>
  );
}
