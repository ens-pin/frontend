import Developer from "@/components/Developer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import ScrollReveal from "@/components/ScrollReveal";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero/>
      <ScrollReveal
        baseOpacity={0}
        enableBlur={true}
        baseRotation={2}
        blurStrength={5}
      >
        Testing testing
      </ScrollReveal>
      <Developer/>
    </>
  );
}
