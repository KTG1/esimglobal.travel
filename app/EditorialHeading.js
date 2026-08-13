export function HeadingSignal() {
  return (
    <span className="headingSignal" aria-hidden="true">
      <svg viewBox="0 0 36 36" focusable="false">
        <circle className="headingSignalOrbit" cx="18" cy="18" r="11.5" />
        <path className="headingSignalRoute" d="M3.5 22.5C10 13 24 7.5 32.5 13.5" />
        <path className="headingSignalRoute" d="M6.5 28C15 29.5 26.5 24 30 15" />
        <circle className="headingSignalPoint" cx="31" cy="12.5" r="2.7" />
      </svg>
    </span>
  );
}

export function ReadMoreArrow() {
  return (
    <svg viewBox="0 0 20 20" aria-hidden="true" focusable="false">
      <path d="M4 16L16 4M8 4h8v8" />
    </svg>
  );
}

export function HeadingReadMore({ children, href, label = "Read more", className = "" }) {
  return (
    <p className={`headingReadMore ${className}`.trim()}>
      <span>{children}</span>
      <a href={href}>{label}<ReadMoreArrow /></a>
    </p>
  );
}
