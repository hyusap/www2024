"use client";

import { motion } from "framer-motion";
import { useRef, useState, useMemo, useEffect } from "react";

const items = [
  "wrote [the memory heist](/blog/the-memory-heist), how he tricked claude into leaking your deepest, darkest secrets",
  "built [deconstructor](https://deconstructor.app), an ai etymology tool that analyzes word origins, deconstructs names, and assigns meaning to made-up words",
  "built a [ar facial recognition system](https://www.youtube.com/watch?v=iVBfLWnqzRc) that overlays information next to people's faces on snap spectacles",
  "built [nod code](https://x.com/hyusapx/status/2012263814327152947), a plugin for claude that uses airpods IMUs to detect head nods for approvals",
  "founded [queen city hacks](https://queencityhacks.com), the largest in-person high school hackathon in the carolinas",
  "built [human capital](https://x.com/hyusapx/status/1983370549943492935), a dystopian experiment where people auctioned their time on-chain",
  "built [aletheia](https://x.com/hyusapx/status/1980423183040970805), a trustless AI oracle for prediction markets that proves its work on-chain",
  "researched [wearable activity detection](https://www.rabihyounes.com/) @ [duke university](https://duke.edu)",
  "built an [ai-powered sentient plant](https://www.linkedin.com/posts/kamal-bell-a6274a126_this-was-possibly-one-of-the-most-impressive-ugcPost-7158947820165582848-dgSp) that measured its conditions and asked for help when needed",
  "built [just offset it](https://justoffsetit.com), an email-based carbon offsetting service that makes neutralizing flight emissions effortless",
  "designed a [visual language](https://comma.ayush.digital/) for self-driving cars to communicate uncertainty to passengers",
  "built [lux](https://ayush-paul.notion.site/lux), a component library for crafting beautiful ai streaming micro-interactions",
  "built [pensieve](https://github.com/hyusap/pensieve), an ai-powered memory vault that captures fleeting thoughts on ios",
  'built [b-roll](https://github.com/hyusap/b-roll), an epub reader that transforms books into swipeable reels with ai-powered "previously on" recaps',
  "directed [smathhacks](https://smathhacks.ncssm.edu), the largest hybrid highschool hackathon in the carolinas",
  "led both [frc](https://www.valencerobotics.org/) and [ftc](https://sigmacorns.org) teams in first robotics",
  "built [caffeine 2.0](https://github.com/hyusap/caffeine2.0), a website that screams at you if you try to close your eyes",
  "a hack to bypass berkeley's access control infrastructure",
  "his own [homelab + devops stack](https://lab.ayush.digital) for personal projects and hosting",
  "a smart wi-fi controlled garage door opener out of spare parts",
  "and more!",
];

const linkRegex = /\[([^\]]+)\]\(([^)]+)\)/g;

// Parse markdown links [text](url) into React elements
function parseContent(content: string) {
  const parts: (string | JSX.Element)[] = [];
  let lastIndex = 0;
  let match;

  while ((match = linkRegex.exec(content)) !== null) {
    if (match.index > lastIndex) {
      parts.push(content.slice(lastIndex, match.index));
    }
    parts.push(
      <a
        key={match.index}
        href={match[2]}
        target="_blank"
        rel="noopener noreferrer"
        className="underline hover:opacity-70"
        onClick={(e) => e.stopPropagation()}
      >
        {match[1]}
      </a>,
    );
    lastIndex = match.index + match[0].length;
  }

  if (lastIndex < content.length) {
    parts.push(content.slice(lastIndex));
  }

  return parts;
}

function plainTextFromContent(content: string) {
  return content.replace(linkRegex, "$1 ($2)");
}

interface StickyNote {
  id: number;
  content: string;
  color: string;
  rotation: number;
}

const colors = ["#F2E94E", "#A788AF"]; // yellow, purple

// Seeded random for consistent layout
function seededRandom(seed: number) {
  const x = Math.sin(seed * 9999) * 10000;
  return x - Math.floor(x);
}

function generateNotes(): StickyNote[] {
  return items.map((content, index) => {
    const seed = index + 1;
    const rand1 = seededRandom(seed);
    const colorRand = seededRandom(seed * 7);

    return {
      id: index + 1,
      content,
      color: colors[colorRand > 0.5 ? 1 : 0],
      rotation: (rand1 - 0.5) * 25,
    };
  });
}

// Helper to darken a hex color
function darkenColor(hex: string, percent: number): string {
  const num = parseInt(hex.replace("#", ""), 16);
  const r = Math.max(0, (num >> 16) - Math.round(255 * percent));
  const g = Math.max(0, ((num >> 8) & 0x00ff) - Math.round(255 * percent));
  const b = Math.max(0, (num & 0x0000ff) - Math.round(255 * percent));
  return `#${((r << 16) | (g << 8) | b).toString(16).padStart(6, "0")}`;
}

