export default function Features() {
  return (
    <section className="section" id="features">
      <div className="container">
        <span className="label">App Features</span>
        <h2 className="sec-title">Everything in one place —<br/>no middlemen required</h2>
        <div className="feat-grid">
          <div className="f-card">
            <div className="f-icon">📋</div><h3 className="f-title">Direct Booking Hub</h3>
            <p className="f-desc">Manage every aspect of your gig pipeline. From applications to confirmed bookings, everything is organized in one intuitive dashboard.</p>
          </div>
          <div className="f-card">
            <div className="f-icon">🌟</div><h3 className="f-title">On-Demand Visibility</h3>
            <p className="f-desc">Control your schedule. Artists can toggle Professional Mode to immediately appear in search results when looking for work.</p>
          </div>
          <div className="f-card">
            <div className="f-icon">🖼️</div><h3 className="f-title">Verified Portfolios</h3>
            <p className="f-desc">Make decisions with confidence. Review rich media portfolios, past experience, and authentic reviews before making a commitment.</p>
          </div>
          <div className="f-card">
            <div className="f-icon">⭐</div><h3 className="f-title">Trust & Transparency</h3>
            <p className="f-desc">A two-way rating system ensures accountability. Hosts and professionals review each other, cultivating a high-quality community.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
