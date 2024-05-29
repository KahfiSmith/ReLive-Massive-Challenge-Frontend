import { useEffect, useState } from "react";
import Sidebar from "../components/Layouts/Sidebar";
import DetailRiwayat from "../components/DashboardUser/DetailRiwayat";

const RiwayatDetailUserPage = () => {
    const [open, setOpen] = useState(true);
    useEffect(() => {
        document.title = "Detail Riwayat";
    }, []);
    return (
        <div className="min-h-screen text-slate-600">
            <div className="flex bg-light">
                <Sidebar open={open} setOpen={setOpen}/>
                <DetailRiwayat open={open} />
            </div>
        </div>
);
}

export default RiwayatDetailUserPage;