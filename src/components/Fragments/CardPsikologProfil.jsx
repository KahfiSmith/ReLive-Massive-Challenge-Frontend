const CardPsikologProfil = () => {
    return (
      <>
        <div className="grid grid-cols-2 px-44 gap-12 mb-2">
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
              readOnly
            />
          </div>
        </div>
      </>
    );
  };
  
  export default CardPsikologProfil;
  