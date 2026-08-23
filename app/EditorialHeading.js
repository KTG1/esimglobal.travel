export function HeadingSignal() {
  return (
    <span className="simTraceMark" aria-hidden="true">
      <svg viewBox="0 0 40 40" focusable="false">
        <path className="simTraceFrame" d="M9 3h16l8 8v26H9z" />
        <path className="simTraceCircuit" d="M14 12h7v6h6v9h-8v6M14 21h7" />
        <rect className="simTraceContact" x="11.5" y="9.5" width="5" height="5" rx="1" />
      </svg>
    </span>
  );
}

export function TraceArrow() {
  return (
    <svg viewBox="0 0 20 20" aria-hidden="true" focusable="false">
      <path d="M3 14h6V8h8M13 4l4 4-4 4" />
    </svg>
  );
}

export function HeadingReadMore({ children, href, label = "Read more", className = "" }) {
  return (
    <p className={`contextThread ${className}`.trim()}>
      <span>{children}</span>
      <a href={href}>{label}<TraceArrow /></a>
    </p>
  );
}
