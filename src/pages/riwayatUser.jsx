import { useEffect, useState } from "react";
import NavbarDashboard from "../components/Fragments/NavbarDashboard";
import Sidebar from "../components/Layouts/Sidebar";
import RiwayatDashboard from "../components/DashboardUser/RiwayatUser";
const RiwayatUser = () => {
    const [open, setOpen] = useState(true);
    useEffect(() => {
        document.title = "Chat";
      }, []);
      return (
        <div className="min-h-screen text-slate-600">
          <NavbarDashboard />
          <div className="flex bg-light pt-20">
            <Sidebar open={open} setOpen={setOpen}/>
            <RiwayatDashboard open={open}/>
          </div>
        </div>
      );
}

export default RiwayatUser
