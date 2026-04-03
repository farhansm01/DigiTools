import { useState } from "react";
import Banner from "./components/Banner";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Pricing from "./components/Pricing";
import ProductsSection from "./components/ProductsSection";
import Stats from "./components/Stats";
import Steps from "./components/Steps";
import Transform from "./components/Transform";

function App() {
  const [cartItems, setCartItems] = useState([]);
  return (
    <>
      <Navbar cartItems={cartItems} />
      <Banner />
      <Stats />
      <ProductsSection cartItems={cartItems} setCartItems={setCartItems} />
      <Steps />
      <Pricing />
      <Transform />
      <Footer />
    </>
  );
}

export default App;
