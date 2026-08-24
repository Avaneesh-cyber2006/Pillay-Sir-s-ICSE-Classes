import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import ContactCard from '../components/ContactCard';
import MathSymbolEffect from '../components/MathSymbolEffect';

export default function Contact() {
  // =========================================================================
  // WHATSAPP CONFIGURATION:
  // Replace 'WHATSAPP_NUMBER' below with the actual WhatsApp phone number,
  // including country code without plus sign (e.g., '919822574252').
  // =========================================================================
  const WHATSAPP_NUMBER = 'WHATSAPP_NUMBER';

  // Contact details
  const EMAIL_ADDRESS = 'chandrakantpillay11@gmail.com';
  const INSTAGRAM_USERNAME = 'chandrakant_pillay';
  const INSTAGRAM_URL = 'https://www.instagram.com/chandrakant_pillay/';

  const phoneNumbers = [
    { label: 'Phone 1', number: '9822574252' },
    { label: 'Phone 2', number: '8669951786' },
    { label: 'Phone 3', number: '7218180108' },
  ];

  return (
    <>
      <Navbar currentPage="contact" />

      <Hero
        compact={true}
        title="Contact"
      />

      <main className="page-main contact-page">
        <div className="contact-page-content">
          <ContactCard title="Phone Numbers">
            {phoneNumbers.map((phone, idx) => (
              <p key={idx}>
                {phone.label}:{' '}
                <a href={`tel:${phone.number}`}>{phone.number}</a>
              </p>
            ))}
          </ContactCard>

          <ContactCard title="Email">
            <div className="contact-action-row">
              <p>
                Email:{' '}
                {EMAIL_ADDRESS}
              </p>
              <a
                className="btn"
                href={`mailto:${EMAIL_ADDRESS}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                Mail
              </a>
            </div>
          </ContactCard>

          <ContactCard title="Instagram">
            <div className="contact-action-row">
              <p>{INSTAGRAM_USERNAME}</p>
              <a
                className="btn"
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
              >
                Instagram
              </a>
            </div>
          </ContactCard>

          <ContactCard title="WhatsApp">
            <a
              className="btn"
              href={`https://wa.me/${WHATSAPP_NUMBER}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              Message on WhatsApp
            </a>
          </ContactCard>
        </div>
      </main>

      <Footer />
      <MathSymbolEffect />
    </>
  );
}
