import Image from "next/image";
import berkeleymap from "@/public/images/berkeleymap.png";
import beem from "@/public/images/beem.svg";
import plastic from "@/public/images/plastic.svg";

export default function Experience() {
  return (
    <section
      className="flex flex-col items-center overflow-x-hidden border-b-8 border-dark bg-secondary p-10 text-light"
      aria-labelledby="experience-heading"
    >
      <h2 className="sr-only" id="experience-heading">
        Experience and affiliations
      </h2>
      <div className="flex w-full max-w-2xl flex-col gap-10">
        <div className="flex items-center gap-10">
          <h2 className="w-1/2 text-center text-xl sm:w-3/5 lg:text-2xl">
            Ayush currently studies CS & EE at{" "}
            <a
              href="https://www.berkeley.edu/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline transition-colors hover:text-blue-500"
            >
              UC Berkeley
            </a>
            .
          </h2>
          <Image
            src={berkeleymap}
            width={500}
            alt="Map of UC Berkeley"
            className="w-1/2 rotate-6 cursor-pointer rounded-2xl border-8 border-dark shadow-2xl transition-all duration-300 ease-in-out hover:rotate-3 hover:scale-105 sm:w-2/5"
            onClick={() => window.open("https://www.berkeley.edu/", "_blank")}
          />
        </div>

        <div className="flex items-center gap-10">
          <Image
            src={beem}
            width={500}
            alt="Beem Logo"
            className="w-1/2 -rotate-6 cursor-pointer rounded-2xl border-8 border-dark shadow-2xl transition-all duration-300 ease-in-out hover:-rotate-3 hover:scale-105 sm:w-2/5"
            onClick={() => window.open("https://beem.computer", "_blank")}
          />

          <h2 className="w-1/2 text-center text-xl sm:w-3/5 lg:text-2xl">
            He&apos;s working on the future of personal computing at{" "}
            <a
              href="https://beem.computer"
              target="_blank"
              rel="noopener noreferrer"
              className="underline transition-colors hover:text-blue-500"
            >
              Beem
            </a>
            .
          </h2>
        </div>

        <div className="flex items-center gap-10">
          <h2 className="w-1/2 text-center text-xl sm:w-3/5 lg:text-2xl">
            In the past, he worked on{" "}
            <a
              href="https://honcho.dev"
              target="_blank"
              rel="noopener noreferrer"
              className="underline transition-colors hover:text-blue-500"
            >
              SOTA memory
            </a>{" "}
            and{" "}
            <a
              href="https://bloombot.ai"
              target="_blank"
              rel="noopener noreferrer"
              className="underline transition-colors hover:text-blue-500"
            >
              personalization
            </a>{" "}
            at{" "}
            <a
              href="https://plasticlabs.ai"
              target="_blank"
              rel="noopener noreferrer"
              className="underline transition-colors hover:text-blue-500"
            >
              Plastic Labs
            </a>
            .
          </h2>
          <Image
            src={plastic}
            width={500}
            alt="Plastic"
            className="w-1/2 rotate-6 cursor-pointer rounded-2xl border-8 border-dark shadow-2xl transition-all duration-300 ease-in-out hover:rotate-3 hover:scale-105 sm:w-2/5"
            onClick={() => window.open("https://plasticlabs.ai", "_blank")}
          />
        </div>
      </div>
    </section>
  );
}
