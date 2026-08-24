export default function ContactCard({ title, children, className = '' }) {
  return (
    <section className={`contact-card ${className}`.trim()}>
      <h2>{title}</h2>
      {children}
    </section>
  );
}
