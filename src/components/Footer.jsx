import './Footer.css';

const cols = [
  {
    title: 'Services',
    links: [
      ['Standard cleaning', '#services'],
      ['Deep cleaning', '#services'],
      ['Move in / out', '#services'],
      ['Office cleaning', '#services'],
      ['Carpet cleaning', '#services'],
    ],
  },
  {
    title: 'Company',
    links: [
      ['How it works', '#process'],
      ['Pricing', '#pricing'],
      ['Reviews', '#testimonials'],
      ['Careers', '#'],
      ['Press', '#'],
    ],
  },
  {
    title: 'Support',
    links: [
      ['Help center', '#'],
      ['Contact us', '#book'],
      ['Refund policy', '#'],
      ['Privacy', '#'],
      ['Terms', '#'],
    ],
  },
];

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand-col">
            <a href="#top" className="footer-brand">
              <span className="footer-mark" aria-hidden="true">
                <svg viewBox="0 0 32 32" width="32" height="32">
                  <circle cx="16" cy="16" r="14" fill="currentColor"/>
                  <path d="M16 8l2 5 5 .7-3.7 3.5.9 5.1L16 19.8l-4.5 2.5.9-5.1L8.7 13.7 13.7 13z" fill="#fff"/>
                </svg>
              </span>
              SparkleClean
            </a>
            <p className="footer-tagline">
              Premium home cleaning services. Trusted by 12,000+ homes across 28 cities.
            </p>
            <div className="footer-social">
              <a href="#" aria-label="Instagram"><InstagramIcon /></a>
              <a href="#" aria-label="Twitter"><TwitterIcon /></a>
              <a href="#" aria-label="Facebook"><FacebookIcon /></a>
              <a href="#" aria-label="TikTok"><TikTokIcon /></a>
            </div>
          </div>

          {cols.map(c => (
            <div key={c.title} className="footer-col">
              <h4 className="footer-col-title">{c.title}</h4>
              <ul>
                {c.links.map(([label, href]) => (
                  <li key={label}><a href={href}>{label}</a></li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} SparkleClean. All rights reserved.</p>
          <p className="footer-bottom-meta">
            Crafted with care · <a href="#book">Book a clean →</a>
          </p>
        </div>
      </div>
    </footer>
  );
}

function InstagramIcon() {
  return <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>;
}
function TwitterIcon() {
  return <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2H21l-6.52 7.45L22 22h-6.844l-5.36-6.99L3.5 22H1l7.04-8.04L1 2h7l4.84 6.4L18.244 2zm-1.2 18h1.62L7.05 4H5.32l11.724 16z"/></svg>;
}
function FacebookIcon() {
  return <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>;
}
function TikTokIcon() {
  return <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5.8 20.1a6.34 6.34 0 0 0 10.86-4.43V8.93a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1.84-.36z"/></svg>;
}
