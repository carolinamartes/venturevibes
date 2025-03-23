import { Header } from "@/components/sections/Header";
import { Hero } from "@/components/sections/Hero";
import { PainPoints } from "@/components/sections/PainPoints";
import { Features } from "@/components/sections/Features";
import { MarketReality } from "@/components/sections/MarketReality";
import { CTA } from "@/components/sections/CTA";
import { Footer } from "@/components/sections/Footer";
import "./App.css";

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100">
      <Header />
      <Hero />
      <Features />
      <PainPoints />
      <MarketReality />
      <CTA />
      <Footer />
    </div>
  );
}

export default App;
