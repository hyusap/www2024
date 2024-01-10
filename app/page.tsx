import Connect from "@/components/connect";
import Footer from "@/components/footer";
import Hero from "@/components/hero";
import Ticker from "@/components/ticker";
import Timeline from "@/components/timeline";

export default function Home() {
  return (
    <main className=" flex min-h-screen flex-col bg-primary text-dark">
      <div className="z-10 flex flex-col">
        <Hero />
        <Ticker />
        <Timeline />
        <Connect />
      </div>
      <Footer />
    </main>
  );
}
