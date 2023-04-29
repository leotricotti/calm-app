import NavHeader from "../components/NavHeader";
import HeroSection from "../components/HeroSection";
import Footer from "../components/Footer";

function Press() {
  return (
    <div>
      <NavHeader />
      <HeroSection
        style={{ backgroundColor: "var(--clr-pressHeroBackground)" }}
        title={"News & Media"}
        subtitle={
          "Here’s the latest news and announcements on Calm Health. To get in touch with our PR team, please email press@calm.com"
        }
      />
      <Footer />
    </div>
  );
}

export default Press;
