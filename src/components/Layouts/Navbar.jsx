import { useEffect } from "react";
import { setupNavbar } from ".";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  useEffect(() => {
    const cleanup = setupNavbar();

    return cleanup;
  });

  return (
    <div className="bg-transparant absolute top-0 left-0 w-full flex items-center z-10 justify-center lg:border-b lg:border-slate-300 lg:w-full text-slate-600">
      <div className="container">
        <div className="flex items-center justify-between relative">
          <div className="px-8 py-6 font-semibold text-lg md:text-xl lg:text-2xl lg:py-2 w-1/4">
            <a href="#">
              <img src="/images/logo.png" alt="logo relive" className="lg:w-1/2" />
            </a>
          </div>
          <div className="px-8 py-4 flex items-center justify-cente">
            <button
              id="hamburger"
              name="hamburger"
              type="button"
              className="absolute block lg:hidden"
            >
              <Menu
                data-lucide="menu"
                id="icon-menu"
                className="transition ease-in-out duration-300"
              />
              <X
                data-lucide="x"
                id="icon-close"
                className="hidden transition ease-in-out duration-300"
              />
            </button>
            <nav
              id="nav-menu"
              className="hidden absolute p-4 rounded-lg max-w-[200px] w-full right-6 top-full border border-border lg:block lg:static lg:bg-transparent lg:max-w-full lg:rounded-none lg:border-none bg-background lg:py-0 shadow-sm"
            >
              <ul className="font-semibold block lg:flex lg:gap-10 lg:text-lg items-center">
                <li className="group">
                  <a href="#" className="group-hover:text-blue-500 flex py-2">
                    Beranda
                  </a>
                </li>
                <li className="group">
                  <a href="#" className="group-hover:text-blue-500 flex py-2">
                    Tentang Kami
                  </a>
                </li>
                <li className="group">
                  <a href="#" className="group-hover:text-blue-500 flex py-2">
                    Layanan
                  </a>
                </li>
                <li className="group">
                  <a href="#" className="group-hover:text-blue-500 flex py-2">
                    Artikel
                  </a>
                </li>
                <li className="group">
                  <a
                    href="#"
                    className="group-hover:text-icon flex py-2 lg:bg-teal-500 lg:rounded-lg lg:px-8 lg:group-hover:text-white lg:group-hover:bg-teal-400 lg:text-white"
                  >
                    Masuk
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
