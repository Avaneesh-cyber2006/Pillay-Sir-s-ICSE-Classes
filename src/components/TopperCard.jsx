export default function TopperCard({ image, name, category, year, achievement }) {
  return (
    <div className="topper-card">
      <div className="topper-image-container">
        <img src={image} alt={name} />
      </div>
      <div className="topper-info">
        <h3>{name}</h3>
        <p className="topper-category">{category}</p>
        <p className="topper-year">{year}</p>
        {achievement && <p className="topper-achievement">{achievement}</p>}
      </div>
    </div>
  );
}
