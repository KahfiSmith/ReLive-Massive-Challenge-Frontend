import { useEffect } from "react";
import Logo from "../components/Layouts/Logo";
import Button from "../components/Layouts/Button";
const Register = () => {
    useEffect(() => {
        document.title = "Register";
    }, []);
    return (
        <div className="min-h-screen flex bg-gray-100">
            <Logo/>
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
                        <Button variant="bg-gray-700">
                            Daftar
                        </Button>
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