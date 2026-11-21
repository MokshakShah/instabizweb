import { Route, Routes } from "react-router-dom";
import { Outlet } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import WhatsAppButton from "./components/layout/WhatsAppButton";
import ScrollToTop from "./components/common/ScrollToTop";
import CursorTrail from "./components/common/CursorTrail";
import Curtain from "./components/layout/Curtain";
import { useScrollPulse } from "./hooks/useScrollPulse";

import Contact from "./pages/Contact";
import FAQ from "./pages/FAQ";
import GoneHome from "./pages/GoneHome";
import HappyFamilies from "./pages/HappyFamilies";
import Home from "./pages/Home";
import HowItWorks from "./pages/HowItWorks";
import NotFound from "./pages/NotFound";
import Puppies from "./pages/Puppies";
import PuppyDetails from "./pages/PuppyDetails";

function SiteLayout() {
  useScrollPulse();
  return (
    <>
      <CursorTrail />
      <Curtain />
      <ScrollToTop />
      <Navbar />
      <main id="main">
        <Outlet />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}

export default function App() {
  return (
    <Routes>
      <Route element={<SiteLayout />}>
        <Route index element={<Home />} />
        <Route path="puppies" element={<Puppies />} />
        <Route path="puppies/:slug" element={<PuppyDetails />} />
        <Route path="gone-home" element={<GoneHome />} />
        <Route path="happy-families" element={<HappyFamilies />} />
        <Route path="how-it-works" element={<HowItWorks />} />
        <Route path="faq" element={<FAQ />} />
        <Route path="contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}
