import FadeInSection from '../ui/FadeInSection';
import ReelPlayer from './ReelPlayer';

const REEL_VIDEO_SRC = encodeURI('/Dental Clinic Reciptionist.MOV');

const LoomVideo = () => {
  return (
    <FadeInSection className="section-pad overflow-hidden">
      <div className="container-content">
        <div className="border-t border-border pt-16">
          <div className="grid items-center gap-12 lg:grid-cols-[minmax(0,1fr)_auto] lg:gap-16 xl:gap-24">
            <div className="max-w-lg lg:pt-4">
              <p className="font-sans text-xs font-semibold uppercase tracking-widest text-muted">
                Walkthrough
              </p>
              <h2 className="mt-3 font-heading text-2xl md:text-3xl">See How We Work</h2>
              <p className="mt-4 text-sm leading-relaxed text-muted md:text-base">
                A quick look at how we design automations — from intake to deployment — so you know
                what working with TERA X feels like before we jump on a call.
              </p>
              <p className="mt-6 hidden text-xs text-muted lg:block">
                Plays automatically · Tap Unmute for sound
              </p>
            </div>

            <div className="relative mx-auto w-full max-w-[min(100%,280px)] sm:max-w-[300px] lg:mx-0 lg:max-w-[320px]">
              <div
                className="pointer-events-none absolute -right-8 top-1/2 hidden h-48 w-48 -translate-y-1/2 rounded-full opacity-40 lg:block"
                style={{
                  background:
                    'radial-gradient(circle, rgba(79, 142, 247, 0.15) 0%, transparent 70%)',
                }}
                aria-hidden
              />

              <div className="overflow-hidden rounded-2xl border border-border bg-surface shadow-subtle">
                <ReelPlayer src={REEL_VIDEO_SRC} label="TERA X workflow walkthrough" />
              </div>

              <p className="mt-4 text-center text-xs text-muted lg:text-left">
                Receptionist automation demo
              </p>
            </div>
          </div>
        </div>
      </div>
    </FadeInSection>
  );
};

export default LoomVideo;
