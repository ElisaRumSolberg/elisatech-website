"use client";

import { useEffect, useRef, type ReactNode } from "react";

/** Adds `is-in` to every [data-reveal] element once it scrolls into view. */
export function RevealObserver() {
  useEffect(() => {
    document.documentElement.classList.add("motion-ready");
    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          entry.target.classList.add("is-in");
          io.unobserve(entry.target);
        }
      },
      { threshold: 0.18, rootMargin: "0px 0px -6% 0px" },
    );
    document.querySelectorAll("[data-reveal]").forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
  return null;
}

/** The pearl: drifts on its own and leans gently toward the pointer. */
export function Pearl() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el || !window.matchMedia("(prefers-reduced-motion: no-preference) and (pointer: fine)").matches) return;
    let tx = 0, ty = 0, x = 0, y = 0, frame = 0;
    const onMove = (e: PointerEvent) => {
      tx = (e.clientX / window.innerWidth - 0.5) * 36;
      ty = (e.clientY / window.innerHeight - 0.5) * 28;
      if (!frame) frame = requestAnimationFrame(tick);
    };
    const tick = () => {
      x += (tx - x) * 0.06;
      y += (ty - y) * 0.06;
      el.style.setProperty("--px", `${x.toFixed(2)}px`);
      el.style.setProperty("--py", `${y.toFixed(2)}px`);
      frame = Math.abs(tx - x) + Math.abs(ty - y) > 0.1 ? requestAnimationFrame(tick) : 0;
    };
    window.addEventListener("pointermove", onMove, { passive: true });
    return () => {
      window.removeEventListener("pointermove", onMove);
      cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <div className="pearl-wrap" aria-hidden="true">
      <div className="pearl" ref={ref}>
        <div className="pearl-sheen" />
      </div>
      <Sparkle className="sparkle s1" />
      <Sparkle className="sparkle s2" />
      <Sparkle className="sparkle s3" />
    </div>
  );
}

export function Sparkle({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 1.5c.6 5.6 4.4 9.6 10.5 10.5-6.1.9-9.9 4.9-10.5 10.5-.6-5.6-4.4-9.6-10.5-10.5C7.6 11.1 11.4 7.1 12 1.5z" />
    </svg>
  );
}

/** A screenshot in a soft browser frame that tilts a little toward the pointer. */
export function Shot({ children, label }: { children: ReactNode; label: string }) {
  const ref = useRef<HTMLDivElement>(null);

  const onMove = (e: React.PointerEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el || e.pointerType !== "mouse") return;
    const r = el.getBoundingClientRect();
    const dx = (e.clientX - r.left) / r.width - 0.5;
    const dy = (e.clientY - r.top) / r.height - 0.5;
    el.style.setProperty("--rx", `${(-dy * 5).toFixed(2)}deg`);
    el.style.setProperty("--ry", `${(dx * 6).toFixed(2)}deg`);
  };
  const onLeave = () => {
    ref.current?.style.setProperty("--rx", "0deg");
    ref.current?.style.setProperty("--ry", "0deg");
  };

  return (
    <div className="shot" ref={ref} onPointerMove={onMove} onPointerLeave={onLeave}>
      <div className="shot-bar" aria-hidden="true">
        <span /><span /><span />
        <em>{label}</em>
      </div>
      {children}
    </div>
  );
}
