import { testimonials } from '../lib/data';

export default function TestimonialRail() {
  const rows = [...testimonials, ...testimonials];
  return (
    <div className="testimonial-rail" aria-label="Testimonial placeholders">
      <div className="testimonial-track">
        {rows.map((item, index) => (
          <article className="testimonial-card" key={`${item.name}-${index}`}>
            <div className="stars">★★★★★</div>
            <blockquote>“{item.quote}”</blockquote>
            <div className="testimonial-person">
              <span>{item.name.charAt(0)}</span>
              <div><strong>{item.name}</strong><small>{item.role}</small></div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
