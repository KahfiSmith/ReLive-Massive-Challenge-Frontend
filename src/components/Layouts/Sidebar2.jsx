import {
    CircleUser,
    History,
    LogOut,
    Menu,
    MessageSquareText,
    UserPlus,
    UserSearch,
  } from "lucide-react";
  import { Link } from "react-router-dom";
  
  const Sidebar = ({ open, setOpen }) => {
    const menus = [
      {
        name: "Profil Psikolog",
        link: "/profil-user",
        icon: <CircleUser size={20} />,
      },
      {
        name: "Pilih Pasien",
        link: "/pilih-pasien-psikolog",
        icon: <UserSearch size={20} />,
      },
      { name: "Chat", link: "/chat-psikolog", icon: <MessageSquareText size={20} /> },
      { name: "Riwayat", link: "/riwayat-psikolog", icon: <History size={20} /> },
      {
        name: "Kawan ReLive",
        link: "/kawan-relive-psikolog",
        icon: <UserPlus size={20} />,
      },
      { name: "Keluar", link: "/", icon: <LogOut size={20} /> },
    ];
  
    return (
      <div
        className={`bg-[#047481] min-h-screen text-gray-100 px-4 py-4 ${
          open ? "w-60" : "w-20"
        } duration-500 flex-shrink-0 overflow-hidden fixed z-10`}
      >
        <div
          className={`flex justify-end ${open ? "py-3" : "justify-center py-3"}`}
        >
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
    );
  };
  
  export default Sidebar;
  