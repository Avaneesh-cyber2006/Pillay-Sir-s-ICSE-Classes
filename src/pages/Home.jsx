import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import MathSymbolEffect from '../components/MathSymbolEffect';

export default function Home() {
  return (
    <>
      <Navbar currentPage="home" />

      <Hero
        title="Pillay Sir's ICSE Classes"
        subtitle={
          <p>
            Your Path to ICSE Excellence Starts Here<br /><br />
          </p>
        }
        showActions={true}
      />

      <Footer />
      <MathSymbolEffect />
    </>
  );
}
