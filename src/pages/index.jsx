import Beranda from "../components/Layouts/Beranda"
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
        </div>
        </>
        
    )
}

export default Index