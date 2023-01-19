import { useParallax } from "@vueuse/core";
import { TweenMax } from "gsap";

export function ParallaxTracker(container: any) {
  return useParallax(container);
}

export function ParallaxMovement(
  targets: gsap.TweenTarget,
  eventX: number,
  eventY: number,
  offset: number,
  isRotate?: boolean
) {
  TweenMax.to(targets, 1, {
    x: eventX * offset * -1,
    y: eventY * offset,
    rotateX: isRotate ? eventX * offset : 0,
    rotateY: isRotate ? eventY * offset : 0,
  });
}
