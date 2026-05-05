import './Services.css';

const services = [
  {
    title: 'Standard cleaning',
    desc: 'Weekly or bi-weekly maintenance for a consistently fresh home.',
    price: 'From $89',
    features: ['Dust & wipe surfaces', 'Vacuum & mop', 'Bathroom & kitchen', 'Trash removal'],
    icon: <BroomIcon />,
    accent: 'green',
  },
  {
    title: 'Deep cleaning',
    desc: 'Top-to-bottom detail clean for spring or first-time visits.',
    price: 'From $189',
    features: ['Inside cabinets & oven', 'Baseboards & vents', 'Window sills & blinds', 'Detailed scrub'],
    icon: <SparkleIcon />,
    accent: 'amber',
    featured: true,
  },
  {
    title: 'Move in / out',
    desc: 'Make any property show-ready or get your deposit back, stress-free.',
    price: 'From $249',
    features: ['Empty home detail', 'Inside all appliances', 'Wall spot cleaning', 'Full sanitize'],
    icon: <KeyIcon />,
    accent: 'blue',
  },
  {
    title: 'Office & commercial',
    desc: 'Reliable, after-hours cleaning that keeps your team productive.',
    price: 'Custom quote',
    features: ['Workstation sanitize', 'Restrooms & kitchens', 'Trash & recycling', 'Flexible schedule'],
    icon: <BuildingIcon />,
    accent: 'purple',
  },
  {
    title: 'Carpet & upholstery',
    desc: 'Hot-water extraction lifts deep stains and refreshes fabrics.',
    price: 'From $129',
    features: ['Hot-water extraction', 'Stain treatment', 'Pet odor removal', 'Fast dry-time'],
    icon: <RugIcon />,
    accent: 'pink',
  },
  {
    title: 'Window cleaning',
    desc: 'Streak-free interior and exterior glass, screens included.',
    price: 'From $99',
    features: ['Interior + exterior', 'Screens cleaned', 'Sills & tracks', 'Up to 2 stories'],
    icon: <WindowIcon />,
    accent: 'teal',
  },
];

export default function Services() {
  return (
    <section className="services section" id="services">
      <div className="container">
        <div className="section-head center">
          <span className="eyebrow">Our services</span>
          <h2 className="h-section">Cleaning, tailored to every space</h2>
          <p className="lead" style={{ marginTop: 'var(--space-4)' }}>
            From weekly tidy-ups to deep restorative cleans — pick a service or mix and match.
          </p>
        </div>

        <div className="services-grid">
          {services.map(s => (
            <article key={s.title} className={`service-card ${s.featured ? 'featured' : ''}`} data-accent={s.accent}>
              {s.featured && <span className="service-tag">Most popular</span>}
              <div className="service-icon" aria-hidden="true">{s.icon}</div>
              <h3 className="service-title">{s.title}</h3>
              <p className="service-desc">{s.desc}</p>
              <ul className="service-features">
                {s.features.map(f => <li key={f}><Tick /> {f}</li>)}
              </ul>
              <div className="service-foot">
                <span className="service-price">{s.price}</span>
                <a href="#book" className="service-link">
                  Book <span aria-hidden="true">→</span>
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Tick() {
  return (
    <span className="tick" aria-hidden="true">
      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
    </span>
  );
}

function BroomIcon() {
  return <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19.36 2.72L21 4.36 16.36 9l-1.64-1.64z"/><path d="M14 6L10 10l4 4 4-4z"/><path d="M10 14l-7 7"/><path d="M14 14L7 21"/></svg>;
}
function SparkleIcon() {
  return <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3v3M12 18v3M3 12h3M18 12h3M5.6 5.6l2.1 2.1M16.3 16.3l2.1 2.1M5.6 18.4l2.1-2.1M16.3 7.7l2.1-2.1"/><circle cx="12" cy="12" r="2.5"/></svg>;
}
function KeyIcon() {
  return <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="7.5" cy="14.5" r="3.5"/><path d="M10 12l11-11M16 6l3 3M14 8l3 3"/></svg>;
}
function BuildingIcon() {
  return <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="4" y="3" width="16" height="18" rx="1.5"/><path d="M9 7h2M13 7h2M9 11h2M13 11h2M9 15h2M13 15h2"/></svg>;
}
function RugIcon() {
  return <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="6" width="18" height="12" rx="1"/><path d="M3 9h18M3 15h18M7 6v12M17 6v12"/></svg>;
}
function WindowIcon() {
  return <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="1.5"/><path d="M3 12h18M12 3v18"/></svg>;
}
