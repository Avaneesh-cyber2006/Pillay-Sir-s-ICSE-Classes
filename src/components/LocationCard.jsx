export default function LocationCard({ title, addressLines, mapUrl }) {
  return (
    <div className="location-card">
      <h2>{title}</h2>
      <p>
        Address:<br />
        {addressLines.map((line, idx) => (
          <span key={idx}>
            {line}
            {idx < addressLines.length - 1 && <br />}
          </span>
        ))}
      </p>
      <a
        className="btn"
        href={mapUrl}
        rel="noopener noreferrer"
      >
        View Location on Google Maps
      </a>
    </div>
  );
}
