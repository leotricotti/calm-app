import { useEffect, useState } from "react";
import payersFeatureListData from "../assets/data/payersFeatureListData";
import NavHeader from "../components/NavHeader";
import BannerSection from "../components/Payers/BannerSection";
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
      <BannerSection />
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
