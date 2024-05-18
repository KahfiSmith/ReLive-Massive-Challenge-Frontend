import { useEffect } from "react";

const Login = () => {
    useEffect(() => {
        document.title = "Login";
    }, []);
    return (
        <div className="min-h-screen flex bg-gray-100">
            <div className="content-center hidden lg:block w-1/2 ">
                <a href="#">
                    <img src="/images/logo.png" alt="logo relive"/>
                </a>
            </div>
                <div className="content-center w-full bg-cyan-600 lg:w-1/2 p-10">
                    <h2 className="text-3xl text-white font-bold pt-10 mb-2">
                        Selamat Datang!
                    </h2>
                    <p className="text-white text-sm mb-10">
                        Konsultasi Tanpa Batas, Solusi di Ujung Jari Anda
                    </p>
                    <form>
                        <div className="mb-4">
                            <label className="block text-white text-sm font-bold mb-2" htmlFor="email">
                                Email
                            </label>
                            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="email" placeholder="Masukkan Email" />
                        </div>
                        <div className="mb-4">
                            <label className="block text-white text-sm font-bold mb-2" htmlFor="password">
                                Kata Sandi
                            </label>
                                <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="Masukkan Kata Sandi" />
                        </div>
                        <button className="w-full bg-gray-700 hover:bg-gray-900 text-white font-bold mt-10 py-2 px-4 rounded-" type="submit">
                            Masuk
                        </button>
                        <p className="text-white text-sm mt-10 text-center">
                            Belum punya akun?
                            <a href="#" className="text-white font-bold">
                                Daftar
                            </a>
                        </p>
                    </form>
                </div>
            </div>
      );
};

export default Login;