import { AudioLines, FolderLock, HandHeart } from 'lucide-react';
import '../../index.css';

const Layanan = () => {
    return (
        <div id="layanan" className="pt-40 flex justify-center text-slate-700 mb-8">
            <div className="container">
            <div className="flex flex-wrap">
                <div className="w-full self-center px-8 md:px-12 lg:px-20">
                    <h1 className="font-semibold text-2xl mb-20 md:text-3xl lg:text-4xl text-center w-full">
                        Kenapa kamu harus memilih ReLive?
                    </h1>
                    <div className="grid grid-cols-1 gap-6 lg:grid-cols-3 lg:gap-10">
                        <div className="grid-layanan">
                            <div className="flex justify-start gap-4 items-center w-full mb-4">
                                <div className="grid-layanan-icon">
                                    <a href="#" className="text-3xl bg-[#BCF0DA] p-2 rounded-md text-[#0E9F6E]">
                                        <AudioLines data-lucide="audio-lines"/>
                                    </a>
                                </div>
                                <h2 className="font-semibold md:text-xl">
                                    Kesiapan untuk Mendengarkan
                                </h2>
                            </div>
                            <p className="leading-7 lg:text-base md:text-start text-justify">
                                Ini menegaskan bahwa setiap masalah, besar atau kecil, penting
                                dan akan ditanggapi dengan serius. Konsultan di platform ini
                                dilatih untuk mendengarkan secara aktif, memastikan bahwa
                                setiap pengguna merasa didengar dan dipahami.
                            </p>
                        </div>
                        <div className="grid-layanan">
                            <div className="flex justify-start gap-4 items-center w-full mb-4">
                                <div className="grid-layanan-icon">
                                    <a href="#" className="text-3xl bg-[#FCD9BD] p-2 rounded-md text-[#FF5A1F]">
                                        <HandHeart data-lucide="hand-heart"/>
                                    </a>
                                </div>
                                <h2 className="font-semibold md:text-xl">
                                    Dukungan yang Berkelanjutan
                                </h2>
                            </div>
                            <p className="leading-7 lg:text-base md:text-start text-justify">
                                Ini bukan hanya tentang sesi konsultasi tunggal, melainkan
                                tentang membangun hubungan jangka panjang dimana pengguna
                                dapat merasa nyaman untuk kembali dan mendapatkan bantuan
                                kapan pun dan dimana pun mereka membutuhkannya.
                            </p>
                        </div>
                        <div className="grid-layanan">
                            <div className="flex justify-start gap-4 items-center w-full mb-4">
                                <div className="grid-layanan-icon">
                                    <a href="#" className="text-3xl bg-[#C3DDFD] p-2 rounded-md text-[#3F83F8]">
                                        <FolderLock data-lucide="folder-lock"></FolderLock>
                                    </a>
                                </div>
                                <h2 className="font-semibold md:text-xl">
                                    Keramahan dan Keamanan
                                </h2>
                            </div>
                            <p className="leading-7 lg:text-base md:text-start text-justify">
                                Mencerminkan suasana yang ramah dan penuh keamanan yang
                                ditawarkan oleh platform. Pengguna dijamin dapat berbagi
                                informasi pribadi mereka tanpa kekhawatiran tentang privasi,
                                yang sangat penting dalam konteks kesehatan mental dan fisik.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
    );
};

export default Layanan;