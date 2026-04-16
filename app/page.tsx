import CTA from "@/components/cta/cta";
import FAQ from "@/components/faq/faq";
import Footer from "@/components/footer/footer";
import Hero from "@/components/hero/hero";
import Nav from "@/components/nav/nav";
import Process from "@/components/process/process";
import Services from "@/components/services/services";
import WhyMe from "@/components/whyMe/whyMe";

export default function Home() {
  return (
    <main className="relative">
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_-20%,#3b227a_0%,transparent_50%)] opacity-40" />
      <div
        className="absolute inset-0 opacity-[0.1] pointer-events-none"
        style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%239C92AC' fill-opacity='0.4' fill-rule='evenodd'%3E%3Cpath d='M0 40L40 0H20L0 20M40 40V20L20 40'/%3E%3C/g%3E%3C/svg%3E")` }}
      />
      <Nav />
      <Hero />
      <Services />
      <WhyMe />
      <CTA />
      <Process />
      <FAQ />
      <Footer />

    </main>
  );
}