"use client";
import Connect from "@/components/connect";
import Footer from "@/components/footer";
import Hero from "@/components/hero";
import Loading from "@/components/loading";
import Ticker from "@/components/ticker";
import Timeline from "@/components/timeline";
// import { motion } from "framer-motion";
// import { useEffect, useState } from "react";

// import { FaArrowDown } from "react-icons/fa6";

export default function Home() {
  // const [mousePosition, setMousePosition] = useState({
  //   x: 0,
  //   y: 0,
  // });

  // useEffect(() => {
  //   const handleMouseMove = (e: MouseEvent) => {
  //     setMousePosition({
  //       x: e.clientX,
  //       y: e.clientY,
  //     });
  //   };

  //   window.addEventListener("mousemove", handleMouseMove);

  //   return () => window.removeEventListener("mousemove", handleMouseMove);
  // });

  return (
    <main className="flex min-h-screen flex-col bg-primary text-dark">
      {/* <motion.div
        className="pointer-events-none absolute z-40 flex size-14 items-center justify-center rounded-full bg-dark"
        style={{
          x: mousePosition.x - 56 / 2,
          y: mousePosition.y - 56 / 2,
          opacity: mousePosition.x === 0 && mousePosition.y === 0 ? 0 : 1,
        }}
      >
        <FaArrowDown className="h-5 w-5 animate-bounce text-light" />
      </motion.div> */}
      <Loading />
      <Hero />
      <Ticker />
      <Timeline />
      <Connect />
      <Footer />
    </main>
  );
}
