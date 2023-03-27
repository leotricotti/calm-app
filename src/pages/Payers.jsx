import payersFeatureListData from "../assets/data/payersFeatureListData";
import NavHeader from "../components/NavHeader";
import BannerSection from "../components/Payers/BannerSection";
import ImagerySection from "../components/Payers/ImagerySection";
import PayersFeatureList from "../components/Payers/PayersFeatureList";
import BannerPurple from "../components/BannerPurple";
import Footer from "../components/Footer";

function Payers() {
  return (
    <div>
      <NavHeader />
      <BannerSection />
      <ImagerySection />
      <PayersFeatureList data={payersFeatureListData} />
      <BannerPurple
        title={"Want to learn more?"}
        text={"Request Information"}
      />
      <Footer />
    </div>
  );
}

export default Payers;
