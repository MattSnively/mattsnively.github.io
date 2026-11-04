/**
 * Shared GSAP setup. Every scroll/entrance animation goes through
 * `whenMotionOk` so motion-sensitive visitors get the static page: the CSS
 * reduced-motion block in Base.astro can't stop GSAP's JS-driven tweens, so
 * the gate has to live here.
 */
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

/**
 * Runs `setup` only while the visitor allows motion. gsap.matchMedia reverts
 * every tween/ScrollTrigger created inside `setup` if the OS setting flips
 * mid-session, so callers never need their own cleanup.
 */
export function whenMotionOk(setup: () => void | (() => void)) {
  const mm = gsap.matchMedia();
  mm.add('(prefers-reduced-motion: no-preference)', setup);
  return mm;
}

export { gsap, ScrollTrigger };
