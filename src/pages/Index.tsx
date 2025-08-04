import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Streaming from "@/components/Streaming";
import ClubeCerto from "@/components/ClubeCerto";
import AppSection from "@/components/AppSection";
import Plans from "@/components/Plans";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <Plans />
      <Features />
      <Streaming />
      <ClubeCerto />
      <AppSection />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
