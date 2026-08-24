import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import TopperCard from '../components/TopperCard';
import MathSymbolEffect from '../components/MathSymbolEffect';
import { toppers2026, toppers2025 } from '../data/toppersData';

export default function About() {
  return (
    <>
      <Navbar currentPage="about" />

      <Hero
        compact={true}
        title="About Pillay Sir's ICSE Classes"
      />

      <main className="page-main">
        <section className="page-section about-content-layout">
          <div className="content-panel">
            <p>
              Founded in 2002, Pillay Coaching Classes is a proud legacy built by
              Chandrakant Prabhakhar Pillay, Director and Principal of the institute.
              With a tradition of regularly producing Vidarbha and city toppers in
              ICSE, the institute has carved a path dedicated solely to mastering
              ICSE excellence.
            </p>

            <p>
              Our institute is committed to providing a comprehensive learning
              experience, offering both offline and online classes. We ensure that
              our students have access to recorded lectures, tests, and doubt-solving
              support, all designed to prepare them effectively for their board exams.
            </p>

            <p>
              At Pillay Coaching Classes, we believe in nurturing potential and
              guiding our students towards academic success. Our expert faculties
              are dedicated to helping each student achieve their best, fostering an
              environment of growth and learning.
            </p>

            <p>
              <strong>
                We are the only institute in Nagpur with three ICSE‑trained faculties for each subject, ensuring unmatched depth of guidance — all at a reasonable price.
              </strong>
            </p>
          </div>

          <img
            className="about-orientation-image"
            src="orientation2026.png"
            alt="Pillay Coaching Classes Orientation 2026"
          />
        </section>

        <section className="page-section toppers-section">
          <h2>Our Vidarbha &amp; City Toppers 2026</h2>
          <div className="toppers-grid">
            {toppers2026.map((topper, index) => (
              <TopperCard
                key={`2026-${index}`}
                image={topper.image}
                name={topper.name}
                category={topper.category}
                year={topper.year}
                achievement={topper.achievement}
              />
            ))}
          </div>
        </section>

        <section className="page-section toppers-section">
          <h2>Our Vidarbha &amp; City Toppers 2025</h2>
          <div className="toppers-grid">
            {toppers2025.map((topper, index) => (
              <TopperCard
                key={`2025-${index}`}
                image={topper.image}
                name={topper.name}
                category={topper.category}
                year={topper.year}
                achievement={topper.achievement}
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
