import { cn } from '../../lib/utils';

export function Marquee({
  children,
  vertical = false,
  repeat = 5,
  pauseOnHover = false,
  reverse = false,
  className,
  applyMask = true,
  ...props
}) {
  return (
    <div
      {...props}
      className={cn(
        'group relative flex h-full w-full p-2 [--duration:10s] [--gap:12px] [gap:var(--gap)]',
        {
          'flex-col': vertical,
          'flex-row': !vertical,
        },
        className
      )}
    >
      {Array.from({ length: repeat }).map((_, index) => (
        <div
          key={`item-${index}`}
          className={cn('flex shrink-0 [gap:var(--gap)]', {
            'group-hover:[animation-play-state:paused]': pauseOnHover,
            '[animation-direction:reverse]': reverse,
            'animate-marquee-horizontal flex-row': !vertical,
            'animate-marquee-vertical flex-col': vertical,
          })}
        >
          {children}
        </div>
      ))}
      {applyMask && (
        <div
          className={cn(
            'pointer-events-none absolute inset-0 z-10 h-full w-full',
            {
              'bg-gradient-to-b': vertical,
              'bg-gradient-to-r': !vertical,
            }
          )}
        />
      )}
    </div>
  );
}
