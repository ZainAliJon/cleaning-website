import './Hero.css';

export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero-bg" aria-hidden="true">
        <div className="blob blob-1" />
        <div className="blob blob-2" />
      </div>

      <div className="container hero-grid">
        <div className="hero-copy">
          <span className="eyebrow">Trusted by 12,000+ homes</span>
          <h1 className="h-display">
            A spotless home,
            <br />
            <span className="hero-accent">without lifting a finger.</span>
          </h1>
          <p className="lead">
            Vetted cleaners, eco-friendly products, and a 100% satisfaction guarantee.
            Book in 60 seconds — we handle the rest.
          </p>

          <form className="hero-quote" onSubmit={(e) => { e.preventDefault(); document.getElementById('book')?.scrollIntoView({ behavior: 'smooth' }); }}>
            <label className="sr-only" htmlFor="hero-zip">ZIP code</label>
            <span className="hero-quote-icon" aria-hidden="true">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
            </span>
            <input id="hero-zip" type="text" inputMode="numeric" placeholder="Enter your ZIP code" required pattern="[0-9]{5}" maxLength={5} />
            <button type="submit" className="btn btn-primary">Get instant quote</button>
          </form>

          <ul className="hero-points">
            <li><Check /> Same-day availability</li>
            <li><Check /> Background-checked pros</li>
            <li><Check /> No contracts, ever</li>
          </ul>
        </div>

        <div className="hero-visual">
          <div className="hero-card hero-card-main">
            <div className="hero-card-img" role="img" aria-label="Clean modern living room">
              <svg viewBox="0 0 400 320" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
                <defs>
                  <linearGradient id="sky" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0" stopColor="#d1fae5"/>
                    <stop offset="1" stopColor="#ecfdf5"/>
                  </linearGradient>
                  <linearGradient id="floor" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0" stopColor="#fef3c7"/>
                    <stop offset="1" stopColor="#fde68a"/>
                  </linearGradient>
                </defs>
                <rect width="400" height="320" fill="url(#sky)"/>
                <rect y="220" width="400" height="100" fill="url(#floor)"/>
                <rect x="60" y="120" width="120" height="100" rx="6" fill="#fff" stroke="#10b981" strokeWidth="2"/>
                <rect x="190" y="160" width="160" height="60" rx="8" fill="#10b981"/>
                <rect x="200" y="140" width="140" height="20" rx="4" fill="#059669"/>
                <circle cx="320" cy="80" r="22" fill="#fcd34d"/>
                <path d="M40 220 Q200 180 360 220" stroke="#34d399" strokeWidth="3" fill="none" opacity="0.5"/>
                <circle cx="100" cy="60" r="4" fill="#fff"/>
                <circle cx="140" cy="40" r="3" fill="#fff"/>
                <circle cx="240" cy="50" r="5" fill="#fff"/>
              </svg>
            </div>
            <div className="hero-card-meta">
              <div>
                <strong>Deep clean — 3BR home</strong>
                <p className="muted">Completed in 2h 45m</p>
              </div>
              <span className="hero-badge">★ 4.9</span>
            </div>
          </div>

          <div className="hero-card hero-card-stat">
            <div className="hero-stat-num">12k+</div>
            <p className="muted">happy customers</p>
          </div>

          <div className="hero-card hero-card-eco">
            <span className="hero-eco-icon" aria-hidden="true">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"/><path d="M2 21c0-3 1.85-5.36 5.08-6"/></svg>
            </span>
            <strong>Eco-friendly</strong>
            <p className="muted">Non-toxic, plant-based</p>
          </div>
        </div>
      </div>
    </section>
  );
}

function Check() {
  return (
    <span className="check" aria-hidden="true">
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
    </span>
  );
}
