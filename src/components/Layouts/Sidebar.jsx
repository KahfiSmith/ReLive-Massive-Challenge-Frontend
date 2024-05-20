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
    <section className="flex gap-6 bg-slate-500">
      <div
  className={`bg-slate-900 min-h-screen text-gray-100 px-4 py-4 ${
    open ? "w-60" : "w-20"
  } duration-500`}
>
  <div
    className={`flex items-center ${
      open ? "justify-between py-3" : "justify-center py-3"
    } duration-500`}
  >
    {open ? (
      <img
        src="/images/logo.png"
        alt="logo"
        className="w-1/2"
      />
    ) : (
      <div className="w-1/2"></div>
    )}
    <Menu
      size={26}
      className="cursor-pointer"
      onClick={() => setOpen(!open)}
    />
  </div>
  <div className="mt-4 flex flex-col gap-4 relative">
    {menus.map((menu, i) => (
      <Link key={i} to={menu.link} className="item-sidebar flex items-center">
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
    </section>
  );
};

export default Sidebar;
