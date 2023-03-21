import featureSectionData from "../assets/data/feactureSectionData";
import NavHeader from "../components/NavHeader";
import HeroSection from "../components/HeroSection";
import MainVideo from "../components/MainVideo";
import FeatureSection from "../components/FeatureSection";

function Home() {
  return (
    <>
      <NavHeader />
      <HeroSection />
      <MainVideo />
      <FeatureSection data={featureSectionData} />
    </>
  );
}

export default Home;
