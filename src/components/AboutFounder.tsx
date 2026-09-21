import Image from 'next/image';

export default function AboutFounder() {
  return (
    <section className="section" id="about">
      <div className="container">
        <div className="founder-card">
          <div className="founder-grid">
            <div className="founder-img-col">
              <div className="founder-img-glow"></div>
              <div className="founder-img-wrap">
                <Image
                  src="/abhashmishra.png"
                  alt="Abhash Mishra — Founder & CEO of Zumpa"
                  width={460}
                  height={460}
                  className="founder-img"
                  priority
                />
                <div className="founder-badge">
                  <span className="founder-badge-dot"></span>
                  Founder &amp; CEO
                </div>
              </div>
              <div className="founder-loc-pill">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                  <circle cx="12" cy="10" r="3"></circle>
                </svg>
                Agra, Uttar Pradesh, India
              </div>
            </div>

            <div className="founder-bio-col">
              <span className="label">The Vision &amp; Founder</span>
              <h2 className="sec-title founder-title">
                Building India’s Premier Network for Live Events &amp; Creative Talent
              </h2>

              <p className="founder-lead">
                Zumpa was founded by <strong>Abhash Mishra</strong> with a definitive purpose: to democratize how live talent, artists, performers, and event specialists connect with stage opportunities across India.
              </p>

              <blockquote className="founder-quote">
                &ldquo;Every artist deserves a transparent stage, and every host deserves seamless access to verified talent. Zumpa bridges this world with trust, speed, and elegance.&rdquo;
                <footer className="founder-cite">— Abhash Mishra, Founder of Zumpa</footer>
              </blockquote>

              <div className="founder-actions">
                <a
                  href="https://www.linkedin.com/in/abhash-mishra-1a489337/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="founder-social-btn linkedin-btn"
                  title="Abhash Mishra on LinkedIn"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
                  </svg>
                  <span>Connect on LinkedIn</span>
                </a>

                <a
                  href="https://x.com/MRAbhashMishra"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="founder-social-btn x-btn"
                  title="Abhash Mishra on X (Twitter)"
                >
                  <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                  </svg>
                  <span>Follow @MRAbhashMishra</span>
                </a>

                <a
                  href="mailto:support@zumpa.in"
                  className="founder-social-btn email-btn"
                  title="Get in touch with Zumpa"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                  </svg>
                  <span>Contact</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
