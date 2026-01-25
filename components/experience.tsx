import Image from "next/image";
import berkeleymap from "@/public/images/berkeleymap.png";
import beem from "@/public/images/beem.svg";
import plastic from "@/public/images/plastic.svg";

export default function Experience() {

  return (
    <section className="flex flex-col items-center overflow-x-hidden bg-secondary p-10 text-light border-b-8 border-dark">
      <div className="flex flex-col gap-10 max-w-2xl w-full">
        <div className="flex items-center gap-10">
          <h2 className="text-xl lg:text-2xl text-center w-1/2 sm:w-3/5">Ayush currently studies CS & EE at <a href="https://www.berkeley.edu/" target="_blank" rel="noopener noreferrer" className="underline transition-colors hover:text-blue-500">UC Berkeley</a>.</h2>
          <Image src={berkeleymap} width={500} alt="Map of UC Berkeley" className="rounded-2xl border-dark border-8 shadow-2xl rotate-6 hover:scale-105 transition-all duration-300 ease-in-out hover:rotate-3 w-1/2 sm:w-2/5 cursor-pointer" onClick={() => window.open("https://www.berkeley.edu/", "_blank")} />
        </div>


        <div className="flex items-center gap-10">
          <Image src={beem} width={500} alt="Beem Logo" className="rounded-2xl border-dark border-8 shadow-2xl -rotate-6 hover:scale-105 transition-all duration-300 ease-in-out hover:-rotate-3 w-1/2 sm:w-2/5 cursor-pointer" onClick={() => window.open("https://beem.computer", "_blank")} />

          <h2 className="text-xl lg:text-2xl text-center w-1/2 sm:w-3/5">He's working on the future of personal computing at <a href="https://beem.computer" target="_blank" rel="noopener noreferrer" className="underline transition-colors hover:text-blue-500">Beem</a>.</h2>
        </div>

        <div className="flex items-center gap-10">
          <h2 className="text-xl lg:text-2xl text-center w-1/2 sm:w-3/5">In the past, he worked on <a href="https://honcho.dev" target="_blank" rel="noopener noreferrer" className="underline transition-colors hover:text-blue-500">SOTA memory</a> and <a href="https://bloombot.ai" target="_blank" rel="noopener noreferrer" className="underline transition-colors hover:text-blue-500">personalization</a> at <a href="https://plasticlabs.ai" target="_blank" rel="noopener noreferrer" className="underline transition-colors hover:text-blue-500">Plastic Labs</a>.</h2>
          <Image src={plastic} width={500} alt="Plastic" className="rounded-2xl border-dark border-8 shadow-2xl rotate-6 hover:scale-105 transition-all duration-300 ease-in-out hover:rotate-3 w-1/2 sm:w-2/5 cursor-pointer" onClick={() => window.open("https://plasticlabs.ai", "_blank")} />
        </div>
      </div>
    </section>
  );
}


