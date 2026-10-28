"use client";

import { useEffect } from "react";

/**
 * Site-wide 3D hover tilt for cards. One delegated listener finds the card under
 * the pointer (rounded + bordered element with a heading, card-sized) and tilts it
 * with the standalone `rotate`/`scale` properties, so it never fights the
 * framer-motion `transform` used for entrance animations.
 * Opt in with `data-tilt`, opt out with `data-no-tilt`. Mouse-only; skipped for
 * reduced motion.
 */

const MAX_TILT_DEG = 8;
const EXCLUDED = "video, iframe, form, input, textarea, select";

function isCard(el: HTMLElement): boolean {
  if (el.hasAttribute("data-no-tilt")) return false;
  if (el.hasAttribute("data-tilt") || el.classList.contains("surface-card") || el.classList.contains("glass-card")) {
    return true;
  }
  const cls = typeof el.className === "string" ? el.className : "";
  if (!/\brounded-(xl|2xl|3xl)\b/.test(cls) || !/\bborder\b/.test(cls)) return false;
  if (!el.querySelector("h2, h3, h4") || el.querySelector(EXCLUDED)) return false;
  const { width, height } = el.getBoundingClientRect();
  return width >= 140 && width <= 960 && height >= 80 && height <= 760;
}

function findCard(target: EventTarget | null): HTMLElement | null {
  let el = target instanceof Element ? (target as HTMLElement) : null;
  while (el && el !== document.body) {
    if (el.tagName === "MAIN" || el.tagName === "HEADER" || el.tagName === "FOOTER") return null;
    if (isCard(el)) return el.closest("main") ? el : null;
    el = el.parentElement;
  }
  return null;
}

function prepare(card: HTMLElement) {
  if (card.dataset.tiltReady) return;
  card.dataset.tiltReady = "1";
  card.classList.add("tilt-card");
  if (getComputedStyle(card).position === "static") card.classList.add("tilt-card--relative");
  if (getComputedStyle(card, "::after").content !== "none") card.classList.add("tilt-card--no-glare");
  const parent = card.parentElement;
  if (parent && !parent.style.perspective) parent.style.perspective = "1000px";
}

function reset(card: HTMLElement) {
  card.classList.remove("is-tilting");
  card.style.rotate = "";
  card.style.scale = "";
}

export default function CardTilt() {
  useEffect(() => {
    const canHover = window.matchMedia("(hover: hover) and (pointer: fine)");
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (!canHover.matches || reduced.matches) return;

    let active: HTMLElement | null = null;
    let frame = 0;
    let last: PointerEvent | null = null;

    const apply = () => {
      frame = 0;
      if (!last) return;
      const card = findCard(last.target);
      if (card !== active) {
        if (active) reset(active);
        active = card;
        if (card) prepare(card);
      }
      if (!active) return;

      const r = active.getBoundingClientRect();
      const px = Math.min(Math.max((last.clientX - r.left) / r.width, 0), 1);
      const py = Math.min(Math.max((last.clientY - r.top) / r.height, 0), 1);
      // Tilt toward the pointer: rotateX from vertical offset, rotateY from horizontal.
      // Wider cards tilt less so their edges don't swing too far.
      const max = MAX_TILT_DEG * Math.min(1, 420 / r.width);
      const rx = -(py - 0.5) * 2 * max;
      const ry = (px - 0.5) * 2 * max;
      const angle = Math.hypot(rx, ry);
      active.style.rotate = angle < 0.01 ? "" : `${rx / angle} ${ry / angle} 0 ${angle.toFixed(2)}deg`;
      active.style.scale = "1.02";
      active.style.setProperty("--tilt-x", `${(px * 100).toFixed(1)}%`);
      active.style.setProperty("--tilt-y", `${(py * 100).toFixed(1)}%`);
      active.classList.add("is-tilting");
    };

    const onMove = (e: PointerEvent) => {
      if (e.pointerType !== "mouse") return;
      last = e;
      if (!frame) frame = requestAnimationFrame(apply);
    };
    const onLeaveWindow = () => {
      if (active) reset(active);
      active = null;
      last = null;
    };

    document.addEventListener("pointermove", onMove, { passive: true });
    document.documentElement.addEventListener("pointerleave", onLeaveWindow);
    return () => {
      cancelAnimationFrame(frame);
      document.removeEventListener("pointermove", onMove);
      document.documentElement.removeEventListener("pointerleave", onLeaveWindow);
      if (active) reset(active);
    };
  }, []);

  return null;
}
