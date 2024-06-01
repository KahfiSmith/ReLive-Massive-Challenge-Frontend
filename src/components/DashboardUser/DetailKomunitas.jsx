import KomunitasForm from "../Layouts/KomunitasForm";

const DetailKomunitas = ({ open }) => {
  return (
    <div
      className="flex-grow"
      style={{
        marginLeft: open ? "240px" : "80px",
        transition: "margin-left 500ms ease-in-out",
      }}
    >
        <KomunitasForm />
        
    </div>
  );
};

export default DetailKomunitas;
