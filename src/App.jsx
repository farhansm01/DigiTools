import Banner from "./components/Banner";
import Navbar from "./components/Navbar";
import Pricing from "./components/Pricing";
import ProductsSection from "./components/ProductsSection";
import Stats from "./components/Stats";
import Steps from "./components/Steps";

function App() {
  return (
    <>
      <Navbar />
      <Banner />
      <Stats />
      <ProductsSection />
      <Steps />
      <Pricing />
    </>
  );
}

export default App;
