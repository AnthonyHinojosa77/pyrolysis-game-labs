import { useEffect } from "react";
import { stations } from "@/data/studio";

const MIN = 20;
const MAX = 500;

export function Thermometer() {
  useEffect(() => {
    const root = document.documentElement;
    let frame = 0;
    let lastRounded = -1;

    const measure = () => {
      const nav = document.getElementById("site-nav");
      const navH = nav?.offsetHeight ?? 0;
      root.style.setProperty("--nav-h", `${navH}px`);

      const points = stations.map((station) => {
        const el = document.getElementById(station.id);
        const y = el ? Math.max(0, el.offsetTop - navH) : 0;
        return { ...station, y };
      });
      for (let i = 1; i < points.length; i++) {
        if (points[i].y <= points[i - 1].y) {
          points[i].y = points[i - 1].y + 1;
        }
      }

      const y = window.scrollY;
      let temp = MIN;
      if (y <= points[0].y) {
        temp = points[0].temp;
      } else if (y >= points[points.length - 1].y) {
        temp = points[points.length - 1].temp;
      } else {
        for (let i = 0; i < points.length - 1; i++) {
          const a = points[i];
          const b = points[i + 1];
          if (y >= a.y && y <= b.y) {
            const t = (y - a.y) / (b.y - a.y);
            temp = a.temp + (b.temp - a.temp) * t;
            break;
          }
        }
      }

      const heat = (temp - MIN) / (MAX - MIN);
      root.style.setProperty("--heat", heat.toFixed(4));

      const rounded = Math.round(temp);
      if (rounded !== lastRounded) {
        lastRounded = rounded;
        const value = document.getElementById("thermo-value");
        if (value) value.textContent = String(rounded);
        const meter = document.getElementById("thermo-meter");
        meter?.setAttribute("aria-valuenow", String(rounded));
        meter?.setAttribute("aria-valuetext", `${rounded} degrees Celsius`);
      }

      let active = points[0].id;
      for (const point of points) {
        if (y >= point.y - 12) active = point.id;
      }
      let nearest = points[0];
      let best = Infinity;
      for (const point of points) {
        const d = Math.abs(point.temp - temp);
        if (d < best) {
          best = d;
          nearest = point;
        }
      }
      document.querySelectorAll<HTMLElement>("[data-nav]").forEach((el) => {
        const on = el.getAttribute("data-nav") === active;
        el.setAttribute("data-active", on ? "true" : "false");
        if (on) el.setAttribute("aria-current", "true");
        else el.removeAttribute("aria-current");
      });
      document.querySelectorAll<HTMLElement>("[data-tick]").forEach((el) => {
        el.toggleAttribute("data-near", el.getAttribute("data-tick") === String(nearest.temp));
      });
    };

    const onScroll = () => {
      window.cancelAnimationFrame(frame);
      frame = window.requestAnimationFrame(measure);
    };

    measure();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <aside className="thermo" aria-label="Temperature along the page">
      <div className="thermo-stage">
        <div
          className="thermo-tube"
          id="thermo-meter"
          role="meter"
          aria-valuemin={MIN}
          aria-valuemax={MAX}
          aria-valuenow={MIN}
          aria-valuetext="20 degrees Celsius"
          aria-label="Page temperature"
        >
          <div className="thermo-fill" />
        </div>
        {stations.map((station) => {
          const pct = ((station.temp - MIN) / (MAX - MIN)) * 100;
          const place = station.nav ?? "Introduction";
          return (
            <a
              key={station.id}
              className="thermo-tick"
              href={`#${station.id}`}
              data-tick={station.temp}
              style={{ bottom: `${pct}%` }}
              aria-label={`${station.label}, ${place}`}
            >
              <span className="tick-num">{station.temp}</span>
            </a>
          );
        })}
      </div>
    </aside>
  );
}
