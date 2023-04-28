import { useEffect } from "react";
import backgroundVideo from "../assets/images/hero/background-video.webm";
import HeroBackgroundVideo from "../components/Overview/HeroBackgroundVideo";
import featureSectionData from "../assets/data/feactureSectionData";
import additionalFeatureData from "../assets/data/additionalFeatureData";
import featureListData from "../assets/data/featureListData";
import NavHeader from "../components/NavHeader";
import HeroSection from "../components/HeroSection";
import MainVideo from "../components/Overview/MainVideo";
import FeatureSection from "../components/Overview/FeatureSection";
import AdditionalFeature from "../components/Overview/AdditionalFeature";
import BannerPurple from "../components/BannerPurple";
import FeaturesList from "../components/Overview/FeaturesList";
import Footer from "../components/Footer";

function Overview() {
  useEffect(() => {
    document.title = "Calm Health - Digital Mental Health App & Programs";
  }, []);

  return (
    <>
      <NavHeader />
      <HeroBackgroundVideo videoSrc={backgroundVideo} />
      <HeroSection
        style={{ position: "absolute", top: "6rem" }}
        title="Connecting the dots for care of the mind and body"
        subtitle="Designed to support payers, plan sponsors, and providers, Calm Health offers evidence-based mental health programs and tools focused on anxiety and depression."
      />
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

export default Overview;
