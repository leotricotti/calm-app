import payersFeatureListData from "../assets/data/payersFeatureListData";
import NavHeader from "../components/NavHeader";
import PayersBanner from "../components/PayersBanner";
import PayersImagery from "../components/PayersImagery";
import PayersFeatureList from "../components/PayersFeatureList";
import Footer from "../components/Footer";

function Payers() {
  return (
    <div>
      <NavHeader />
      <PayersBanner />
      <PayersImagery />
      <PayersFeatureList data={payersFeatureListData} />
      <Footer />
    </div>
  );
}

export default Payers;
