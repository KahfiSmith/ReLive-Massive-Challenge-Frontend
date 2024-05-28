import { MoveLeft } from "lucide-react";
import CardUserProfil from "../Fragments/CardUserProfil";
import { Link } from "react-router-dom";

const EditProfilUser = () => {
  return (
    <div
      className="flex-grow px-8 py-8"
      style={{
        marginLeft: open ? "240px" : "80px",
        transition: "margin-left 500ms ease-in-out",
      }}
    >
      <div className="flex justify-start gap-6 items-start">
        <Link to="/profil-user">
        <div className="rounded-lg h-10 w-10 text-slate-50 bg-teal-500 flex items-center justify-center">
          <MoveLeft />
        </div>
        </Link>
        <CardUserProfil />
      </div>
    </div>
  );
};

export default EditProfilUser;
