import { useEffect } from "react";
import NavHeader from "../components/NavHeader";
import HeroSection from "../components/HeroSection";
import FormSection from "../components/Inquire/FormSection";
import Footer from "../components/Footer";

function Inquire() {
  useEffect(() => {
    document.title = "Inquire";
  }, []);

  return (
    <div>
      <NavHeader />
      <HeroSection
        style={{
          backgroundColor: "var(  --clr-inquireBackground)",
          height: "fit-content",
          paddingBottom: "10rem",
        }}
        title="Want to learn more?"
        subtitle="We serve organizations with 50,000+ members. To learn more about our solutions, fill out the form and our team will get back to you with more information based on your needs."
      />
      <FormSection />
      <Footer />
    </div>
  );
}

export default Inquire;
