import { useEffect } from "react";
import Logo from "../components/Layouts/Logo";
import Button from "../components/Layouts/Button";

const Login = () => {
  useEffect(() => {
    document.title = "Login";
  }, []);
  return (
    <div className="min-h-screen flex bg-gray-100">
      <Logo />
      <div className="content-center w-full bg-cyan-600 sm:w-full p-10">
        <h2 className="text-3xl text-white font-bold pt-10 mb-2 px-20">
          Selamat Datang!
        </h2>
        <p className="text-white text-lg mb-10 px-20">
          Konsultasi Tanpa Batas, Solusi di Ujung Jari Anda
        </p>
        <form>
          <div className="mb-4 px-20">
            <label
              className="block text-white text-lg font-semibold mb-2"
              htmlFor="email"
            >
              Email
            </label>
            <input
              className="shadow appearance-none border rounded-md w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="email"
              placeholder="Masukkan Email"
            />
          </div>
          <div className="mb-4 px-20">
            <label
              className="block text-white text-lg font-semibold mb-2"
              htmlFor="password"
            >
              Kata Sandi
            </label>
            <input
              className="shadow appearance-none border rounded-md w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              type="password"
              placeholder="Masukkan Kata Sandi"
            />
          </div>
          <div className="px-20">
            <Button variant="bg-gray-700">Masuk</Button>
          </div>
          <p className="text-white text-sm mt-10 text-center">
            Belum punya akun?
            <a href="#" className="text-white font-semibold">
              <span>
                {" "}
                <a href="#" className="text-white font-semibold">
                  Daftar
                </a>
              </span>
            </a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
