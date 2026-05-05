import './Testimonials.css';

const reviews = [
  {
    quote: 'I came home to a house that smelled like a spa. They even folded the kids\' laundry. Worth every penny.',
    name: 'Maya R.',
    role: 'Brooklyn, NY',
    rating: 5,
  },
  {
    quote: 'Booked a move-out clean Thursday night, done by Friday afternoon. Got my full deposit back.',
    name: 'Daniel C.',
    role: 'Austin, TX',
    rating: 5,
  },
  {
    quote: 'Same friendly team every two weeks. Genuinely the best subscription I have. Cancel-anytime is real.',
    name: 'Priya S.',
    role: 'San Jose, CA',
    rating: 5,
  },
  {
    quote: 'They use plant-based products that actually work. Our toddler can crawl around without me panicking.',
    name: 'Owen K.',
    role: 'Portland, OR',
    rating: 5,
  },
  {
    quote: 'Office looks gleaming every Monday. The team is invisible in the best way — quiet, fast, thorough.',
    name: 'Lena M.',
    role: 'Chicago, IL',
    rating: 5,
  },
  {
    quote: 'Quote was within 5% of the final. No surprise fees, no upsells. Just an honest, detailed clean.',
    name: 'Jordan B.',
    role: 'Seattle, WA',
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <section className="testimonials section" id="testimonials">
      <div className="container">
        <div className="section-head center">
          <span className="eyebrow">Reviews</span>
          <h2 className="h-section">Loved by 12,000+ households</h2>
          <p className="lead" style={{ marginTop: 'var(--space-4)' }}>
            Across 28 cities, our 4.9★ average tells the story.
          </p>
        </div>

        <div className="testimonials-grid">
          {reviews.map((r, i) => (
            <figure key={i} className="testimonial-card">
              <Stars n={r.rating} />
              <blockquote className="testimonial-quote">"{r.quote}"</blockquote>
              <figcaption className="testimonial-author">
                <span className="testimonial-avatar" aria-hidden="true">{r.name[0]}</span>
                <span>
                  <strong>{r.name}</strong>
                  <span className="testimonial-role">{r.role}</span>
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

function Stars({ n }) {
  return (
    <div className="testimonial-stars" aria-label={`${n} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} width="16" height="16" viewBox="0 0 24 24" fill={i < n ? 'currentColor' : 'none'} stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
        </svg>
      ))}
    </div>
  );
}
