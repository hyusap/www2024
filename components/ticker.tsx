"use client";
import {
  motion,
  useAnimationFrame,
  useMotionValue,
  useScroll,
  useSpring,
  useTransform,
  useVelocity,
} from "framer-motion";
import { useRef } from "react";

const TEXT =
  "DeveLoper ❉ DesIGner ❉ Student ❉ Maker ❉ Hacker ❉ Engineer ❉ Baker ❉ ";
const REPEATS = 5;
const VELOCITY = 3;

export default function Ticker() {
  const baseX = useMotionValue(0);
  // wrap value between 40 and 60 via a transform
  const x = useTransform(
    baseX,
    (baseX) => `${(baseX % (100 / REPEATS)) - (50 + 100 / REPEATS / 2)}%`,
  );

  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 50,
    stiffness: 400,
  });
  const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], {
    clamp: false,
  });

  const directionFactor = useRef<number>(1);
  useAnimationFrame((t, delta) => {
    let moveBy = -VELOCITY * (delta / 1000);
    baseX.set(baseX.get() + delta / 1000);

    moveBy += moveBy * velocityFactor.get();

    baseX.set(baseX.get() + moveBy);
  });

  return (
    <section
      className="overflow-x-clip border-y-8 border-dark bg-accent p-2 font-display text-7xl"
      id="ticker"
    >
      <div className="relative">
        &#8203;
        <motion.h2 className="absolute top-0 whitespace-nowrap" style={{ x }}>
          {Array.from({ length: REPEATS }).map((_, i) => (
            <span key={i}>{TEXT}</span>
          ))}
        </motion.h2>
      </div>
    </section>
  );
}
