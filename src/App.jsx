import { Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Calculator from "./components/Calculator";
import Advantages from "./components/Advantages";
import About from "./components/About";
import Reviews from "./components/Reviews";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Shop from "./components/Shop";
import ProductPage from "./pages/ProductPage";

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