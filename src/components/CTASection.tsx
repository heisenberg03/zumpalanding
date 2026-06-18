export default function CTASection() {
  return (
    <section className="section cta-section" id="download">
      <div className="container">
        <div className="cta-box">
          <h2 className="cta-title">Ready to make some noise?</h2>
          <p className="cta-sub">Join event hosts and artists already on Zumpa.</p>
          <div className="btn-row">
            <a href="https://apps.apple.com/app/id6761260769" className="dl-btn" target="_blank" rel="noopener noreferrer">
              <svg className="dl-icon" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
              </svg>
              <div><span className="dl-sm">Download on the</span><span className="dl-lg">App Store</span></div>
            </a>
            <a href="https://play.google.com/store/apps/details?id=com.zumpa.zumpa" className="dl-btn" target="_blank" rel="noopener noreferrer">
              <svg className="dl-icon" viewBox="0 0 24 24" fill="currentColor">
                <path d="M3.18 23.76A2 2 0 0 1 2 22V2c0-.75.42-1.42 1.08-1.76l11.03 11.76L3.18 23.76zm15.42-8.65-2.36-2.52-9.81 5.58 12.17-3.06zm-12.17-9.44 9.81 5.58 2.36-2.52L6.43 5.67zm14.57 7.83-2.19-2.5-2.43-1.37-9.61-5.46-1.19 1.27 11.03 11.76 1.19 1.27 4.2-2.37z"/>
              </svg>
              <div><span className="dl-sm">Get it on</span><span className="dl-lg">Google Play</span></div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
