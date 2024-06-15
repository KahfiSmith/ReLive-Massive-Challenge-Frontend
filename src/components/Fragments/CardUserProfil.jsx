import React from "react";
import { jwtDecode } from "jwt-decode"; 
import moment from "moment";

const CardUserProfil = () => {
  const [namaLengkap, setNamaLengkap] = React.useState("");
  const [tanggalLahir, setTanggalLahir] = React.useState("");
  const [nomorTelepon, setNomorTelepon] = React.useState("");
  const [umur, setUmur] = React.useState("");

  React.useEffect(() => {
    const token = sessionStorage.getItem("jwtToken");
    if (token) {
      try {
        const decodedToken = jwtDecode(token);
        setNamaLengkap(decodedToken.nama_lengkap || "");
        setUmur(decodedToken.umur || "");
        setNomorTelepon(decodedToken.nomer_telepon || "");

        if (decodedToken.tanggal_lahir) {
          const formattedDate = moment(decodedToken.tanggal_lahir).format("YYYY-MM-DD");
          setTanggalLahir(formattedDate);
        } else {
          setTanggalLahir("");
        }
      } catch (error) {
        console.error("Gagal", error);
      }
    }
  }, []);

  return (
    <>
      <div className="grid grid-cols-2 px-44 gap-12 mb-2">
        <div className="w-full mb-4">
          <label htmlFor="nama_lengkap" className="block font-semibold text-slate-500 text-xl mb-2">
            Nama Lengkap
          </label>
          <input
            type="text"
            value={namaLengkap}
            onChange={(e) => setNamaLengkap(e.target.value)}
            className="w-full p-2 border-2 border-slate-500 rounded-md text-lg font-base"
            readOnly
          />
        </div>
        <div className="w-full mb-4">
          <label htmlFor="tanggal_lahir" className="block font-semibold text-slate-500 text-xl mb-2">
            Tanggal Lahir
          </label>
          <input
            type="date"
            value={tanggalLahir}
            className="w-full p-2 border-2 border-slate-500 rounded-md text-lg font-medium"
            onChange={(e) => setTanggalLahir(e.target.value)}
            readOnly
          />
        </div>
        <div className="w-full mb-4">
          <label htmlFor="umur" className="block font-semibold text-slate-500 text-xl mb-2">
            Umur
          </label>
          <input
            type="text"
            value={`${umur} Tahun`}
            className="w-full p-2 border-2 border-slate-500 rounded-md text-lg font-medium"
            readOnly 
          />
        </div>
        <div className="w-full">
          <label htmlFor="nomor_telepon" className="block font-semibold text-slate-500 text-xl mb-2">
            Nomor Telepon
          </label>
          <input
            type="tel"
            value={nomorTelepon}
            onChange={(e) => setNomorTelepon(e.target.value)}
            className="w-full p-2 border-2 border-slate-500 rounded-md text-lg font-medium"
            readOnly
          />
        </div>
      </div>
    </>
  );
};

export default CardUserProfil;