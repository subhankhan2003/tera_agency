import { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const navItems = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Team', to: '/team' },
  { label: 'Contact', to: '/contact' },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 16);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMobileOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileOpen]);

  const linkClass = ({ isActive }: { isActive: boolean }) =>
    `nav-link relative pb-1 ${isActive ? 'nav-link-active' : ''}`;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
        isScrolled ? 'border-b border-border bg-canvas/80 backdrop-blur-md' : 'bg-transparent'
      }`}
    >
      <div className="container-content flex h-20 items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link
          to="/"
          className="font-accent text-lg font-bold tracking-tight text-ink"
          onClick={() => setIsMobileOpen(false)}
        >
          TERA X
        </Link>

        <nav className="hidden items-center gap-10 md:flex">
          {navItems.map((item) => (
            <NavLink key={item.to} to={item.to} className={linkClass} end={item.to === '/'}>
              {({ isActive }) => (
                <>
                  {item.label}
                  {isActive && (
                    <span className="absolute -bottom-0.5 left-0 right-0 h-px bg-accent" aria-hidden />
                  )}
                </>
              )}
            </NavLink>
          ))}
          <Link to="/contact" className="btn-primary px-5 py-2.5 text-xs">
            Let&apos;s Talk
          </Link>
        </nav>

        <button
          type="button"
          className="text-ink md:hidden"
          onClick={() => setIsMobileOpen(!isMobileOpen)}
          aria-label={isMobileOpen ? 'Close menu' : 'Open menu'}
        >
          {isMobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {isMobileOpen && (
        <div className="border-t border-border bg-canvas/95 backdrop-blur-md md:hidden">
          <nav className="container-content flex flex-col gap-1 px-4 py-6">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.to === '/'}
                className={({ isActive }) =>
                  `rounded-btn px-4 py-3 text-base ${isActive ? 'bg-surface text-ink' : 'text-muted'}`
                }
                onClick={() => setIsMobileOpen(false)}
              >
                {item.label}
              </NavLink>
            ))}
            <Link
              to="/contact"
              className="btn-primary mt-4 text-center"
              onClick={() => setIsMobileOpen(false)}
            >
              Let&apos;s Talk
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
