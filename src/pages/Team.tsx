import { Github, Mail } from 'lucide-react';
import FadeInSection from '../components/ui/FadeInSection';

const team = [
  {
    name: 'Muhammad Subhan',
    title: 'CEO & Founder · Automation Strategist',
    initials: 'MS',
    image: encodeURI('/SUBHAN PIC.JPG'),
    email: 'subhankhanwork1@gmail.com',
    github: 'https://github.com/subhankhan2003',
  },
  {
    name: 'Muhammad Talha',
    title: 'Operations',
    initials: 'MT',
    image: encodeURI('/TALHA PIC.png'),
    email: 'talhazeeshan929@gmail.com',
    github: '',
  },
  {
    name: 'Imad Naeem',
    title: 'Workflow Architect',
    initials: 'IN',
    image: encodeURI('/IMAD PIC.jpeg'),
    email: 'Imad112212@gmail.com',
    github: 'https://github.com/imadsheikh01',
  },
  {
    name: 'Umer Hameed',
    title: 'Voice & AI Engineer',
    initials: 'UH',
    image: encodeURI('/UMER PIC.JPG.jpeg'),
    email: 'chumerha91@gmail.com',
    github: 'https://github.com/umer-ch817',
  },
];

const TeamAvatar = ({
  name,
  image,
  initials,
}: {
  name: string;
  image?: string;
  initials: string;
}) => {
  if (image) {
    return (
      <img
        src={image}
        alt={name}
        className="mb-5 h-28 w-28 rounded-full border border-border object-cover object-center sm:h-32 sm:w-32"
        loading="lazy"
      />
    );
  }

  return (
    <div
      className="mb-5 flex h-28 w-28 items-center justify-center rounded-full border border-border bg-surface-raised font-heading text-2xl font-semibold text-muted sm:h-32 sm:w-32"
      aria-hidden
    >
      {initials}
    </div>
  );
};

const Team = () => {
  return (
    <>
      <section className="section-pad border-b border-border">
        <div className="container-content max-w-2xl">
          <p className="font-accent text-sm font-medium text-accent">The team</p>
          <h1 className="mt-4 text-display-sm">People behind the systems</h1>
          <p className="mt-4 text-muted">
            A small, senior team — engineers and strategists who ship automation you can actually
            maintain.
          </p>
        </div>
      </section>

      <FadeInSection className="section-pad">
        <div className="container-content">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-2">
            {team.map((member) => (
              <article key={member.name} className="surface-card p-6">
                <TeamAvatar name={member.name} image={member.image} initials={member.initials} />
                <h2 className="font-heading text-xl font-semibold">{member.name}</h2>
                <p className="mt-1 font-subheading text-sm text-muted">{member.title}</p>
                <div className="mt-5 flex gap-3">
                  <a
                    href={`mailto:${member.email}?subject=${encodeURIComponent(`TERA X — Contact ${member.name}`)}`}
                    className="flex h-9 w-9 items-center justify-center rounded-btn border border-border text-muted transition-colors hover:border-accent/40 hover:text-accent"
                    aria-label={`Email ${member.name}`}
                  >
                    <Mail className="h-4 w-4" />
                  </a>
                  {member.github ? (
                    <a
                      href={member.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex h-9 w-9 items-center justify-center rounded-btn border border-border text-muted transition-colors hover:border-accent/40 hover:text-accent"
                      aria-label={`${member.name} on GitHub`}
                    >
                      <Github className="h-4 w-4" />
                    </a>
                  ) : (
                    <span
                      className="flex h-9 w-9 cursor-not-allowed items-center justify-center rounded-btn border border-border text-muted opacity-35"
                      aria-hidden
                    >
                      <Github className="h-4 w-4" />
                    </span>
                  )}
                </div>
              </article>
            ))}
          </div>
        </div>
      </FadeInSection>
    </>
  );
};

export default Team;
