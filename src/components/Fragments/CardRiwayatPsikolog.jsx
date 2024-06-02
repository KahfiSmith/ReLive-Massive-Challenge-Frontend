import { Link } from "react-router-dom";

const CardRiwayatPsikolog = () => {
  return (
    <div className="max-w-screen my-4 mx-auto bg-cyan-700 text-white rounded-lg p-5 flex items-center">
      <div className="flex-grow">
        <div className="flex justify-between items-center mb-2">
          <h3 className="text-base md:text-lg lg:text-xl font-bold">
            Terdeteksi Skizofrenia
          </h3>
          <span className="text-xs md:text-sm lg:text-base">
            22 Juli 2024
          </span>
        </div>
        <p className="text-xs md:text-sm lg:text-base mb-2">
          Yosianuddin
        </p>
        <div className="flex justify-between items-center">
          <Link to={"/detail-riwayat-psikolog"}>
            <button
              className="h-8 text-xs md:text-sm lg:text-base px-3 md:px-6 font-semibold rounded-md bg-teal-600 hover:bg-teal-700 text-white"
              type="submit"
            >
              Berat
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CardRiwayatPsikolog;
