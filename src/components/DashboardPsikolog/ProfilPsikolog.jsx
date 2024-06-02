import { Link } from "react-router-dom"
import CardPsikologProfil from "../Fragments/CardPsikologProfil"

const ProfilPsikolog = ({open}) => {
  return (
    <div className="flex-grow"
    style={{
      marginLeft: open ? "240px" : "80px",
      transition: "margin-left 500ms ease-in-out",
    }}>
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
          <p className="text-base font-medium text-gray-600">Laki-Laki</p>
        </div>
      </div>
      <CardPsikologProfil />
      <div className="flex justify-end px-44 items-center mb-4">
        <Link to={"/detail-profil-psikolog"}>
          <button className="bg-teal-500 hover:bg-teal-600 text-white text-xl font-semibold py-2 px-4 rounded w-40 h-11">
            Edit
          </button>
        </Link>
      </div>
    </div>
  )
}

export default ProfilPsikolog
