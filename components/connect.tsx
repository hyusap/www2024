"use client";
import { IconType } from "react-icons";
import {
  FaTwitter,
  FaGithub,
  FaEnvelope,
  FaPhone,
  FaLinkedin,
  FaCalendar,
} from "react-icons/fa6";
import Footer from "./footer";
import { Variants, motion } from "framer-motion";

export default function Connect() {
  return (
    <section
      className=" z-10 flex min-h-screen items-center justify-center border-t-4 border-dark bg-primary p-5 text-dark"
      id="connect"
    >
      <div className="flex flex-col gap-6">
        <h2 className="text-center font-display text-5xl">connect with me</h2>
        <motion.div
          className="grid grid-cols-2 gap-4"
          initial="hidden"
          whileInView="visible"
          // transition={{ staggerChildren: 0.1 }}
          variants={{
            visible: {
              transition: {
                delayChildren: 0.5,
                staggerChildren: 0.2,
              },
            },
          }}
        >
          <SocialIcon
            href="https://twitter.com/hyusapx"
            icon={FaTwitter}
            label="Ayush Paul on X"
          />
          <SocialIcon
            href="https://github.com/hyusap"
            icon={FaGithub}
            label="Ayush Paul on GitHub"
          />
          <SocialIcon
            href="mailto:hi@ayush.digital"
            icon={FaEnvelope}
            label="Email Ayush Paul"
          />
          <SocialIcon
            href="tel:2608498727"
            icon={FaPhone}
            label="Call Ayush Paul"
          />
          <SocialIcon
            href="https://linkedin.com/in/ayush-paul-nc"
            icon={FaLinkedin}
            label="Ayush Paul on LinkedIn"
          />
          <SocialIcon
            href="https://cal.com/ayushpaul"
            icon={FaCalendar}
            label="Schedule time with Ayush Paul"
          />
        </motion.div>
      </div>
      {/* <Footer /> */}
    </section>
  );
}

interface SocialIconProps {
  href: string;
  icon: IconType;
  label: string;
}

const variants: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.5,
    rotate: -180,
  },
  visible: {
    opacity: 1,
    scale: 1,
    rotate: 0,
    transition: {
      duration: 1,
      type: "spring",
    },
  },
};

function SocialIcon({ href, icon: Icon, label }: SocialIconProps) {
  return (
    <motion.div
      className="aspect-square translate-x-2 translate-y-2 bg-dark"
      variants={variants}
    >
      <a
        href={href}
        aria-label={label}
        title={label}
        className="flex h-full w-full -translate-x-2 -translate-y-2 items-center justify-center border-8 border-dark bg-light transition-all duration-300 ease-in-out hover:-translate-x-3 hover:-translate-y-3 focus:translate-x-0 focus:translate-y-0 focus:outline-none"
      >
        <Icon className="h-1/2 w-1/2" aria-hidden="true" />
      </a>
    </motion.div>
  );
}
