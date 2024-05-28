import { Link } from "react-router-dom";

const CardUserProfil = () => {
  return (
    <>
      <div className="w-1/2">
        <div className="w-full mb-4">
          <label
            htmlFor="name"
            className="block font-semibold text-slate-500 text-xl mb-2"
          >
            Nama
          </label>
          <input
            type="text"
            placeholder="ambatublow"
            className="w-full p-2 border-2 border-slate-500 rounded-md text-lg placeholder-user opacity-50 font-base italic"
          />
        </div>
        <div className="w-full mb-4">
          <label
            htmlFor="Umur"
            className="block font-semibold text-slate-500 text-xl mb-2"
          >
            Tanggal Lahir
          </label>
          <input
            type="text"
            placeholder="22 Februari 2002"
            className="w-full p-2 border-2 border-slate-500 rounded-md text-lg placeholder-user opacity-50 font-medium"
          />
        </div>
        <div className="w-full mb-4">
          <label
            htmlFor="Tanggal Lahir"
            className="block font-semibold text-slate-500 text-xl mb-2"
          >
            Umur
          </label>
          <input
            type="text"
            placeholder="20 Tahun"
            className="w-full p-2 border-2 border-slate-500 rounded-md text-lg placeholder-user opacity-50 font-medium"
          />
        </div>
        <div className="w-full">
          <label
            htmlFor="Nomor Telepon"
            className="block font-semibold text-slate-500 text-xl mb-2"
          >
            Nomor Telepon
          </label>
          <input
            type="tel"
            placeholder="081234567899"
            className="w-full p-2 border-2 border-slate-500 rounded-md text-lg placeholder-user opacity-50 font-medium"
          />
        </div>
        <div className="flex justify-end items-center mt-6">
          <Link to={"/profil-user-edit"}>
            <button className="bg-teal-500 hover:bg-teal-600 text-white text-xl font-semibold py-2 px-4 rounded w-40 h-11">
              Simpan
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default CardUserProfil;
