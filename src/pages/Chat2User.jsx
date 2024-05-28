import { useEffect, useState } from "react";
import NavbarDashboard from "../components/Fragments/NavbarDashboard";
import Sidebar from "../components/Layouts/Sidebar";
import Chat2Dashboard from "../components/DashboardUser/Chat2User";
const Chat2User = () => {
    const [open, setOpen] = useState(true);
    useEffect(() => {
        document.title = "Chat";
      }, []);
      return (
        <div className="min-h-screen text-slate-600">
          <NavbarDashboard />
          <div className="flex bg-light pt-20">
            <Sidebar open={open} setOpen={setOpen}/>
            <Chat2Dashboard open={open}/>
          </div>
        </div>
      );
}

export default Chat2User
