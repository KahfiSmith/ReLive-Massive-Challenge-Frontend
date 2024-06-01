import Button from "../Layouts/Button";

const HasilKonsultasi = ({ open }) => {
    return (
        <div className="flex-grow" style={{marginLeft: open ? "240px" : "80px", transition: "margin-left 500ms ease-in-out",}}>
            <div className="bg-white w-full p-10">
                <div className="flex justify-end items-center mb-8">
                    <div className="bg-gray-200 text-slate-700 p-2 rounded-md">Dr. Daffa Fa Lee</div>
                </div>
                <form className="space-y-6">
                    <div>
                        <label className="block text-lg font-medium text-teal-500">Nama Klien</label>
                        <input type="text" className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm"/>
                    </div>
                    <div>
                        <label className="block text-lg font-medium text-teal-500">Tanggal Konsul</label>
                        <input type="text" className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm"/>
                    </div>
                    <div>
                        <label className="block text-lg font-medium text-teal-500">Nomor Konsul</label>
                        <input type="text" className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm"/>
                    </div>
                    <div>
                        <label className="block text-lg font-medium text-teal-500">Hipotesa gangguan</label>
                        <input type="text" className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm"/>
                    </div>
                    <div>
                        <label className="block text-lg font-medium text-teal-500">Kategori</label>
                        <input type="text" className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm"/>
                    </div>
                    <div>
                        <label className="block text-lg font-medium text-teal-500">Keterangan</label>
                        <textarea className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm"></textarea>
                    </div>
                    <div className="space-y-4">
                        <label className="block text-lg font-medium text-gray-700">Simpulan</label>
                        <div className="flex items-center text-teal-500">
                            <input type="checkbox" className="mr-2"/>
                            <p>Membutuhkan Obat</p>
                        </div>
                        <div className="flex items-center text-teal-500">
                            <input type="checkbox" className="mr-2"/>
                            <p>Membutuhkan Rujukan ke Dokter/Psikiater</p>
                        </div>
                    </div>
                    <div className="flex justify-end text-white px-4 py-2 rounded-md w-1/4">
                        <Button type="submit" variant="bg-teal-500 ">
                            Simpan
                        </Button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default HasilKonsultasi;
