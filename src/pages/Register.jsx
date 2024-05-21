import { useEffect } from "react";
import Logo from "../components/Layouts/Logo";
import Button from "../components/Layouts/Button";
import { Link, useNavigate } from "react-router-dom";
const Register = () => {
    const navigate = useNavigate();

    const handleLogin = (event) => {
        event.preventDefault(); // Prevent the default form submission
        navigate("/login"); // Redirect to the dashboard
      };

    useEffect(() => {
        document.title = "Register";
    }, []);
    return (
        <div className="min-h-screen flex bg-gray-100">
            <Logo />
            <div className="content-center w-full bg-cyan-600 sm:w-full p-10">
                <h2 className="text-3xl text-white font-semibold pt-10 mb-2 px-20">
                    Registrasi!
                </h2>
                <p className="text-white text-lg mb-10 px-20">
                    Masukkan data diri anda dibawah ini untuk memulai
                </p>
                <form onSubmit={handleLogin}>
                    <div className="mb-4 px-20">
                        <label
                            className="block text-white text-lg font-semibold mb-2"
                            htmlFor="email"
                        >
                            Nama Pengguna
                        </label>
                        <input
                            className="shadow appearance-none border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline text-sm"
                            id="email"
                            type="email"
                            placeholder="Masukkan Nama Pengguna"
                        />
                    </div>
                    <div className="mb-4 px-20">
                        <label
                            className="block text-white text-lg font-semibold mb-2"
                            htmlFor="email"
                        >
                            Email
                        </label>
                        <input
                            className="shadow appearance-none border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline text-sm"
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
                            className="shadow appearance-none border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline text-sm"
                            id="password"
                            type="password"
                            placeholder="Masukkan Kata Sandi"
                        />
                    </div>
                    <div to
                        className="px-20"
                    >
                        <Button variant="bg-teal-500">Daftar</Button>
                    </div>
                    <p className="text-white text-sm mt-10 text-center">
                        Sudah punya akun?
                        <span>
                            {" "}
                            <Link to={"/login"} className="text-white font-semibold">
                                Masuk
                            </Link>
                        </span>
                    </p>
                </form>
            </div>
        </div>
    );
};

export default Register;
