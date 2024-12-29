import FeatureSection from "./Components/FeatureSection";
import HeroSection from "./Components/HeroSection";
import Navbar from "./Components/Navbar";
import Pricing from "./Components/Pricing";
import Workflow from "./Components/Workflow";

const App = () => {
  return (
    <div>
      <Navbar />
      <div className="max-w-7xl mx-auto pt-20 px-6">
        <HeroSection />
        <FeatureSection />
        <Workflow />
        <Pricing />
      </div>
    </div>
  );
};

export default App;
