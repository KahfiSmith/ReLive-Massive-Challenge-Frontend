const DetailPilihPsikolog = ({open}) => {
  return (
    <div
      className="flex-grow"
      style={{
        marginLeft: open ? "240px" : "80px",
        transition: "margin-left 500ms ease-in-out",
      }}
    >
      <div className="flex flex-col">
        <div className="grid grid-cols-2 gap-6 py-12 px-12 items-center">
          <div className="flex justify-center">
            <img
              src="/images/psikolog-man.png"
              alt=""
              className="rounded-full w-50"
            />
          </div>
          <div className="flex flex-col">
            <h1 className="text-slate-600 font-bold text-6xl mb-4">
              Profil Psikolog
            </h1>
            <h2 className="text-slate-600 font-semibold text-3xl mb-4">
              Mas Amba
            </h2>
            <p className="text-slate-600 font-medium text-lg leading-[2rem]">
              Daffa Lee Hao adalah psikolog kelahiran 24 Mei 2001 di Batam. Ia
              merupakan lulusan Psikologi Universitas Indonesia periode 2015 -
              2019. Kini ia merupakan pekerja tetap di Rumah Sakit Jiwa Jakarta
              sejak 2018 hingga sekarang. Ia memiliki pengalaman menangani
              pasien selama 8 tahun.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-6 px-12 items-center mb-6">
          <div className="p-5">
            <ul className="list-disc pl-5 leading-6 text-xl">
              <li className="font-semibold mb-3">
                Psikolog Terpercaya
              </li>
              <li className="font-semibold mb-3">
                Ramah dan dapat diandalkan
              </li>
              <li className="font-semibold mb-3">
                Berpengalaman dengan pasien yang memiliki mental issues
              </li>
              <li className="font-semibold mb-3">
                Teman terbaik anda
              </li>
            </ul>
          </div>
          <div className="px-5 py-8 bg-teal-500 rounded-md text-white flex items-center text-lg">
            <p>Anda bukanlah penyakit Anda. Anda memiliki cerita pribadi untuk diceritakan. Anda memiliki nama, sejarah, kepribadian. Tetap menjadi diri sendiri adalah bagian dari perjuangan.</p>
          </div>
        </div>
        <div className="px-12 mb-20">
            <span className="bg-teal-500 rounded-bl-full rounded-tr-full py-3 px-12 font-medium text-white text-lg">
                kembali
            </span>
        </div>
      </div>
    </div>
  );
};

export default DetailPilihPsikolog;
