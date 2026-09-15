"use client";

import { useEffect, useRef } from "react";

type Ember = {
  x: number;
  y: number;
  r: number;
  vx: number;
  vy: number;
  life: number;
  max: number;
};

export default function Embers({ count = 70 }: { count?: number }) {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let w = 0;
    let h = 0;
    let frame = 0;
    const embers: Ember[] = [];

    const spawn = (e?: Ember): Ember => {
      const n = e ?? ({} as Ember);
      n.x = Math.random() * w;
      n.y = h + Math.random() * 40;
      n.r = 0.8 + Math.random() * 2.2;
      n.vx = (Math.random() - 0.5) * 0.4;
      n.vy = -(0.4 + Math.random() * 1.1);
      n.life = 0;
      n.max = 240 + Math.random() * 260;
      return n;
    };

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      w = canvas.clientWidth;
      h = canvas.clientHeight;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    resize();
    for (let i = 0; i < count; i++) {
      const e = spawn();
      e.y = Math.random() * h;
      e.life = Math.random() * e.max;
      embers.push(e);
    }

    const tick = () => {
      ctx.clearRect(0, 0, w, h);
      for (const e of embers) {
        e.life += 1;
        e.x += e.vx + Math.sin(e.life / 30) * 0.25;
        e.y += e.vy;
        const t = e.life / e.max;
        const alpha = t < 0.15 ? t / 0.15 : 1 - (t - 0.15) / 0.85;
        ctx.beginPath();
        ctx.arc(e.x, e.y, e.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, ${140 + Math.floor(80 * (1 - t))}, 60, ${Math.max(alpha, 0) * 0.9})`;
        ctx.shadowBlur = 12;
        ctx.shadowColor = "rgba(255,120,40,0.9)";
        ctx.fill();
        if (e.life >= e.max || e.y < -20) spawn(e);
      }
      frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    window.addEventListener("resize", resize);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("resize", resize);
    };
  }, [count]);

  return (
    <canvas
      ref={ref}
      aria-hidden
      className="pointer-events-none absolute inset-0 h-full w-full"
    />
  );
}
