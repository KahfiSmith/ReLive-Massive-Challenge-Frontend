import { useEffect } from "react";
import ArtikelLayouts from "../components/Layouts/ArtikelLayouts"
import Footer from "../components/Layouts/Footer"
import Navbar from "../components/Layouts/Navbar";

const Artikel = () => {
  useEffect(() => {
    document.title = "Artikel";
  }, []);
  return (
    <div>
      <Navbar/>
      <ArtikelLayouts/>
      <Footer/>
    </div>
  )
}

export default Artikel
