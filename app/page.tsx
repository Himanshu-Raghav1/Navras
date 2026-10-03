import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import EventHighlights from "@/components/EventHighlights";
import AboutNavras from "@/components/AboutNavras";
import RasaSection from "@/components/RasaSection";
import EventDetails from "@/components/EventDetails";
import RegistrationCTA from "@/components/RegistrationCTA";
import Footer from "@/components/Footer";
import StickyCTA from "@/components/StickyCTA";

export default function Home() {
  return (
    <>
      <Navbar />
      <main id="main-content">
        <Hero />
        <EventHighlights />
        <AboutNavras />
        <RasaSection />
        <EventDetails />
        <RegistrationCTA />
      </main>
      <Footer />
      <StickyCTA />
    </>
  );
}
