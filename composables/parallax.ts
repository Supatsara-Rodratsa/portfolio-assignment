import { useParallax } from "@vueuse/core";
import { TweenMax } from "gsap";

export function ParallaxTracker(container: any) {
  return useParallax(container);
}

export function ParallaxMovement(
  targets: gsap.TweenTarget,
  eventX: number,
  eventY: number,
  num: number,
  isRotate?: boolean
) {
  TweenMax.to(targets, 1, {
    x: eventX * num * -1,
    y: eventY * num,
    rotateX: isRotate ? eventX * num : 0,
    rotateY: isRotate ? eventY * num : 0,
  });
}
