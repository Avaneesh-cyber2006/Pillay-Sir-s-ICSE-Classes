export default function Hero({ compact = false, title, subtitle, showActions = false }) {
  return (
    <header className={`hero ${compact ? 'hero-compact' : ''}`.trim()}>
      <div className="hero-content">
        <h1>{title}</h1>
        {subtitle && (
          typeof subtitle === 'string' ? (
            <p>{subtitle}</p>
          ) : (
            subtitle
          )
        )}
        {showActions && (
          <div className="hero-actions">
            <a href="courses.html" className="btn">Explore Courses</a>
            <a href="about.html" className="btn">About Us</a>
          </div>
        )}
      </div>
    </header>
  );
}
