export default function CourseCard({ title, description, subjects, tests, price, enquireHref = 'contact.html' }) {
  return (
    <div className="course-card">
      <h3>{title}</h3>
      <p>{description}</p>
      {subjects && (
        <p>
          <strong>Subjects:</strong> {subjects}
        </p>
      )}
      {tests && (
        <p>
          <strong>Tests:</strong> {tests}
        </p>
      )}
      {price && (
        <p>
          <strong>Price:</strong> {price}
        </p>
      )}
      <a href={enquireHref} className="btn">
        Enquire
      </a>
    </div>
  );
}
