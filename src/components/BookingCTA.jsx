import { useState } from 'react';
import './BookingCTA.css';

export default function BookingCTA() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    service: 'standard',
    bedrooms: '2',
    frequency: 'biweekly',
    name: '',
    email: '',
    phone: '',
    zip: '',
    date: '',
    notes: '',
  });

  const set = (k) => (e) => setForm(f => ({ ...f, [k]: e.target.value }));

  const onSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section className="booking section" id="book">
      <div className="container booking-grid">
        <div className="booking-copy">
          <span className="eyebrow">Book your clean</span>
          <h2 className="h-section">Ready for a cleaner home?</h2>
          <p className="lead" style={{ marginTop: 'var(--space-4)' }}>
            Pick a service and time. We'll confirm by text within 5 minutes — usually faster.
          </p>

          <ul className="booking-points">
            <li><Bullet /> Free re-clean if anything is missed</li>
            <li><Bullet /> Vetted, background-checked pros</li>
            <li><Bullet /> Eco-friendly, pet-safe products</li>
            <li><Bullet /> No contracts, cancel anytime</li>
          </ul>

          <div className="booking-contact">
            <div className="booking-contact-row">
              <span className="booking-contact-icon" aria-hidden="true">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
              </span>
              <span><strong>(800) 555-0199</strong><br/><span className="muted">7am – 9pm, every day</span></span>
            </div>
            <div className="booking-contact-row">
              <span className="booking-contact-icon" aria-hidden="true">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
              </span>
              <span><strong>hello@sparkleclean.co</strong><br/><span className="muted">Replies within an hour</span></span>
            </div>
          </div>
        </div>

        <div className="booking-form-wrap">
          {submitted ? (
            <div className="booking-success" role="status">
              <div className="booking-success-icon" aria-hidden="true">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
              </div>
              <h3 className="h-section" style={{ fontSize: 'var(--fs-2xl)' }}>You're booked!</h3>
              <p className="lead" style={{ marginTop: 'var(--space-2)' }}>
                We'll text {form.phone || 'you'} shortly to confirm your {form.service} clean.
              </p>
              <button className="btn btn-secondary" onClick={() => setSubmitted(false)} style={{ marginTop: 'var(--space-6)' }}>
                Book another
              </button>
            </div>
          ) : (
            <form className="booking-form" onSubmit={onSubmit}>
              <div className="form-row">
                <Field label="Service" required>
                  <select value={form.service} onChange={set('service')} required>
                    <option value="standard">Standard cleaning</option>
                    <option value="deep">Deep cleaning</option>
                    <option value="move">Move in / out</option>
                    <option value="office">Office / commercial</option>
                    <option value="carpet">Carpet & upholstery</option>
                    <option value="window">Window cleaning</option>
                  </select>
                </Field>
                <Field label="Bedrooms" required>
                  <select value={form.bedrooms} onChange={set('bedrooms')} required>
                    <option value="studio">Studio</option>
                    <option value="1">1 bedroom</option>
                    <option value="2">2 bedrooms</option>
                    <option value="3">3 bedrooms</option>
                    <option value="4">4 bedrooms</option>
                    <option value="5+">5+ bedrooms</option>
                  </select>
                </Field>
              </div>

              <Field label="Frequency">
                <div className="form-radio-group" role="radiogroup">
                  {[
                    { v: 'one',      l: 'One-time' },
                    { v: 'weekly',   l: 'Weekly' },
                    { v: 'biweekly', l: 'Bi-weekly' },
                    { v: 'monthly',  l: 'Monthly' },
                  ].map(o => (
                    <label key={o.v} className={`form-radio ${form.frequency === o.v ? 'checked' : ''}`}>
                      <input type="radio" name="frequency" value={o.v}
                        checked={form.frequency === o.v} onChange={set('frequency')} />
                      {o.l}
                    </label>
                  ))}
                </div>
              </Field>

              <div className="form-row">
                <Field label="Full name" required>
                  <input type="text" value={form.name} onChange={set('name')} required placeholder="Jane Doe" />
                </Field>
                <Field label="Phone" required>
                  <input type="tel" value={form.phone} onChange={set('phone')} required placeholder="(555) 123-4567" />
                </Field>
              </div>

              <div className="form-row">
                <Field label="Email" required>
                  <input type="email" value={form.email} onChange={set('email')} required placeholder="jane@email.com" />
                </Field>
                <Field label="ZIP code" required>
                  <input type="text" value={form.zip} onChange={set('zip')} required pattern="[0-9]{5}" maxLength={5} placeholder="10001" inputMode="numeric" />
                </Field>
              </div>

              <Field label="Preferred date" required>
                <input type="date" value={form.date} onChange={set('date')} required />
              </Field>

              <Field label="Notes (optional)">
                <textarea value={form.notes} onChange={set('notes')} rows={3} placeholder="Pets, fragile items, focus areas…" />
              </Field>

              <button type="submit" className="btn btn-primary btn-lg btn-block">
                Get my instant quote
              </button>
              <p className="form-fineprint">
                By booking, you agree to our terms. We'll never share your info.
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}

function Field({ label, required, children }) {
  return (
    <label className="field">
      <span className="field-label">
        {label} {required && <span aria-hidden="true" className="field-req">*</span>}
      </span>
      {children}
    </label>
  );
}

function Bullet() {
  return (
    <span className="bullet" aria-hidden="true">
      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
    </span>
  );
}
