import Sticky from "./sticky";
import { cn } from "@/lib/utils";

interface StickyStackProps {
  notes: string[];
}

export default function StickyStack({ notes }: StickyStackProps) {
  const getRandomTilt = () => Math.random() * 16 - 8; // Random value between -8 and 8
  const getRandomOffset = () => ({
    x: Math.random() * 100 - 50, // Random value between -50px and 50px
    y: Math.random() * 100 - 50,
    rotate: Math.random() * 10 - 5, // Random rotation between -5 and 5 degrees
    scale: 0.95 + Math.random() * 0.1, // Random scale between 0.95 and 1.05
    margin: Math.random() * 20, // Random additional margin
  });

  return (
    <div className="my-10 flex w-full max-w-[410px] flex-col items-center gap-5 md:grid md:max-w-none md:grid-cols-[repeat(auto-fit,minmax(200px,1fr))] md:place-items-center md:gap-10 lg:grid-cols-[repeat(auto-fit,minmax(300px,1fr))]">
      {notes.map((note, index) => {
        const offset = getRandomOffset();
        return (
          <div
            key={index}
            className={cn(
              "relative transform-none transition-transform duration-300 hover:z-10 hover:scale-105",
              index % 2 === 1 ? "mr-8 mt-[-20px] self-end" : "ml-8 self-start",
              "lg:m-0 lg:w-auto lg:translate-x-[var(--x)] lg:translate-y-[var(--y)] lg:rotate-[var(--rotate)] lg:scale-[var(--scale)]",
            )}
            style={
              {
                "--x": `${offset.x}px`,
                "--y": `${offset.y}px`,
                "--rotate": `${offset.rotate}deg`,
                "--scale": offset.scale,
                margin: `${offset.margin}px`,
              } as React.CSSProperties
            }
          >
            <Sticky tilt={getRandomTilt()}>{note}</Sticky>
          </div>
        );
      })}
    </div>
  );
}
