import FadeInSection from '../components/ui/FadeInSection';

const milestones = [
  { year: '2022', label: 'Founded', detail: 'TERA X started as a small automation studio helping local businesses cut manual ops.' },
  { year: '2024', label: 'Voice & AI', detail: 'Expanded into voice assistants and custom AI agents for support and internal tools.' },
  { year: '2026', label: 'Today', detail: 'Partnering with teams globally on workflow systems that scale with their growth.' },
];

const About = () => {
  return (
    <>
      <section className="section-pad border-b border-border">
        <div className="container-content">
          <p className="font-accent text-sm font-medium text-accent">About TERA X</p>
          <h1 className="mt-4 max-w-2xl text-display-sm">We build systems that give time back</h1>
        </div>
      </section>

      <FadeInSection className="section-pad">
        <div className="container-content grid gap-16 lg:grid-cols-2 lg:gap-20">
          <div className="space-y-6 text-base leading-relaxed text-muted">
            <p>
              TERA X began with a simple observation: most teams are not slowed down by ambition — they
              are slowed down by friction. Copy-pasting between tools, chasing status updates, answering
              the same questions on repeat. We set out to remove that friction with thoughtful automation.
            </p>
            <p>
              Today we partner with operators, agencies, and product teams who need reliable workflow
              systems — not flashy demos. Our work spans AI automation, integrated pipelines, and voice
              interfaces that fit how people actually work.
            </p>
            <p>
              We stay small on purpose. Every engagement gets senior attention, clear documentation, and
              handoff your team can own. No black boxes, no dependency traps — just systems that keep
              running after we leave the room.
            </p>
          </div>

          <div
            className="relative min-h-[320px] overflow-hidden rounded-lg border border-border bg-surface-raised"
            aria-hidden
          >
            <div
              className="absolute inset-0"
              style={{
                background:
                  'linear-gradient(135deg, rgba(79, 142, 247, 0.08) 0%, transparent 50%), linear-gradient(225deg, #13131C 0%, #0A0A0F 100%)',
              }}
            />
            <div className="absolute bottom-8 left-8 right-8 border-l-2 border-accent pl-6">
              <p className="font-accent text-lg font-medium leading-snug text-ink">
                &ldquo;Automation should feel invisible — until you notice how much faster everything
                moves.&rdquo;
              </p>
            </div>
          </div>
        </div>
      </FadeInSection>

      <section className="section-pad bg-surface">
        <div className="container-content">
          <h2 className="text-2xl md:text-3xl">Milestones</h2>
          <div className="mt-12 border-t border-border">
            {milestones.map((item, index) => (
              <div
                key={item.year}
                className={`grid gap-4 border-b border-border py-8 md:grid-cols-[120px_1fr] md:gap-12 ${
                  index % 2 === 1 ? 'md:pl-8' : ''
                }`}
              >
                <span className="font-heading text-2xl font-semibold text-accent">{item.year}</span>
                <div>
                  <h3 className="font-subheading text-lg font-semibold">{item.label}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{item.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
