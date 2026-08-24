import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import CourseCard from '../components/CourseCard';
import MathSymbolEffect from '../components/MathSymbolEffect';
import { classProgrammes, testSeries } from '../data/coursesData';

export default function Courses() {
  return (
    <>
      <Navbar currentPage="courses" />

      <Hero
        compact={true}
        title="Our Courses"
        subtitle="Class programmes and test series"
      />

      <main className="page-main">
        <section className="page-section">
          <h2>Class Programmes</h2>
          <p className="section-note">Unlock Potential with Expert Faculties</p>

          <div className="course-list">
            {classProgrammes.map((course) => (
              <CourseCard
                key={course.id}
                title={course.title}
                description={course.description}
                subjects={course.subjects}
                price={course.price}
                enquireHref={course.enquireHref}
              />
            ))}
          </div>
        </section>

        <section className="page-section">
          <h2>Test Series</h2>
          <p className="section-note">Paid Test Series: Measure Your Knowledge, Track Your Progress, Secure Your Rank</p>

          <div className="course-list">
            {testSeries.map((series) => (
              <CourseCard
                key={series.id}
                title={series.title}
                description={series.description}
                tests={series.tests}
                price={series.price}
                enquireHref={series.enquireHref}
              />
            ))}
          </div>
        </section>
      </main>

      <Footer />
      <MathSymbolEffect />
    </>
  );
}