export default function StickyNotes() {
  const constraintsRef = useRef<HTMLElement>(null);
  const [zIndexes, setZIndexes] = useState<Record<number, number>>({});
  const [containerWidth, setContainerWidth] = useState(0);
  const maxZIndex = useRef(10);
  const notes = useMemo(() => generateNotes(), []);

  useEffect(() => {
    const container = constraintsRef.current;
    if (!container) return;

    const updateWidth = () => setContainerWidth(container.offsetWidth);
    const resizeObserver = new ResizeObserver(updateWidth);

    updateWidth();
    resizeObserver.observe(container);
    return () => resizeObserver.disconnect();
  }, []);

  // Calculate responsive grid
  // A full-width section is about one scrollbar narrower than the viewport.
  // Keep this in sync with the `md` styles that activate at 768px.
  const isDesktop = containerWidth >= 740;
  const isTwoColumnMobile = containerWidth >= 340;
  const paddingX = isDesktop
    ? Math.min(160, Math.max(48, containerWidth * 0.08))
    : 16;
  const columnGap = isDesktop ? 48 : 12;
  const mobileCols = isTwoColumnMobile ? 2 : 1;
  const maxMobileNoteSize = 160;
  const mobileNoteSize = Math.min(
    maxMobileNoteSize,
    Math.floor(
      (containerWidth - paddingX * 2 - columnGap * (mobileCols - 1)) /
        mobileCols,
    ),
  );
  const noteSize = isDesktop ? 200 : mobileNoteSize;
  const paddingY = isDesktop ? (containerWidth >= 1024 ? 220 : 190) : 220;
  const availableWidth = containerWidth - paddingX * 2;
  const cols = isDesktop
    ? Math.max(
        2,
        Math.floor((availableWidth + columnGap) / (noteSize + columnGap)),
      )
    : mobileCols;
  const rows = Math.ceil(notes.length / cols);
  const colWidth =
    (availableWidth - columnGap * (cols - 1)) / Math.max(cols, 1);
  const rowHeight = noteSize + (isDesktop ? 40 : 28);
  const sectionHeight = paddingY + rows * rowHeight + 48;

  const getPosition = (index: number, rotation: number) => {
    const col = index % cols;
    const row = Math.floor(index / cols);
    const seed = index + 1;
    const randX = seededRandom(seed * 2);
    const randY = seededRandom(seed * 3);
    const angle = (Math.abs(rotation) * Math.PI) / 180;
    const rotatedSize = noteSize * (Math.cos(angle) + Math.sin(angle));
    const horizontalJitter = Math.max(
      0,
      Math.min(isDesktop ? 10 : 3, (colWidth - rotatedSize) / 2),
    );

    return {
      x:
        paddingX +
        col * (colWidth + columnGap) +
        (colWidth - noteSize) / 2 +
        (randX - 0.5) * horizontalJitter * 2,
      y: paddingY + row * rowHeight + (randY - 0.5) * 16,
    };
  };

  const bringToFront = (noteId: number) => {
    maxZIndex.current += 1;
    setZIndexes((prev) => ({ ...prev, [noteId]: maxZIndex.current }));
  };

  if (!containerWidth) {
    return (
      <section
        ref={constraintsRef}
        className="bg-dark relative min-h-[400px]"
      />
    );
  }

  return (
    <section
      ref={constraintsRef}
      className="bg-dark relative overflow-hidden"
      style={{ minHeight: sectionHeight }}
      aria-labelledby="sticky-notes-heading"
    >
      {/* Section heading */}
      <h2
        className="font-display text-light pointer-events-none relative z-20 px-6 pt-12 text-6xl md:px-12 md:text-8xl lg:px-24 lg:text-9xl"
        id="sticky-notes-heading"
      >
        Ayush has...
      </h2>

      <div className="sr-only">
        <p>
          Highlights of projects, research, and community work by Ayush Paul.
        </p>
        <ul>
          {items.map((item) => (
            <li key={item}>{plainTextFromContent(item)}</li>
          ))}
        </ul>
      </div>

      {/* Dotgrid overlay */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage: `radial-gradient(circle, rgba(167, 136, 175, 0.3) 1px, transparent 1px)`,
          backgroundSize: "24px 24px",
        }}
      />

      {/* Sticky notes */}
      {notes.map((note, index) => {
        const displayRotation = isDesktop
          ? note.rotation
          : note.rotation * 0.45;
        const pos = getPosition(index, displayRotation);
        return (
          <motion.div
            key={note.id}
            drag
            dragConstraints={constraintsRef}
            dragElastic={0.1}
            dragMomentum={false}
            onDragStart={() => bringToFront(note.id)}
            whileDrag={{
              scale: 1.08,
              filter: "drop-shadow(0px 20px 20px rgba(0,0,0,0.4))",
              cursor: "grabbing",
            }}
            initial={false}
            animate={{
              x: pos.x,
              y: pos.y,
              rotate: displayRotation,
            }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            whileHover={{
              scale: 1.02,
              filter: "drop-shadow(0px 8px 10px rgba(0,0,0,0.3))",
            }}
            className="absolute top-0 left-0 cursor-grab select-none"
            style={{
              zIndex: zIndexes[note.id] || 10,
              filter: "drop-shadow(0px 4px 6px rgba(0,0,0,0.25))",
            }}
          >
            <div
              className="relative"
              style={{ width: noteSize, height: noteSize }}
            >
              {/* Main note body with corner cut */}
              <div
                className="absolute inset-0 flex flex-col rounded-xs p-3 md:p-4"
                style={{
                  backgroundColor: note.color,
                  clipPath:
                    "polygon(0 0, 100% 0, 100% calc(100% - 28px), calc(100% - 28px) 100%, 0 100%)",
                }}
              >
                <p className="text-dark text-xs leading-snug font-medium md:text-sm md:leading-relaxed">
                  {parseContent(note.content)}
                </p>
              </div>
              {/* Folded corner - triangle at the exact cut boundary */}
              <div
                className="absolute h-[28px] w-[28px]"
                style={{
                  bottom: 0,
                  right: 0,
                  backgroundColor: darkenColor(note.color, 0.15),
                  clipPath: "path('M 2 0 L 28 0 L 0 28 L 0 2 Q 0 0 2 0 Z')",
                }}
              />
            </div>
          </motion.div>
        );
      })}
    </section>
  );
}
