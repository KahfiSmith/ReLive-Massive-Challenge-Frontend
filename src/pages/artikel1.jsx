import { useEffect } from "react";
import ArtikelLayouts from "../components/Layouts/ArtikelLayouts";
import Footer from "../components/Fragments/Footer";
import Navbar from "../components/Layouts/Navbar";

const Artikel1 = () => {
  useEffect(() => {
    document.title = "Artikel";
  }, []);
  return (
    <div>
      <Navbar />
      <ArtikelLayouts />
      <Footer />
    </div>
  );
};

export default Artikel1;
