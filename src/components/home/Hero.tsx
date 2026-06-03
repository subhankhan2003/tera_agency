import { Link } from 'react-router-dom';
import HeroVisual from './HeroVisual';

const Hero = () => {
  return (
    <section className="section-pad overflow-hidden border-b border-border">
      <div className="container-content">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="max-w-xl animate-fade-up">
            <p className="font-accent text-sm font-medium uppercase tracking-[0.2em] text-accent">
              Automation agency
            </p>
            <h1 className="mt-4 text-display-sm md:text-display">
              We Automate What Slows You Down
            </h1>
            <p className="mt-6 text-base leading-relaxed text-muted md:text-lg">
              TERA X designs workflow systems and AI tooling so your team spends less time on
              repetitive work and more on what actually moves the needle.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link to="/contact" className="btn-primary">
                Book a Call
              </Link>
              <Link to="/about" className="btn-ghost">
                See Our Work
              </Link>
            </div>
          </div>
          <HeroVisual />
        </div>
      </div>
    </section>
  );
};

export default Hero;
