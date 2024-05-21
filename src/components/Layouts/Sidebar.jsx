import {
  CircleUser,
  History,
  LogOut,
  Menu,
  MessageSquareText,
  NotepadText,
  UserPlus,
  UserSearch,
} from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
// import NavbarDashboard from "../Fragments/NavbarDashboard";

const Sidebar = () => {
  const [open, setOpen] = useState(true);
  const menus = [
    {
      name: "Profil",
      link: "/profil",
      icon: <CircleUser size={20} />,
    },
    {
      name: "Pilih Psikolog",
      link: "/pilih-psikolog",
      icon: <UserSearch size={20} />,
    },
    { name: "Chat", link: "/chat", icon: <MessageSquareText size={20} /> },
    {
      name: "Hasil Konsultasi",
      link: "/hasil-konsultasi",
      icon: <NotepadText size={20} />,
    },
    { name: "Riwayat", link: "/riwayat", icon: <History size={20} /> },
    {
      name: "Kawan ReLive",
      link: "/kawan-relive",
      icon: <UserPlus size={20} />,
    },
    { name: "Keluar", link: "/login", icon: <LogOut size={20} /> },
  ];

  return (
    <div className="flex bg-light">
      <div
        className={`bg-[#047481] min-h-screen text-gray-100 px-4 py-4 ${
          open ? "w-60" : "w-20"
        } duration-500 flex-shrink-0 overflow-hidden`}>
        <div
          className={`flex justify-end ${
            open ? "py-3" : "justify-center py-3"
          }`}>
          <Menu
            size={26}
            className="cursor-pointer transition-transform duration-300 ease-out"
            onClick={() => setOpen(!open)}
          />
        </div>
        <div className="mt-2 flex flex-col gap-4 relative">
          {menus.map((menu, i) => (
            <Link key={i} to={menu.link} className="item-sidebar">
              <div className="cursor-pointer">{menu.icon}</div>
              <h2
                style={{
                  transitionDelay: `${i + 1}00ms`,
                }}
                className={`whitespace-pre duration-500 ${
                  !open && "opacity-0 translate-x-20 overflow-hidden"
                }`}
              >
                {menu?.name}
              </h2>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
