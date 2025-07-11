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
import ScrollPrompt from "./scrollprompt";
import useWindowDimensions from "@/hooks/useWindowDimensions";

export default function Timeline() {
  const ref = useRef<ElementRef<"section">>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["50%", "-50%"]);

  const dimensions = useWindowDimensions();

  const isLg = dimensions.width != null && dimensions.width >= 1024;
  const style = isLg ? { x } : {};

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    console.log("Page scroll: ", latest);
  });

  return (
    <section className="relative lg:h-[300vh]" ref={ref}>
      <div className="flex min-h-screen flex-1 flex-col overflow-x-hidden bg-secondary text-light underline lg:sticky lg:top-0 lg:items-center lg:justify-center">
        <h2 className="self-center p-5 font-display text-5xl underline lg:absolute lg:top-10">
          Timeline
        </h2>
        <motion.div
          className="flex w-min flex-col p-10 lg:flex-row lg:py-0"
          style={style}
        >
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
              <Image src={bloom} alt="Bloom AI project interface showing machine learning visualization" className="w-1/2 md:w-1/3" />
            </div>
          </Event>
          <Connector />
          <Event
            title="Queen City Hacks"
            subtitle="Founder & Director"
            date="Aug 22' → Present"
          >
            <p className="lg:text-2xl">
              Founded and directed the largest independent high school hackathon
              in the Carolinas! Over 100+ students have attended our events, and
              we have numerous community partners, allowing us to provide a free
              experience to all attendees!
            </p>
          </Event>
          <Connector />
          <Event title="NCSSM" subtitle="Student" date="Jun 22' → Present">
            <p className="lg:text-2xl">
              Currently a student at the North Carolina School of Science and
              Mathematics, a public residential STEM high school for gifted
              students! I&apos;m currently taking classes in computer science,
              math, engineering, and physics!
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
              Competition for 4 years, leading programming, design, and outreach
              teams to international success!
            </p>
          </Event>
          <Connector />
          <Event
            title="Freelancing"
            subtitle="Automation & Full Stack"
            date="Jun 19' → Present"
          >
            <p className="lg:text-2xl">
              Freelanced for several years, building websites, automating tasks,
              and building full stack applications for clients!
            </p>
          </Event>
        </motion.div>
        <ScrollPrompt />
      </div>
    </section>
  );
}
