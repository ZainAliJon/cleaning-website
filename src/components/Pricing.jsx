import { useState } from 'react';
import './Pricing.css';

const plans = [
  {
    name: 'Essential',
    desc: 'Perfect for studios & 1-bed homes',
    monthly: 89,
    biweekly: 79,
    weekly: 69,
    features: [
      'Up to 3 hours per visit',
      '1 cleaner',
      'Standard checklist',
      'Eco-friendly products',
      'Online scheduling',
    ],
  },
  {
    name: 'Family',
    desc: 'Most popular for 2–3 bed homes',
    monthly: 149,
    biweekly: 129,
    weekly: 109,
    featured: true,
    features: [
      'Up to 5 hours per visit',
      '2 cleaners',
      'Full checklist + add-ons',
      'Same team every visit',
      'Priority booking',
      'Free re-clean guarantee',
    ],
  },
  {
    name: 'Premier',
    desc: 'Large homes & full-detail care',
    monthly: 219,
    biweekly: 189,
    weekly: 159,
    features: [
      'Unlimited hours',
      '3 cleaners',
      'Custom checklist',
      'Dedicated account manager',
      'Same-day rescheduling',
      'Quarterly deep clean included',
    ],
  },
];

const tabs = [
  { key: 'monthly',  label: 'Monthly' },
  { key: 'biweekly', label: 'Bi-weekly', save: 'Save 13%' },
  { key: 'weekly',   label: 'Weekly',    save: 'Save 23%' },
];

export default function Pricing() {
  const [billing, setBilling] = useState('biweekly');

  return (
    <section className="pricing section" id="pricing">
      <div className="container">
        <div className="section-head center">
          <span className="eyebrow">Pricing</span>
          <h2 className="h-section">Simple, honest pricing</h2>
          <p className="lead" style={{ marginTop: 'var(--space-4)' }}>
            Save more when you book recurring service. Cancel anytime — no contracts.
          </p>
        </div>

        <div className="pricing-tabs" role="tablist">
          {tabs.map(t => (
            <button
              key={t.key}
              role="tab"
              aria-selected={billing === t.key}
              className={`pricing-tab ${billing === t.key ? 'active' : ''}`}
              onClick={() => setBilling(t.key)}
            >
              {t.label}
              {t.save && <span className="pricing-tab-save">{t.save}</span>}
            </button>
          ))}
        </div>

        <div className="pricing-grid">
          {plans.map(p => (
            <article key={p.name} className={`pricing-card ${p.featured ? 'featured' : ''}`}>
              {p.featured && <span className="pricing-badge">Most popular</span>}
              <h3 className="pricing-name">{p.name}</h3>
              <p className="pricing-desc">{p.desc}</p>
              <div className="pricing-amount">
                <span className="pricing-currency">$</span>
                <span className="pricing-num">{p[billing]}</span>
                <span className="pricing-per">/visit</span>
              </div>
              <a href="#book" className={`btn ${p.featured ? 'btn-primary' : 'btn-secondary'} btn-block`}>
                Get started
              </a>
              <ul className="pricing-features">
                {p.features.map(f => (
                  <li key={f}>
                    <span className="pricing-tick" aria-hidden="true">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                    </span>
                    {f}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        <p className="pricing-note">
          Prices vary slightly by ZIP and home condition. Final quote shown before you confirm.
        </p>
      </div>
    </section>
  );
}
