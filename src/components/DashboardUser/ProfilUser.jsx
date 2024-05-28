import { Link } from "react-router-dom";

const ProfilUser = ({ open }) => {
  return (
    <div
      className="flex-grow"
      style={{
        marginLeft: open ? "240px" : "80px",
        transition: "margin-left 500ms ease-in-out",
      }}
    >
      <div className="relative w-full h-96 overflow-hidden">
        <div className="absolute w-full h-1/2 bg-gradient-to-r from-blue-300 via-blue-200 to-blue-100"></div>
        <div className="absolute left-1/2 bottom-[120px] transform -translate-x-1/2 translate-y-2/5 w-40 h-40 bg-white rounded-full border-4 border-white z-10">
          <img
            src="/images/user.jpg"
            alt="Profile Image"
            className="w-full h-full object-cover rounded-full"
          />
        </div>
        <div className="absolute left-1/2 bottom-[50px] transform -translate-x-1/2 text-center">
          <h2 className="text-3xl font-bold text-teal-500 mt-4">John Doe</h2>
          <p className="text-base font-medium text-gray-600">23 tahun</p>
        </div>
      </div>
      <div className="grid grid-cols-2 px-44 gap-12 mb-6">
        <div className="w-full">
          <label
            htmlFor="name"
            className="block font-semibold text-slate-500 text-xl mb-2"
          >
            Nama
          </label>
          <input
            type="text"
            placeholder="ambatublow"
            readOnly
            className="w-full p-2 border-2 border-slate-500 rounded-md text-lg placeholder-user opacity-50 font-medium"
          />
        </div>
        <div className="w-full">
          <label
            htmlFor="Umur"
            className="block font-semibold text-slate-500 text-xl mb-2"
          >
            Tanggal Lahir
          </label>
          <input
            type="text"
            placeholder="22 Februari 2002"
            readOnly
            className="w-full p-2 border-2 border-slate-500 rounded-md text-lg placeholder-user opacity-50 font-medium"
          />
        </div>
        <div className="w-full">
          <label
            htmlFor="Tanggal Lahir"
            className="block font-semibold text-slate-500 text-xl mb-2"
          >
            Umur
          </label>
          <input
            type="text"
            placeholder="20 Tahun"
            readOnly
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
            readOnly
            className="w-full p-2 border-2 border-slate-500 rounded-md text-lg placeholder-user opacity-50 font-medium"
          />
        </div>
      </div>
      <div className="flex justify-end px-44 items-center">
        <Link to={"/profil-user-edit"}>
          <button className="bg-teal-500 hover:bg-teal-600 text-white text-xl font-semibold py-2 px-4 rounded w-40 h-11">
            Edit
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ProfilUser;
