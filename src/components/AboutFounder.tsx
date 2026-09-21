import Image from 'next/image';

export default function AboutFounder() {
  return (
    <section className="section" id="about">
      <div className="container">
        <div className="founder-card">
          <div className="founder-grid">
            {/* Left Column: Founder Identity */}
            <div className="founder-profile-col">
              <div className="founder-img-glow"></div>
              <div className="founder-frame">
                <Image
                  src="/abhashmishra.png"
                  alt="Abhash Mishra — Founder & CEO of Zumpa"
                  width={340}
                  height={340}
                  className="founder-portrait"
                  priority
                />
              </div>

              <div className="founder-identity">
                <h3 className="founder-name">Abhash Mishra</h3>
                <p className="founder-role">Founder &amp; CEO · Zumpa</p>
              </div>
            </div>

            {/* Right Column: Narrative & Mission */}
            <div className="founder-narrative-col">
              <span className="label">The Founder&apos;s Vision</span>
              <h2 className="sec-title founder-headline">
                Reimagining the entertainment industry for gig professionals.
              </h2>

              <p className="founder-story">
                Zumpa was conceived and built by <strong>Abhash Mishra</strong>{' '}to solve a fundamental challenge in the entertainment and event industry: middleman friction and opaque booking practices. Zumpa empowers creative professionals and gig specialists with direct stage discovery, while providing event hosts a verified, seamless platform to hire exceptional talent with confidence.
              </p>

              <div className="founder-quote-box">
                <span className="quote-mark" aria-hidden="true">&ldquo;</span>
                <p className="quote-text">
                  We are reimagining the entertainment industry by empowering gig and event professionals. Our mission with Zumpa is to provide a transparent, friction-free stage where creative talent thrives, and hosts book verified pros with total confidence.
                </p>
                <div className="quote-by">
                  <span className="quote-author">Abhash Mishra</span>
                  <span className="quote-divider">·</span>
                  <span className="quote-title">Founder &amp; CEO, Zumpa</span>
                </div>
              </div>

              <div className="founder-actions">
                <a
                  href="https://www.linkedin.com/in/abhash-mishra-1a489337/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="founder-social-btn linkedin-btn"
                  title="Abhash Mishra on LinkedIn"
                >
                  <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor">
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
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                  </svg>
                  <span>Follow @MRAbhashMishra</span>
                </a>

                <a
                  href="mailto:support@zumpa.in"
                  className="founder-social-btn email-btn"
                  title="Contact Founder via Email"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
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
