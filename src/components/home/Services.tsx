import { Bot, GitBranch, Mic } from 'lucide-react';
import FadeInSection from '../ui/FadeInSection';

const services = [
  {
    icon: Bot,
    title: 'AI Automation',
    description: 'Custom agents and automations that handle repetitive tasks without breaking your stack.',
  },
  {
    icon: GitBranch,
    title: 'Workflow Systems',
    description: 'End-to-end pipelines that connect your tools, data, and teams in one reliable flow.',
  },
  {
    icon: Mic,
    title: 'Voice Assistants',
    description: 'Natural voice interfaces for support, scheduling, and internal ops — built to scale.',
  },
];

const Services = () => {
  return (
    <FadeInSection className="section-pad bg-surface">
      <div className="container-content">
        <div className="mb-16 max-w-lg">
          <p className="font-sans text-xs font-semibold uppercase tracking-widest text-muted">
            What we do
          </p>
          <h2 className="mt-3 text-3xl md:text-4xl">Focused services, real outcomes</h2>
        </div>

        <div className="flex flex-col gap-4">
          {services.map((service, index) => (
            <article
              key={service.title}
              className={`surface-card flex flex-col gap-6 p-8 md:flex-row md:items-center md:gap-12 ${
                index === 1 ? 'md:ml-12 lg:ml-20' : index === 2 ? 'md:ml-6 lg:ml-10' : ''
              }`}
            >
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg border border-border bg-surface-raised">
                <service.icon className="h-5 w-5 text-accent" strokeWidth={1.75} />
              </div>
              <div className="flex-1">
                <h3 className="font-subheading text-xl font-semibold">{service.title}</h3>
                <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted">
                  {service.description}
                </p>
              </div>
              <span className="hidden font-heading text-5xl font-bold text-border md:block">
                0{index + 1}
              </span>
            </article>
          ))}
        </div>
      </div>
    </FadeInSection>
  );
};

export default Services;
