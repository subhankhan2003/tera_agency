import { useCallback, useEffect, useRef, useState } from 'react';
import { Pause, Play, Volume2, VolumeX } from 'lucide-react';

type ReelPlayerProps = {
  src: string;
  label?: string;
};

const formatTime = (seconds: number) => {
  if (!Number.isFinite(seconds) || seconds < 0) return '0:00';
  const m = Math.floor(seconds / 60);
  const s = Math.floor(seconds % 60);
  return `${m}:${s.toString().padStart(2, '0')}`;
};

const ReelPlayer = ({ src, label = 'Video walkthrough' }: ReelPlayerProps) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const hideTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const [playing, setPlaying] = useState(false);
  const [muted, setMuted] = useState(true);
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(0);
  const [showChrome, setShowChrome] = useState(true);

  const revealChrome = useCallback(() => {
    setShowChrome(true);
    if (hideTimerRef.current) clearTimeout(hideTimerRef.current);
    hideTimerRef.current = setTimeout(() => {
      if (videoRef.current && !videoRef.current.paused) setShowChrome(false);
    }, 2800);
  }, []);

  useEffect(() => {
    const video = videoRef.current;
    const container = containerRef.current;
    if (!video || !container) return;

    video.muted = true;

    const tryPlay = () => {
      video.play().then(() => setPlaying(true)).catch(() => setPlaying(false));
    };

    tryPlay();

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) tryPlay();
        else {
          video.pause();
          setPlaying(false);
          setShowChrome(true);
        }
      },
      { threshold: 0.45 }
    );

    observer.observe(container);
    return () => {
      observer.disconnect();
      if (hideTimerRef.current) clearTimeout(hideTimerRef.current);
    };
  }, []);

  const togglePlay = () => {
    const video = videoRef.current;
    if (!video) return;
    revealChrome();
    if (video.paused) {
      video.play().then(() => setPlaying(true));
    } else {
      video.pause();
      setPlaying(false);
      setShowChrome(true);
    }
  };

  const toggleMute = (e: React.MouseEvent) => {
    e.stopPropagation();
    const video = videoRef.current;
    if (!video) return;
    revealChrome();
    const next = !video.muted;
    video.muted = next;
    setMuted(next);
  };

  const handleSeek = (percent: number) => {
    const video = videoRef.current;
    if (!video || !duration) return;
    const time = (percent / 100) * duration;
    video.currentTime = time;
    setProgress(time);
    revealChrome();
  };

  const progressPercent = duration > 0 ? (progress / duration) * 100 : 0;

  return (
    <div
      ref={containerRef}
      className="group relative aspect-[9/16] w-full overflow-hidden bg-surface-raised"
      onMouseMove={revealChrome}
      onTouchStart={revealChrome}
    >
      <video
        ref={videoRef}
        className="h-full w-full object-cover"
        src={src}
        muted
        loop
        playsInline
        autoPlay
        preload="auto"
        aria-label={label}
        onLoadedMetadata={(e) => setDuration(e.currentTarget.duration)}
        onTimeUpdate={(e) => setProgress(e.currentTarget.currentTime)}
        onPlay={() => setPlaying(true)}
        onPause={() => setPlaying(false)}
        onClick={togglePlay}
      />

      <div
        className={`pointer-events-none absolute inset-0 bg-gradient-to-t from-canvas via-transparent to-canvas/40 transition-opacity duration-300 ${
          showChrome || !playing ? 'opacity-100' : 'opacity-0'
        }`}
        aria-hidden
      />

      <button
        type="button"
        onClick={toggleMute}
        className={`absolute right-3 top-3 z-20 flex items-center gap-1.5 rounded-full border border-border bg-canvas/75 px-3 py-1.5 text-xs font-medium text-ink backdrop-blur-md transition-all duration-300 hover:border-accent/40 hover:bg-canvas/90 ${
          showChrome || !playing ? 'translate-y-0 opacity-100' : 'translate-y-1 opacity-0'
        }`}
        aria-label={muted ? 'Unmute video' : 'Mute video'}
      >
        {muted ? <VolumeX className="h-3.5 w-3.5 text-muted" /> : <Volume2 className="h-3.5 w-3.5 text-accent" />}
        {muted ? 'Unmute' : 'Sound on'}
      </button>

      {!playing && (
        <button
          type="button"
          onClick={togglePlay}
          className="absolute inset-0 z-10 flex items-center justify-center"
          aria-label="Play video"
        >
          <span className="flex h-14 w-14 items-center justify-center rounded-full border border-border bg-canvas/80 text-ink shadow-subtle backdrop-blur-md transition-transform hover:scale-105">
            <Play className="ml-0.5 h-6 w-6 fill-current" />
          </span>
        </button>
      )}

      <div
        className={`absolute bottom-0 left-0 right-0 z-20 px-3 pb-3 pt-8 transition-all duration-300 ${
          showChrome || !playing ? 'translate-y-0 opacity-100' : 'translate-y-2 opacity-0'
        }`}
      >
        <input
          type="range"
          min={0}
          max={100}
          step={0.1}
          value={progressPercent}
          onChange={(e) => handleSeek(Number(e.target.value))}
          onClick={(e) => e.stopPropagation()}
          className="reel-progress mb-3 w-full cursor-pointer"
          aria-label="Seek video"
          style={{ '--progress': `${progressPercent}%` } as React.CSSProperties}
        />

        <div className="flex items-center justify-between gap-3 rounded-xl border border-border bg-canvas/80 px-3 py-2 backdrop-blur-md">
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              togglePlay();
            }}
            className="flex h-8 w-8 shrink-0 items-center justify-center rounded-btn text-ink transition-colors hover:bg-surface-raised"
            aria-label={playing ? 'Pause' : 'Play'}
          >
            {playing ? <Pause className="h-4 w-4" /> : <Play className="ml-0.5 h-4 w-4 fill-current" />}
          </button>

          <span className="font-sans text-xs tabular-nums text-muted">
            {formatTime(progress)}
            <span className="text-border"> / </span>
            {formatTime(duration)}
          </span>
        </div>
      </div>
    </div>
  );
};

export default ReelPlayer;
