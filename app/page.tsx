import CTA from "@/components/cta/cta";
import Footer from "@/components/footer/footer";
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
      <Footer />

    </main>
  );
}