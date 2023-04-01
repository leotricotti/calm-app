import NavHeader from "../components/NavHeader";
import HeroSection from "../components/HeroSection";
import BannerPurple from "../components/BannerPurple";
import Footer from "../components/Footer";

function Providers() {
  return (
    <div>
      <NavHeader />
      <HeroSection
        title="Evidence-based solution that helps providers spend time with those who need it most"
        subtitle="Calm Health offers evidence-based, condition-focused mental health programs that are aligned with providers advice and workflows."
      />
      <BannerPurple
        title={"Want to learn more?"}
        text={"Request Information"}
      />
      <Footer />
    </div>
  );
}

export default Providers;
