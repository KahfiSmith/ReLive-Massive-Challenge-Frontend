import { useEffect, useState } from "react";
import NavbarDashboard from "../components/Fragments/NavbarDashboard";
import Sidebar from "../components/Layouts/Sidebar";
import ProfilDashboard from "../components/Layouts/ProfilUser";
const DashboardUser = () => {
    const [open, setOpen] = useState(true);
    useEffect(() => {
        document.title = "Profil";
      }, []);
      return (
        <div className="min-h-screen text-slate-600">
          <NavbarDashboard />
          <div className="flex bg-light pt-20">
            <Sidebar open={open} setOpen={setOpen}/>
            <ProfilDashboard open={open}/>
          </div>
        </div>
      );
}

export default DashboardUser
