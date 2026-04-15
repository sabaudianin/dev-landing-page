import CTA from "@/components/cta/cta";
import Hero from "@/components/hero/hero";
import Nav from "@/components/nav/nav";
import Services from "@/components/services/services";
import WhyMe from "@/components/whyMe/whyMe";

export default function Home() {
  return (
    <main>
      <Nav />
      <Hero />
      <Services />
      <WhyMe />
      <CTA />

    </main>
  );
}