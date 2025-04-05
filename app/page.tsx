import Developer from "@/components/Developer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import ScrollReveal from "@/components/ScrollReveal";
import Image from "next/image";
import Dashboard from "./dashboard/page";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <>
        <Navbar />
        <Hero />
        <ScrollReveal>
          ENSPin makes sure your IPFS content stays alive
        </ScrollReveal>
        <div className="py-20">
          <Developer />
        </div>
        <div className="py-20">
          <Footer />
        </div>
      </>
    </>
  );
}
