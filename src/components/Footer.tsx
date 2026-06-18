import Link from 'next/link';

export default function Footer() {
  return (
    <footer>
      <div className="footer-inner">
        <div className="footer-logo">Zumpa</div>
        <div className="footer-links">
          <Link href="/terms">Terms of Service</Link>
          <Link href="/privacy">Privacy Policy</Link>
          <Link href="/delete-account">Delete Account</Link>
          <a href="mailto:support@zumpa.in">support@zumpa.in</a>
        </div>
        <p className="footer-copy">© 2026 Zumpa. All rights reserved. · Agra, Uttar Pradesh, India</p>
      </div>
    </footer>
  );
}
