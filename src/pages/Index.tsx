import HeroSection from "@/components/travel/HeroSection";
import ToursSection from "@/components/travel/ToursSection";
import AboutSection from "@/components/travel/AboutSection";
import ContactSection from "@/components/travel/ContactSection";

export default function Index() {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen font-body" style={{ color: "var(--charcoal)", background: "var(--cream)" }}>
      <HeroSection scrollTo={scrollTo} />
      <ToursSection scrollTo={scrollTo} />
      <AboutSection />
      <ContactSection scrollTo={scrollTo} />
    </div>
  );
}
