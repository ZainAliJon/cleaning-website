import './Trust.css';

const stats = [
  { num: '12k+', label: 'Homes cleaned' },
  { num: '4.9★', label: 'Average rating' },
  { num: '< 60s', label: 'To book online' },
  { num: '100%', label: 'Satisfaction guaranteed' },
];

export default function Trust() {
  return (
    <section className="trust">
      <div className="container">
        <ul className="trust-stats" role="list">
          {stats.map(s => (
            <li key={s.label} className="trust-stat">
              <div className="trust-num">{s.num}</div>
              <div className="trust-label">{s.label}</div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
