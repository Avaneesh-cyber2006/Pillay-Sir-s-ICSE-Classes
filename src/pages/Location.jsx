import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import LocationCard from '../components/LocationCard';
import MathSymbolEffect from '../components/MathSymbolEffect';

export default function Location() {
  const branches = [
    {
      title: 'Location (Main Branch)',
      addressLines: [
        'Opposite to Murarka clinic, Gandhi Chowk Rd, near Kasturba Library, Sadar, Nagpur, Maharashtra 440001',
      ],
      // Google Maps URL for Main Branch
      mapUrl: 'https://maps.app.goo.gl/whXuDDXSvKZukf3p9',
    },
    {
      title: 'Location (Secondary Branch)',
      addressLines: [
        '200, Om Sahakari Co.op. Housing Society',
        ' Jagdish Nagar, Nagpur – 440013',
      ],
      // Google Maps URL for Secondary Branch
      mapUrl: 'https://maps.app.goo.gl/szvGBAVbLvE7KCrt8',
    },
  ];

  return (
    <>
      <Navbar currentPage="location" />

      <Hero
        compact={true}
        title="Location"
      />

      <main className="page-main location-page">
        <section className="page-section">
          <div className="locations-container">
            {branches.map((branch, index) => (
              <LocationCard
                key={index}
                title={branch.title}
                addressLines={branch.addressLines}
                mapUrl={branch.mapUrl}
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
