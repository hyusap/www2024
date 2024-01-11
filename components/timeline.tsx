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

  const x = useTransform(scrollYProgress, [0, 1], ["50%", "-50%"]);

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    console.log("Page scroll: ", latest);
  });

  return (
    <section className="h-[200vh]" ref={ref}>
      <div className="sticky top-0 flex min-h-screen flex-1 flex-col items-center justify-center overflow-x-hidden bg-secondary text-light underline">
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
              <Image src={bloom} alt="Bloom" className="w-1/2 md:w-1/3" />
            </div>
          </Event>
          <Connector />
          <Event
            title="Queen City Hacks"
            subtitle="Founder & Director"
            date="Jul 21' → Present"
          >
            <p className="lg:text-2xl">
              Founded and directed the largest independent high school hackathon
              in the Carolinas! Over 100+ students have attended our events, and
              we have numerous community partners, allowing us to provide a free
              experience to all attendees!
            </p>
          </Event>
          <Connector />
          <Event
            title="FIRST Robotics"
            subtitle="Various Roles"
            date="Aug 20' → Present"
          >
            <p className="lg:text-2xl">
              Participated in the FIRST Tech Challenge and FIRST Robotics
              Competition for 4 years, winning international events!
            </p>
          </Event>
        </motion.div>
      </div>
    </section>
  );
}
