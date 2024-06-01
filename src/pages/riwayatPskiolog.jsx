import { useEffect, useState } from "react";
import NavbarDashboard from "../components/Fragments/NavbarDashboard";
import SidebarPsikolog from "../components/Layouts/SidebarPskikolog";
import RiwayatUser from "../components/DashboardUser/RiwayatUser";
import Button from "../components/Layouts/Button";
import RiwayatPsikolog from "../components/DashboardPsikolog/RiwayatPsikolog";

const RiwayatPsikologPage = () => {
    const [open, setOpen] = useState(true);
    useEffect(() => {
        document.title = "Riwayat Konsultasi";
        }, []);
        return (
            <div className="min-h-screen text-slate-600">
                <NavbarDashboard />
                <div className="flex bg-light pt-20">
                    <SidebarPsikolog open={open} setOpen={setOpen}/>
                    <RiwayatPsikolog open={open}/>
                </div>
                <div className="flex-grow px-8 py-5 w-1/4" style={{marginLeft: open ? "240px" : "80px", transition: "margin-left 500ms ease-in-out",}}>
                    <Button variant="bg-teal-500">
                        Buat Konsultasi Baru +
                    </Button>
                </div>
                
            </div>
        );
}

export default RiwayatPsikologPage
