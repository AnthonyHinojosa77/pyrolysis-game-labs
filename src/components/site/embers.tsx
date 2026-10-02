const SPECKS = [
  { l: "8%", d: "18s", s: "0.4s", w: "3px" },
  { l: "18%", d: "22s", s: "2s", w: "2px" },
  { l: "27%", d: "16s", s: "1.2s", w: "2px" },
  { l: "36%", d: "26s", s: "4s", w: "3px" },
  { l: "47%", d: "19s", s: "0.8s", w: "2px" },
  { l: "58%", d: "24s", s: "3s", w: "4px" },
  { l: "66%", d: "17s", s: "1.6s", w: "2px" },
  { l: "74%", d: "21s", s: "5s", w: "3px" },
  { l: "82%", d: "15s", s: "2.4s", w: "2px" },
  { l: "91%", d: "23s", s: "0.2s", w: "3px" },
  { l: "14%", d: "28s", s: "6s", w: "2px" },
  { l: "52%", d: "20s", s: "7s", w: "2px" },
  { l: "63%", d: "30s", s: "3.5s", w: "3px" },
  { l: "33%", d: "25s", s: "8s", w: "2px" },
] as const;

export function Embers() {
  return (
    <div className="embers" aria-hidden="true">
      {SPECKS.map((speck) => (
        <span
          key={`${speck.l}-${speck.d}`}
          className="ember"
          style={{
            left: speck.l,
            animationDuration: speck.d,
            animationDelay: speck.s,
            width: speck.w,
            height: speck.w,
          }}
        />
      ))}
    </div>
  );
}
