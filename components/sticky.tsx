"use client";
import pin from "@/public/images/pin.svg";
import Image from "next/image";
import { motion, useAnimationControls } from "framer-motion";

interface StickyProps {
  children: React.ReactNode;
  tilt?: number;
}

export default function Sticky({ children, tilt = 0 }: StickyProps) {
  const controls = useAnimationControls();

  const handleTap = () => {
    controls.start({
      rotate: [tilt, tilt + 8, tilt - 6, tilt + 4, tilt - 2, tilt],
      transition: {
        duration: 2,
        times: [0, 0.2, 0.4, 0.6, 0.8, 1],
        ease: "easeInOut",
      },
    });
  };

  return (
    <div className="relative mt-10 w-48 lg:w-72">
      <Image
        src={pin}
        alt="pin"
        className="absolute left-1/2 top-0 z-10 w-6 -translate-x-1/2 -translate-y-1/2 lg:w-10"
      />
      <motion.div
        className="origin-top bg-[#FFFF88] p-3 pt-6 text-lg leading-tight text-black shadow-2xl lg:p-7 lg:pt-10 lg:text-4xl"
        initial={{ rotate: tilt }}
        animate={controls}
        whileHover={{
          rotate: [tilt, tilt + 4, tilt - 3, tilt + 2, tilt - 1, tilt],
          transition: {
            duration: 2,
            times: [0, 0.2, 0.4, 0.6, 0.8, 1],
            ease: "easeInOut",
          },
        }}
        onTap={handleTap}
      >
        {children}
      </motion.div>
    </div>
  );
}
