import StickyStack from "./sticky-stack";
import { useState } from "react";
import { motion } from "framer-motion";

export default function Experience() {
  const [visibleBuiltCount, setVisibleBuiltCount] = useState(8);
  const INCREMENT = 5;

  const sections = {
    is: [
      "studying computer science and electrical engineering, currently a freshman @ berkeley",
      "building at intersection of human and machine cognition @ plastic labs",
    ],
    has: [
      "co-founded LRNT, an ai ed-tech research-driven platform",
      "founded queen city hacks, the largest in-person highschool hackathon in the carolinas",
      "participated in first robotics, leading both frc and ftc teams",
      "freelanced for various clients in automation, web-dev, and recently, ai",
      "conducted wearable activity detection research @ duke university",
      "co-directed unihacks / smathhacks, the largest hybrid highschool hackathon in the carolinas",
      "participated in a educational raytheon engineering internship",
    ],
    built: [
      'a prototype "jarvis"-powered ironman hud, utilizing multimodal ai',
      "eidetic memory via ar glasses using the snap spectacles",
      "a live ai dating coach to catch you before you make mistakes",
      "an ai sentient plant that could measure it's conditions and ask for help",
      'an ai-powered "pensieve" for fleeting thoughts for ios',
      "a design language for self driving cars to communicate uncertainty",
      "an orbital manuever simulator to calculate the hohmann transfer to mars and back",
      "a component library to create beautiful ai streaming micro-interactions",
      "a caffeine alternative that screams at you if you try to close your eyes",
      'a personality map of events, grouping similar people in various "cities"',
      "an artificial personal secretary to manage my inbox",
      "an ai mentor for underprivileged robotics teams",
      "a webmidi powered looper that hijacks then extends your existing instruments",
      "his own homelab + devops stack for personal projects and hosting",
      "a spacial ui-inspired personal dashboard with calendar, tasks, menus and more",
      "a hack to bypass berkeley's access control infrastructure",
      "a smart wi-fi controlled garage door opener out of spare parts",
      "a custom smart home automation set-up",
      "an ai powered homework scan organizer",
      "a jamba juice account creator to snag 50% offers",
      "countless iterations of his personal website",
    ],
  };

  const visibleBuiltNotes = sections.built.slice(0, visibleBuiltCount);
  const hasMoreBuilt = visibleBuiltCount < sections.built.length;

  return (
    <div className="flex min-h-screen flex-col items-center bg-dark p-5 text-light">
      <h2 className="font-display text-5xl lg:text-7xl">ayush is...</h2>
      <StickyStack notes={sections.is} />
      <h2 className="font-display text-5xl lg:text-7xl">ayush has...</h2>
      <StickyStack notes={sections.has} />
      <h2 className="font-display text-5xl lg:text-7xl">ayush built...</h2>
      <div className="flex w-full flex-col items-center">
        <StickyStack notes={visibleBuiltNotes} />
        {hasMoreBuilt && (
          <motion.button
            onClick={() =>
              setVisibleBuiltCount((prev) =>
                Math.min(prev + INCREMENT, sections.built.length),
              )
            }
            className="mb-10 rounded-lg bg-light px-12 py-4 text-2xl font-medium text-dark"
            whileHover={{
              scale: 1.1,
              transition: { type: "spring", stiffness: 400 },
            }}
            animate={{
              rotate: [-4, 4, -4],
              transition: {
                repeat: Infinity,
                duration: 2,
                ease: "easeInOut",
              },
            }}
          >
            See More
          </motion.button>
        )}
      </div>
    </div>
  );
}
