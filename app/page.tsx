import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { Services } from "@/components/services";
import { Values } from "@/components/values";
import { Process } from "@/components/process";
import { Results } from "@/components/results";
import { Packages } from "@/components/packages";
import { Manifesto } from "@/components/manifesto";
import { CTA } from "@/components/cta";
import { Footer } from "@/components/footer";

export default function Page() {
  return (
    <main className="bg-white dark:bg-black text-black dark:text-white overflow-hidden transition-colors duration-300">
      <Navbar />
      <Hero />
      <div className="h-2 bg-gradient-to-r from-cyan-400/0 via-cyan-500 dark:via-cyan-400 to-cyan-400/0 transition-colors duration-300"></div>
      <Services />
      <Values />
      <div className="h-2 bg-gradient-to-r from-cyan-400/0 via-cyan-500 dark:via-cyan-400 to-cyan-400/0 transition-colors duration-300"></div>
      <Process />
      <Results />
      <div className="h-2 bg-gradient-to-r from-cyan-400/0 via-cyan-500 dark:via-cyan-400 to-cyan-400/0 transition-colors duration-300"></div>
      <Packages />
      <Manifesto />
      <div className="h-2 bg-gradient-to-r from-cyan-400/0 via-cyan-500 dark:via-cyan-400 to-cyan-400/0 transition-colors duration-300"></div>
      <CTA />
      <Footer />
    </main>
  );
}
