import Link from 'next/link';

export default function Footer() {
  return (
    <footer>
      <div className="footer-inner">
        <div className="footer-logo">Zumpa</div>
        <div className="footer-links">
          <Link href="/#about">About Founder</Link>
          <Link href="/terms">Terms of Service</Link>
          <Link href="/privacy">Privacy Policy</Link>
          <Link href="/delete-account">Delete Account</Link>
          <a href="mailto:support@zumpa.in">support@zumpa.in</a>
        </div>
        <div className="footer-social">
          <a
            href="https://www.instagram.com/zumpaofficial/"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-social-link instagram"
            aria-label="Zumpa on Instagram"
            title="Follow Zumpa on Instagram"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
              <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
            </svg>
          </a>
          <a
            href="https://www.linkedin.com/company/zumpa/"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-social-link linkedin"
            aria-label="Zumpa on LinkedIn"
            title="Follow Zumpa on LinkedIn"
          >
            <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor">
              <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
            </svg>
          </a>
        </div>
        <p className="footer-copy">© 2026 Zumpa. Founded by Abhash Mishra. All rights reserved. · Agra, Uttar Pradesh, India</p>
      </div>
    </footer>
  );
}

