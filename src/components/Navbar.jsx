export default function Navbar({ currentPage = 'home' }) {
  const navItems = [
    { key: 'home', label: 'Home', href: 'index.html' },
    { key: 'courses', label: 'Explore Courses', href: 'courses.html' },
    { key: 'about', label: 'About Us', href: 'about.html' },
    { key: 'location', label: 'Location', href: 'location.html' },
    { key: 'contact', label: 'Contact', href: 'contact.html' },
  ];

  return (
    <nav className="site-nav" aria-label="Main">
      {navItems.map((item) => (
        <a
          key={item.key}
          href={item.href}
          aria-current={currentPage === item.key ? 'page' : undefined}
        >
          {item.label}
        </a>
      ))}
    </nav>
  );
}
