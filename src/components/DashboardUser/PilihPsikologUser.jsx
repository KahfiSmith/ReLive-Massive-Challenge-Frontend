import CardPilihPsikiater from "../Fragments/CardPilihPsikolog";

const PilihPsikologUser = () => {
  return (
    <div
      className="flex-grow"
      style={{
        marginLeft: open ? "240px" : "80px",
        transition: "margin-left 500ms ease-in-out",
      }}
    >
      <div className="grid grid-cols-2 px-12 py-12 justify-between gap-12">
        <CardPilihPsikiater/>
        <CardPilihPsikiater/>
        <CardPilihPsikiater/>
        <CardPilihPsikiater/>
        <CardPilihPsikiater/>
      </div>
    </div>
  );
};

export default PilihPsikologUser;
