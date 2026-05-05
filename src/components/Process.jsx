import './Process.css';

const steps = [
  { n: '01', title: 'Tell us about your home', desc: 'Pick a service, share size and any special requests. Takes under a minute.' },
  { n: '02', title: 'Choose a time that fits', desc: 'See real-time availability. Same-day slots available in most areas.' },
  { n: '03', title: 'Relax — we clean', desc: 'A vetted, insured team arrives on time with eco-friendly supplies.' },
  { n: '04', title: 'Love it, guaranteed', desc: 'Not 100% happy? We come back free of charge within 24 hours.' },
];

export default function Process() {
  return (
    <section className="process section" id="process">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">How it works</span>
          <h2 className="h-section">Booking takes less than a minute</h2>
          <p className="lead" style={{ marginTop: 'var(--space-4)' }}>
            A frictionless flow from quote to clean. No phone tag, no surprises.
          </p>
        </div>

        <ol className="process-steps">
          {steps.map(s => (
            <li key={s.n} className="process-step">
              <div className="process-num">{s.n}</div>
              <h3 className="process-title">{s.title}</h3>
              <p className="process-desc">{s.desc}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
