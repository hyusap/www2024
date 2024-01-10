"use client";
import { Event, Connector } from "./event";
import Image from "next/image";
import bloom from "@/public/images/bloom.png";
import {
  motion,
  useMotionValueEvent,
  useScroll,
  useTransform,
} from "framer-motion";
import { ElementRef, useRef } from "react";

export default function Timeline() {
  const ref = useRef<ElementRef<"section">>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-66%"]);

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    console.log("Page scroll: ", latest);
  });

  return (
    <section className="h-[200vh]" ref={ref}>
      <div className="sticky top-0 flex min-h-screen flex-1 flex-col justify-center overflow-x-hidden bg-secondary text-light underline">
        <h2 className="absolute top-10 self-center font-display text-5xl underline">
          Timeline
        </h2>
        <motion.div className="flex w-min px-10" style={{ x }}>
          <Event
            title="Plastic Labs"
            subtitle="AI Research Engineer"
            date="Aug 23' → Present"
          >
            <div className="flex">
              <p className="lg:text-2xl">
                Part of a team of 5 where we work at the intersection of human
                and machine learning! Building projects like Bloom and Honcho!
              </p>
              <Image src={bloom} alt="Bloom" className="w-1/2 lg:w-1/3" />
            </div>
          </Event>
          <Connector />
          <Event
            title="Plastic Labs"
            subtitle="AI Research Engineer"
            date="Aug 23' → Present"
          >
            <p className="lg:text-2xl">
              Part of a team of 5 where we work at the intersection of human and
              machine learning! Building projects like Bloom (→) and Honcho!
            </p>
            <Image src={bloom} alt="Bloom" className="w-1/2 lg:w-1/3" />
          </Event>
          <Connector />
          <Event
            title="Plastic Labs"
            subtitle="AI Research Engineer"
            date="Aug 23' → Present"
          >
            <p className="lg:text-2xl">
              Part of a team of 5 where we work at the intersection of human and
              machine learning! Building projects like Bloom (→) and Honcho!
            </p>
            <Image src={bloom} alt="Bloom" className="w-1/2 lg:w-1/3" />
          </Event>
        </motion.div>
      </div>
    </section>
  );
}
