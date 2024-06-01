import { useEffect, useState } from "react";
import NavbarDashboard from "../components/Fragments/NavbarDashboard";
import Sidebar2 from "../components/Layouts/Sidebar";
import ChatDetailPsikolog from "../components/DashboardPsikolog/ChatDetailPsikolog";
const ChatDetailPsikologPage = () => {
    const [open, setOpen] = useState(true);
    useEffect(() => {
        document.title = "Chat";
      }, []);
      return (
        <div className="min-h-screen text-slate-600">
          <NavbarDashboard />
          <div className="flex bg-light pt-20">
            <Sidebar2 open={open} setOpen={setOpen}/>
            <ChatDetailPsikolog open={open}/>
          </div>
        </div>
      );
}

export default ChatDetailPsikologPage
