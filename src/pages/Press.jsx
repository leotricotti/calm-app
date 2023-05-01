import { useEffect } from "react";
import pressCardData from "../assets/data/pressCardData";
import NavHeader from "../components/NavHeader";
import HeroSection from "../components/HeroSection";
import PressCard from "../components/Press/PressCard";
import PressCardSlider from "../components/Press/PressCardSlider";
import BannerPurple from "../components/BannerPurple";
import Footer from "../components/Footer";

function Press() {
  useEffect(() => {
    document.title = "Press";
  }, []);

  return (
    <>
      <NavHeader />
      <HeroSection
        style={{
          backgroundColor: "var(--clr-pressHeroBackground)",
          height: "auto",
        }}
        title={"News & Media"}
        subtitle={
          "Here’s the latest news and announcements on Calm Health. To get in touch with our PR team, please email press@calm.com"
        }
      />
      <PressCard data={pressCardData} />
      <PressCardSlider />
      <BannerPurple
        title={"Download images and logos from our Press Kit"}
        text={"Download Press Kit"}
        link={
          "https://storage.googleapis.com/evexia-production-static-assets/calmhealth/marketing/Calm_Health_Media_Kit.zip"
        }
      />
      <Footer />
    </>
  );
}

export default Press;
