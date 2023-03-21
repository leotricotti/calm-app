import featureSectionData from "../assets/data/feactureSectionData";
import additionalFeatureData from "../assets/data/additionalFeatureData";
import NavHeader from "../components/NavHeader";
import HeroSection from "../components/HeroSection";
import MainVideo from "../components/MainVideo";
import FeatureSection from "../components/FeatureSection";
import AdditionalFeature from "../components/AdditionalFeature";
import BannerPurple from "../components/BannerPurple";

function Home() {
  return (
    <>
      <NavHeader />
      <HeroSection />
      <MainVideo />
      <FeatureSection data={featureSectionData} />
      <AdditionalFeature data={additionalFeatureData} />
      <BannerPurple
        title={"Want to learn more?"}
        text={"Request Information"}
      />
    </>
  );
}

export default Home;
