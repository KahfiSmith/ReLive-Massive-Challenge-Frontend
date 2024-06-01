import ChatColumn from "../Layouts/ChatColumn";

const ChatDetailPsikolog = ({ open }) => {
  return (
    <div
      className="flex-grow"
      style={{
        marginLeft: open ? "240px" : "80px",
        transition: "margin-left 500ms ease-in-out",
      }}
    >
        <ChatColumn />

    </div>
  );
};

export default ChatDetailPsikolog;
