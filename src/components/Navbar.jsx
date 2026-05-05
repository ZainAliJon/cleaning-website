import { useEffect, useState } from 'react';
import './Navbar.css';

const links = [
  { href: '#services',     label: 'Services' },
  { href: '#process',      label: 'How it works' },
  { href: '#pricing',      label: 'Pricing' },
  { href: '#testimonials', label: 'Reviews' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  const close = () => setOpen(false);

  return (
    <header className={`nav ${scrolled ? 'is-scrolled' : ''} ${open ? 'is-open' : ''}`}>
      <div className="container nav-inner">
        <a href="#top" className="nav-brand" onClick={close} aria-label="SparkleClean home">
          <span className="nav-mark" aria-hidden="true">
            <svg viewBox="0 0 32 32" width="28" height="28">
              <circle cx="16" cy="16" r="14" fill="currentColor" />
              <path d="M16 8l2 5 5 .7-3.7 3.5.9 5.1L16 19.8l-4.5 2.5.9-5.1L8.7 13.7 13.7 13z" fill="#fff" />
            </svg>
          </span>
          <span className="nav-name">SparkleClean</span>
        </a>

        <nav className="nav-links" aria-label="Primary">
          {links.map(l => (
            <a key={l.href} href={l.href}>{l.label}</a>
          ))}
        </nav>

        <div className="nav-cta">
          <a href="tel:+18005550199" className="nav-phone" aria-label="Call us">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
            (800) 555-0199
          </a>
          <a href="#book" className="btn btn-primary">Book now</a>
        </div>

        <button
          className="nav-toggle"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          onClick={() => setOpen(o => !o)}
        >
          <span /><span /><span />
        </button>
      </div>

      <div className={`nav-drawer ${open ? 'show' : ''}`} role="dialog" aria-modal="true">
        <nav className="nav-drawer-links" aria-label="Mobile">
          {links.map(l => (
            <a key={l.href} href={l.href} onClick={close}>{l.label}</a>
          ))}
          <a href="#book" className="btn btn-primary btn-lg btn-block" onClick={close}>Book now</a>
          <a href="tel:+18005550199" className="nav-drawer-phone" onClick={close}>(800) 555-0199</a>
        </nav>
      </div>
    </header>
  );
}
