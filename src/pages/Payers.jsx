import { useEffect, useState } from "react";
import payersFeatureListData from "../assets/data/payersFeatureListData";
import NavHeader from "../components/NavHeader";
import HeroSection from "../components/HeroSection";
import ImagerySection from "../components/Payers/ImagerySection";
import PayersFeatureList from "../components/Payers/PayersFeatureList";
import BannerPurple from "../components/BannerPurple";
import Footer from "../components/Footer";

function Payers() {
  const [initialState, setInitialState] = useState(null);
  const [elementHeight, setElementHeight] = useState(initialState);

  useEffect(() => {
    document.title = "Calm Health for Plan Member & Employee Mental Health";
  }, []);

  return (
    <>
      <NavHeader />
      <HeroSection
        style={{ backgroundColor: "var(  --clr-payersHeroBackground)" }}
        title={"Support the mental health of your members with Calm Health"}
        subtitle={
          "Calm Health offers evidence-based, condition-focused mental health programs that can easily integrate into existing care management or behavioral health solutions."
        }
      />
      <ImagerySection
        setElementHeight={setElementHeight}
        setInitialState={setInitialState}
      />
      <PayersFeatureList
        data={payersFeatureListData}
        elementHeight={elementHeight}
      />
      <BannerPurple
        title={"Want to learn more?"}
        text={"Request Information"}
      />
      <Footer />
    </>
  );
}

export default Payers;
