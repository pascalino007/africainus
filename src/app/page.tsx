import Header from "@/components/Header";
import Hero from "@/components/Hero";
import VideoSection from "@/components/VideoSection";
import Services from "@/components/Services";
import Work from "@/components/Work";
import About from "@/components/About";
import CTA from "@/components/CTA";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <VideoSection />
        <Services />
        <Work />
        <About />
        <CTA />
        <Contact />
        <Footer />
      </main>
    </>
  );
}
