import { useEffect, useState } from "react";
import payersFeatureListData from "../assets/data/payersFeatureListData";
import NavHeader from "../components/NavHeader";
import BannerSection from "../components/Payers/BannerSection";
import ImagerySection from "../components/Payers/ImagerySection";
import PayersFeatureList from "../components/Payers/PayersFeatureList";
import BannerPurple from "../components/BannerPurple";
import Footer from "../components/Footer";

function Payers() {
  const [elementHeight, setElementHeight] = useState(null);

  console.log(elementHeight);

  useEffect(() => {
    document.title = "Calm Health for Plan Member & Employee Mental Health";
  }, []);

  return (
    <div>
      <NavHeader />
      <BannerSection />
      <ImagerySection setElementHeight={setElementHeight} />
      <PayersFeatureList
        data={payersFeatureListData}
        elementHeight={elementHeight}
      />
      <BannerPurple
        title={"Want to learn more?"}
        text={"Request Information"}
      />
      <Footer />
    </div>
  );
}

export default Payers;
