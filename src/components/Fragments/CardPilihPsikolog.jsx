import { Link } from "react-router-dom";

const CardPilihPsikolog = () => {
  return (
    <>
      <div className="flex justify-start items-center gap-4 border-2 border-teal-500 p-5 rounded-lg mb-8">
        <img
          src="https://via.placeholder.com/60"
          alt=""
          className="rounded-full w-40"
        />
        <div className="w-full">
          <h2 className="text-2xl font-semibold text-slate-600 mt-4">
            Max Verstappen
          </h2>
          <p className="text-base font-medium text-gray-600 mb-10">
            Psikolog Klinis
          </p>
          <div className="flex justify-between gap-4 w-full items-center">
            <div className="flex justify-start gap-4">
              <Link
                to="/chat"
                className="text-white py-1 px-4 bg-teal-500 rounded-md"
              >
                Chat
              </Link>
              <Link
                to="/detail-pilih-psikolog-user"
                className="text-white py-1 px-4 bg-teal-500 rounded-md w-full"
              >
                Lihat Profil
              </Link>
            </div>
            <div className="flex justify-start gap-2 items-center">
              <div className="online"></div>
              <span className="text-slate-500 font-medium">Online</span>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-teal-500 p-8 max-w-4xl mx-auto rounded-lg shadow-md text-white mb-8">
        <h2 className="text-2xl font-semibold mb-4">Profil Singkat</h2>
        <div className="flex">
          <div className="border-l-4 border-white h-auto self-stretch mr-8"></div>
          <div className="flex flex-col justify-between">
            <div>
              <p className="mb-1">
                <strong>Max Verstappen</strong>
              </p>
              <p className="mb-1">Lahir di Bandung, 22 Juli 2002</p>
              <p className="mb-1">Lulusan Psikologi Unpad Periode 2018</p>
              <p className="mb-1">
                Pekerja tetap di Rumah Sakit Pelita Jaya sejak 2020
              </p>
              <p>Mempunyai pengalaman merawat pasien selama 5 tahun.</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CardPilihPsikolog;
