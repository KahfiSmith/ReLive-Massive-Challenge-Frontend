import NavbarDashboard from "../components/Fragments/NavbarDashboard";
import ProfilDashboard from "../components/Layouts/ProfilDashboard";
import Sidebar from "../components/Layouts/Sidebar";

const Dashboard = () => {
  return (
    <div className="min-h-screen text-slate-600">
      <NavbarDashboard />
      <div className="flex bg-light">
        <Sidebar />
        <ProfilDashboard />
      </div>
    </div>
  );
};

export default Dashboard;
