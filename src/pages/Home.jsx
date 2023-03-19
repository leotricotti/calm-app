import textData from "../assets/data/textData";
import NavHeader from "../components/NavHeader";
import HeroSection from "../components/HeroSection";

function Home() {
  const dataText = textData.map((item) => ({
    ...item,
  }));

  return (
    <>
      <NavHeader />
      <HeroSection id={dataText.id} title={dataText.heroTitle} />
    </>
  );
}

export default Home;
