import { Link } from 'react-router-dom';

const footerLinks = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Team', to: '/team' },
  { label: 'Contact', to: '/contact' },
];

const Footer = () => {
  return (
    <footer className="border-t border-border bg-surface">
      <div className="container-content grid gap-12 px-4 py-16 sm:px-6 lg:grid-cols-3 lg:px-8">
        <div>
          <p className="font-accent text-lg font-bold text-ink">TERA X</p>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted">
            We automate what slows you down — workflow systems, AI automation, and voice assistants
            for modern teams.
          </p>
        </div>

        <div>
          <p className="label-field mb-4 normal-case tracking-normal">Navigate</p>
          <ul className="space-y-2">
            {footerLinks.map((link) => (
              <li key={link.to}>
                <Link to={link.to} className="text-sm text-muted transition-colors hover:text-ink">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="label-field mb-4 normal-case tracking-normal">Contact</p>
          <a
            href="mailto:subhankhanwork1@gmail.com"
            className="block text-sm text-muted transition-colors hover:text-accent"
          >
            subhankhanwork1@gmail.com
          </a>
          <p className="mt-2 text-sm text-muted">Remote-first · US time zones</p>
        </div>
      </div>

      <div className="border-t border-border">
        <div className="container-content flex flex-col gap-2 px-4 py-6 text-xs text-muted sm:flex-row sm:justify-between sm:px-6 lg:px-8">
          <p>© {new Date().getFullYear()} TERA X. All rights reserved.</p>
          <p>Built for operators who move fast.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
