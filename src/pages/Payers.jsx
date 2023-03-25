import payersFeatureListData from "../assets/data/payersFeatureListData";
import NavHeader from "../components/NavHeader";
import BannerSection from "../components/Payers/BannerSection";
import ImagerySection from "../components/Payers/ImagerySection";
import FeatureList from "../components/Payers/FeatureList";
import Footer from "../components/Footer";

function Payers() {
  return (
    <div>
      <NavHeader />
      <BannerSection />
      <ImagerySection />
      <FeatureList data={payersFeatureListData} />
      <Footer />
    </div>
  );
}

export default Payers;
