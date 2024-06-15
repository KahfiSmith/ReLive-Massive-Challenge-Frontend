import React from "react";
import { Link } from "react-router-dom";
import { jwtDecode } from "jwt-decode";
import moment from "moment";

const ProfilDetailUser = () => {
  const [namaLengkap, setNamaLengkap] = React.useState("");
  const [tanggalLahir, setTanggalLahir] = React.useState("");
  const [nomorTelepon, setNomorTelepon] = React.useState("");
  const [jenisKelamin, setJenisKelamin] = React.useState("");

  React.useEffect(() => {
    const token = sessionStorage.getItem("jwtToken");
    if (token) {
      try {
        const decodedToken = jwtDecode(token);
        setNamaLengkap(decodedToken.nama_lengkap || "");
        setNomorTelepon(decodedToken.nomer_telepon || "");
        setJenisKelamin(decodedToken.jenis_kelamin || "");

        if (decodedToken.tanggal_lahir) {
          const formattedDate = moment(decodedToken.tanggal_lahir).format(
            "YYYY-MM-DD"
          );
          setTanggalLahir(formattedDate);
        } else {
          setTanggalLahir("");
        }
      } catch (error) {
        console.error("Gagal mendekode token:", error);
      }
    }
  }, []);

  return (
    <div
      className="flex-grow"
      style={{
        marginLeft: open ? "240px" : "80px",
        transition: "margin-left 500ms ease-in-out",
      }}
    >
      <div className="grid grid-cols-1 px-16 gap-1 pt-12">
        <div className="w-full mb-4">
          <label
            htmlFor="nama_lengkap"
            className="block font-semibold text-slate-500 text-xl mb-2"
          >
            Nama
          </label>
          <input
            type="text"
            value={namaLengkap}
            onChange={(e) => setNamaLengkap(e.target.value)}
            placeholder="John Doe"
            className="w-full p-2 border-2 border-slate-500 rounded-md text-lg"
          />
        </div>
        <div className="w-full mb-4">
          <label
            htmlFor="jenis_kelamin"
            className="block font-semibold text-slate-500 text-xl mb-2"
          >
            Jenis Kelamin
          </label>
          <select
            className="w-full p-2 border-2 border-slate-500 rounded-md text-lg"
            name="jenis_kelamin"
            required
            value={jenisKelamin}
            onChange={(e) => setJenisKelamin(e.target.value)}
          >
            <option value="" disabled>
              - Pilih Salah Satu -
            </option>
            <option value="Laki-laki">Laki-Laki</option>
            <option value="erempuan">Perempuan</option>
          </select>
        </div>
        <div className="w-full mb-4">
          <label
            htmlFor="tanggal_lahir"
            className="block font-semibold text-slate-500 text-xl mb-2"
          >
            Tanggal Lahir
          </label>
          <input
            type="date"
            value={tanggalLahir}
            onChange={(e) => setTanggalLahir(e.target.value)}
            className="w-full p-2 border-2 border-slate-500 rounded-md text-lg"
          />
        </div>
        <div className="w-full mb-4">
          <label
            htmlFor="nomer_telepon"
            className="block font-semibold text-slate-500 text-xl mb-2"
          >
            Nomor Telepon
          </label>
          <input
            type="tel"
            value={nomorTelepon}
            onChange={(e) => setNomorTelepon(e.target.value)}
            placeholder="081234567899"
            className="w-full p-2 border-2 border-slate-500 rounded-md text-lg"
          />
        </div>
      </div>
      <div className="flex justify-end items-center mb-4 px-16 pt-4">
        <Link to={"/"}>
          <button className="bg-teal-500 hover:bg-teal-600 text-white text-xl font-semibold p-4 rounded w-60">
            Simpan
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ProfilDetailUser;
