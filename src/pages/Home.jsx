import { useEffect } from "react";
import featureSectionData from "../assets/data/feactureSectionData";
import additionalFeatureData from "../assets/data/additionalFeatureData";
import featureListData from "../assets/data/featureListData";
import NavHeader from "../components/NavHeader";
import HeroSection from "../components/Overview/HeroSection";
import MainVideo from "../components/Overview/MainVideo";
import FeatureSection from "../components/Overview/FeatureSection";
import AdditionalFeature from "../components/Overview/AdditionalFeature";
import BannerPurple from "../components/BannerPurple";
import FeaturesList from "../components/Overview/FeaturesList";
import Footer from "../components/Footer";

function Home() {
  useEffect(() => {
    document.title = "Calm Health - Digital Mental Health App & Programs";
  }, []);

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
      <FeaturesList data={featureListData} />
      <Footer />
    </>
  );
}

export default Home;
