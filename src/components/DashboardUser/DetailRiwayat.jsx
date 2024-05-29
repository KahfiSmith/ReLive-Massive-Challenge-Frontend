import Button from "../Layouts/Button";

const DetailRiwayat = ({ open }) => {
  return (
    <div
      className="flex-grow"
      style={{
        marginLeft: open ? "240px" : "80px",
        transition: "margin-left 500ms ease-in-out",
      }}
    >
      <div className="container mx-auto py-24 px-20">
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
          <div className="bg-gray-200 p-4 rounded-lg">
            <h2 className="text-xl font-semibold mb-2">Nama Pasien</h2>
            <p className="text-gray-500">Yosianuddin</p>
          </div>
          <div className="bg-gray-200 p-4 rounded-lg">
            <h2 className="text-xl font-semibold mb-2">Nama Psikolog</h2>
            <p className="text-gray-500">Mr. Daffa</p>
          </div>
          <div className="bg-gray-200 p-4 rounded-lg">
            <h2 className="text-xl font-semibold mb-2">Tanggal</h2>
            <p className="text-gray-500">22/07/2024</p>
          </div>
          <div className="bg-gray-200 p-4 rounded-lg">
            <h2 className="text-xl font-semibold mb-2">Nomor Konsultasi</h2>
            <p className="text-gray-500">00000000004</p>
          </div>
          <div className="bg-gray-200 p-4 rounded-lg">
            <h2 className="text-xl font-semibold mb-2">Hipotesis</h2>
            <p className="text-gray-500">Terduga Skizofernia</p>
          </div>
          <div className="bg-gray-200 p-4 rounded-lg">
            <h2 className="text-xl font-semibold mb-2">Kategori</h2>
            <p className="text-gray-500">Berat</p>
          </div>
          <div className="bg-gray-200 p-4 rounded-lg col-span-3">
            <h2 className="text-xl font-semibold mb-2">Keterangan</h2>
            <p className="text-gray-500">
              Saudara Yosia masih mengalami halusinasi, gangguan konsentrasi,
              dan mulai tidak bisa membedakan dunia nyata dan imajinasinya
              sendiri.
            </p>
          </div>
          <div className="text-center pt-10 rounded-lg col-span-3 text-gray-500 font-semibold">
            <p>
              Sdr Yosia terduga skizofrenia berat. Gejala sudah di fase gejala
              yang berat, <span className="text-teal-500">membutuhkan</span>{" "}
              obat, <span className="text-teal-500">membutuhkan</span> rujukan
              ke psikiater.
            </p>
          </div>
          <div className="ml-80 col-span-2">
            <Button variant="bg-teal-500">Lanjutkan!</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailRiwayat;
