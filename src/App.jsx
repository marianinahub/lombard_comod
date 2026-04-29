import { Routes, Route } from "react-router-dom";

import Header from "./components/header/Header";
import Hero from "./components/hero/Hero";
import Services from "./components/services/Services";
import Calculator from "./components/calculator/Calculator";
import Advantages from "./components/advantages/Advantages";
import About from "./components/about/About";
import Reviews from "./components/reviews/Reviews";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import Shop from "./components/shop/Shop";
import ProductPage from "./components/pages/ProductPage";

function Home() {
  return (
    <main>
      <Hero />

      <div style={{ height: "40px" }} />
      
       <Calculator />

      <div style={{ height: "40px" }} />

      <Services />

      <div style={{ height: "40px" }} />

      <Shop />

      <div style={{ height: "40px" }} />

      <Advantages />

      <div style={{ height: "40px" }} />

      <About />

      <div style={{ height: "40px" }} />

      <Reviews />

      <div style={{ height: "40px" }} />

      <Contact />
    </main>
  );
}

export default function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:id" element={<ProductPage />} />
      </Routes>

      <Footer />
    </>
  );
}