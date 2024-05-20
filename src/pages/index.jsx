import Beranda from "../components/Layouts/Beranda"
import Footer from "../components/Layouts/Footer"
import Health from "../components/Layouts/Health"
import Konsultasi from "../components/Layouts/Konsultasi"
import Layanan from "../components/Layouts/Layanan"
import Navbar from "../components/Layouts/Navbar"
import TentangKami from "../components/Layouts/TentangKami"
const Index = () => {
    return (
        <>
        <div className="bg-[#f8fafc]">
        <Navbar/>
        <Beranda/>
        <TentangKami/>
        <Layanan/>
        <Konsultasi/>
        <Health/>
        <Footer/>
        </div>
        </>
        
    )
}

export default Index