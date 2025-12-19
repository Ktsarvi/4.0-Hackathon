import Features from "./homepage/components/Features";
import HeroSection from "./homepage/components/HeroSection";
import Navbar from "./homepage/components/Navbar";

export default function Home() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <Features />
    </div>
  );
}
