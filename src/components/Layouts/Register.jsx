import { useEffect } from "react";

const Register = () => {
    useEffect(() => {
        document.title = "Register";
    }, []);
    return (
        <div className="min-h-screen flex bg-gray-100">
            <div className="content-center hidden md:block sm:w-full">
                <a href="#">
                    <img src="/images/logo.png" alt="logo relive" className="lg:w-3/4 md:w-3/4 m-16"/>
                </a>
            </div>
                <div className="content-center w-full bg-cyan-600 sm:w-full p-10">
                    <h2 className="text-3xl text-white font-bold pt-10 mb-2">
                        Registrasi!
                    </h2>
                    <p className="text-white text-sm mb-10">
                        Masukkan data diri anda dibawah ini untuk memulai
                    </p>
                    <form>
                        <div className="mb-4">
                            <label className="block text-white text-sm font-bold mb-2" htmlFor="email">
                                Nama Pengguna
                            </label>
                            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="email" placeholder="Masukkan Nama Pengguna" />
                        </div>
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
                            Daftar
                        </button>
                        <p className="text-white text-sm mt-10 text-center">
                            Sudah punya akun?
                            <a href="#" className="text-white font-bold">
                                Masuk
                            </a>
                        </p>
                    </form>
                </div>
            </div>
      );
};

export default Register;