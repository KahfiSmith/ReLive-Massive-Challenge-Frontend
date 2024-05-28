import { useEffect, useState } from "react";
import NavbarDashboard from "../components/Fragments/NavbarDashboard";
import Sidebar from "../components/Layouts/Sidebar";
import EditProfilUser from "../components/DashboardUser/EditProfilUser";
const ProfilUserEditPage = () => {
  const [open, setOpen] = useState(true);
  useEffect(() => {
    document.title = "Edit Profil";
  }, []);
  return (
    <div className="min-h-screen text-slate-600">
      <NavbarDashboard />
      <div className="flex bg-light pt-20">
        <Sidebar open={open} setOpen={setOpen} />
        <EditProfilUser open={open} />
      </div>
    </div>
  );
};

export default ProfilUserEditPage;
