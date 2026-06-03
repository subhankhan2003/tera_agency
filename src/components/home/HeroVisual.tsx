const HeroVisual = () => {
  return (
    <div className="relative flex h-full min-h-[280px] items-center justify-end lg:min-h-[360px]">
      <div
        className="pointer-events-none absolute inset-0 animate-hero-shift"
        style={{
          background:
            'radial-gradient(ellipse 70% 60% at 70% 40%, rgba(79, 142, 247, 0.12) 0%, transparent 70%)',
        }}
        aria-hidden
      />
      <svg
        viewBox="0 0 400 360"
        className="relative w-full max-w-md text-accent/80"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden
      >
        <rect x="48" y="72" width="120" height="8" rx="2" fill="currentColor" opacity="0.15" />
        <rect x="48" y="96" width="200" height="8" rx="2" fill="currentColor" opacity="0.25" />
        <rect x="48" y="120" width="160" height="8" rx="2" fill="currentColor" opacity="0.15" />
        <path
          d="M280 88 L340 148 L280 208 L220 148 Z"
          stroke="currentColor"
          strokeWidth="1.5"
          opacity="0.4"
        />
        <circle cx="280" cy="148" r="6" fill="currentColor" opacity="0.6" />
        <path
          d="M72 200 C120 180, 160 220, 200 200 S280 240, 328 216"
          stroke="currentColor"
          strokeWidth="1.5"
          opacity="0.35"
        />
        <circle cx="72" cy="200" r="4" fill="currentColor" opacity="0.5" />
        <circle cx="200" cy="200" r="4" fill="currentColor" opacity="0.5" />
        <circle cx="328" cy="216" r="4" fill="currentColor" opacity="0.5" />
        <rect
          x="56"
          y="248"
          width="288"
          height="72"
          rx="6"
          stroke="currentColor"
          strokeWidth="1"
          opacity="0.2"
        />
        <rect x="72" y="264" width="64" height="40" rx="4" fill="currentColor" opacity="0.08" />
        <rect x="152" y="264" width="64" height="40" rx="4" fill="currentColor" opacity="0.12" />
        <rect x="232" y="264" width="96" height="40" rx="4" fill="currentColor" opacity="0.08" />
      </svg>
    </div>
  );
};

export default HeroVisual;
