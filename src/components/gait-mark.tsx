export function GaitMark({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 640 360"
      fill="none"
      aria-hidden="true"
    >
      <g stroke="currentColor" strokeWidth="1.2">
        <path d="M40 300 C 120 220, 200 220, 280 300 S 440 380, 520 260" />
        <path d="M80 310 C 150 250, 230 250, 310 310 S 460 370, 560 240" opacity="0.45" />
      </g>
      {[
        [92, 268],
        [168, 236],
        [248, 268],
        [328, 308],
        [412, 318],
        [496, 268],
        [568, 228],
      ].map(([x, y], i) => (
        <g key={`${x}-${y}`} transform={`translate(${x} ${y})`}>
          <circle r={i % 2 === 0 ? 5 : 3.5} fill="currentColor" />
          <circle r="14" stroke="currentColor" strokeWidth="0.8" fill="none" opacity="0.35" />
        </g>
      ))}
      <path
        d="M72 96 h48 M72 96 v48 M520 48 h48 M568 48 v48 M72 264 v48 M72 312 h48 M520 264 h48 M568 264 v48"
        stroke="currentColor"
        strokeWidth="1.4"
      />
    </svg>
  )
}
