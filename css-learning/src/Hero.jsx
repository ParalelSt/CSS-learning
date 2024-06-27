export default function Hero() {
  return (
    <div className="hero-container">
      <section className="hero">
        <div className="left-section">
          <div className="reviews-container">
            <span className="star-count">
              <img src="Star.svg" alt="" />
              <img src="Star.svg" alt="" />
              <img src="Star.svg" alt="" />
              <img src="Star.svg" alt="" />
              <img src="Star.svg" alt="" />
            </span>
            <span className="review-section">
              4.7 FROM 3300+ HAPPY CUSTOMERS
            </span>
          </div>
          <p className="section-title">New Caramelised Biscuit flavour live!</p>
          <p className="section-comment">Fuel your day with protein cereal</p>
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
          <button className="shop-now-btn">SHOP NOW</button>
          <p>Join 40,000+ who made the switch</p>
        </div>
        <div className="right-section">
          <img src="Cereal_preview.webp" alt="cereal-preview" />
        </div>
      </section>
    </div>
  );
}
