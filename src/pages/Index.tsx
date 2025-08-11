import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Plans from "@/components/Plans";
import PromoBanner from "@/components/PromoBanner";

import Features from "@/components/Features";
import Streaming from "@/components/Streaming";
import Testimonials from "@/components/Testimonials";
// import Coverage from "@/components/Coverage";
import FAQ from "@/components/FAQ";
import ClubeCerto from "@/components/ClubeCerto";
import AppSection from "@/components/AppSection";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import FloatingActions from "@/components/FloatingActions";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <Plans />
      <PromoBanner />
      <Features />
      <Streaming />
      <Testimonials />
      <FAQ />
      <ClubeCerto />
      <AppSection />
      <Contact />
      <Footer />
      <FloatingActions />
    </div>
  );
};

export default Index;
