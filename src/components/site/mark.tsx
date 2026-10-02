type MarkProps = { className?: string };

export function Mark({ className }: MarkProps) {
  return (
    <svg className={className} viewBox="0 0 64 64" fill="none" aria-hidden="true">
      <path
        d="M11.2 20.2 32 8.2l20.8 12v17.2"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinejoin="miter"
      />
      <path
        d="M45.6 49.2 32 55.8 11.2 43.8V27.4"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinejoin="miter"
      />
      <path
        d="M32 24.2 43 43.2H21L32 24.2Z"
        stroke="var(--color-ember)"
        strokeWidth="1.75"
        strokeLinejoin="miter"
      />
    </svg>
  );
}

export function TeamSeal({ id }: { id: string }) {
  if (id === "jun") {
    return (
      <svg viewBox="0 0 64 64" fill="none" aria-hidden="true">
        <path d="M12 20h40M16 32h32M22 44h20" stroke="currentColor" strokeWidth="1.75" />
        <path d="M42 14v36" stroke="var(--color-ember)" strokeWidth="1.75" />
      </svg>
    );
  }
  if (id === "imani") {
    return (
      <svg viewBox="0 0 64 64" fill="none" aria-hidden="true">
        <path
          d="M46.5 20a16 16 0 1 0 4.2 15.2"
          stroke="currentColor"
          strokeWidth="1.75"
        />
        <path
          d="M44 16c7.2 3.2 11.2 12.4 7.2 21.2"
          stroke="var(--color-ember)"
          strokeWidth="1.75"
        />
      </svg>
    );
  }
  if (id === "leif") {
    return (
      <svg viewBox="0 0 64 64" fill="none" aria-hidden="true">
        <path d="m14 26 18-10 18 10" stroke="currentColor" strokeWidth="1.75" />
        <path d="m14 38 18-10 18 10" stroke="var(--color-ember)" strokeWidth="1.75" />
        <path d="m14 50 18-10 18 10" stroke="currentColor" strokeWidth="1.75" />
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 64 64" fill="none" aria-hidden="true">
      <path d="M14 22 32 12l18 10v12" stroke="currentColor" strokeWidth="1.75" />
      <path d="M42 46 32 52 14 42V30" stroke="currentColor" strokeWidth="1.75" />
      <path d="M32 28v16" stroke="var(--color-ember)" strokeWidth="1.75" />
    </svg>
  );
}

export function IconGitHub() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 4.6A7.4 7.4 0 0 0 6.5 16.8c.4.1.5-.1.5-.4v-1.2c-1.9.4-2.3-.8-2.3-.8-.3-.8-.8-1-.8-1-.6-.4.1-.4.1-.4.7.1 1.1.7 1.1.7.6 1 1.6.7 2 .6.1-.4.2-.7.5-.9-1.5-.2-3.1-.7-3.1-3.3 0-.7.3-1.3.7-1.8-.1-.2-.3-.9.1-1.8 0 0 .6-.2 1.9.7a6.6 6.6 0 0 1 3.4 0c1.3-.9 1.9-.7 1.9-.7.4.9.2 1.6.1 1.8.4.5.7 1.1.7 1.8 0 2.6-1.6 3.1-3.1 3.3.2.2.5.6.5 1.2v1.8c0 .2.1.5.5.4A7.4 7.4 0 0 0 12 4.6Z" />
    </svg>
  );
}
export function IconX() {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M5 5.5 19 18.5M19 5.5 5 18.5" stroke="currentColor" strokeWidth="1.75" />
    </svg>
  );
}

export function IconYouTube() {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <rect x="3" y="6.5" width="18" height="11" rx="2.5" stroke="currentColor" strokeWidth="1.5" />
      <path d="M11 10.2v3.6l3.2-1.8-3.2-1.8Z" fill="currentColor" />
    </svg>
  );
}

export function IconSteam() {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <circle cx="12" cy="12" r="8" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="15.2" cy="9.2" r="1.7" stroke="currentColor" strokeWidth="1.5" />
      <path d="M8.2 14.8 13.6 10.6" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="8" cy="15.2" r="1.5" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}
