import { Link } from "react-router-dom";

const ProfilDetailPsikolog = () => {
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
            htmlFor="name"
            className="block font-semibold text-slate-500 text-xl mb-2"
          >
            Nama
          </label>
          <input
            type="text"
            placeholder="John Doe"
            className="w-full p-2 border-2 border-slate-500 rounded-md text-lg placeholder-user opacity-50 font-base"
            readOnly
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
            className="w-full p-2 border-2 border-slate-500 rounded-md text-lg placeholder-user opacity-50 font-medium"
            name="jenis_kelamin"
            required
            value="Laki-laki"
          >
            <option value="" disabled>
              - Pilih Salah Satu -
            </option>
            <option value="Laki-laki">Laki-Laki</option>
            <option value="Perempuan">Perempuan</option>
          </select>
        </div>
        <div className="w-full mb-4">
          <label
            htmlFor="spesialis"
            className="block font-semibold text-slate-500 text-xl mb-2"
          >
            Spesialis
          </label>
          <input
            type="text"
            placeholder="Spesialis Skizofrenia"
            className="w-full p-2 border-2 border-slate-500 rounded-md text-lg placeholder-user opacity-50 font-medium"
            readOnly
          />
        </div>
        <div className="w-full mb-4">
          <label
            htmlFor="umur"
            className="block font-semibold text-slate-500 text-xl mb-2"
          >
            Umur
          </label>
          <input
            type="text"
            placeholder="20 Tahun"
            className="w-full p-2 border-2 border-slate-500 rounded-md text-lg placeholder-user opacity-50 font-medium"
            readOnly
          />
        </div>
        <div className="w-full mb-4">
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
            readOnly
          />
        </div>
        <div className="w-full mb-4">
          <label
            htmlFor="biografi"
            className="block font-semibold text-slate-500 text-xl mb-2"
          >
            Biografi
          </label>
          <input
            type="text"
            placeholder="Masukkan biografi anda"
            className="w-full p-2 border-2 border-slate-500 rounded-md text-lg placeholder-user opacity-50 font-medium"
            readOnly
          />
        </div>
        <div className="w-full mb-4">
          <label
            htmlFor="pengalaman"
            className="block font-semibold text-slate-500 text-xl mb-2"
          >
            Pengalaman
          </label>
          <input
            type="text"
            placeholder="Masukkan pengalaman anda"
            className="w-full p-2 border-2 border-slate-500 rounded-md text-lg placeholder-user opacity-50 font-medium"
            readOnly
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

export default ProfilDetailPsikolog;
