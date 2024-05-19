import Beranda from "../components/Layouts/Beranda"
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
        </div>
        </>
        
    )
}

export default Index