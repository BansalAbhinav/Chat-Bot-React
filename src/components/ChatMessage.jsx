const ChatMessage = ({ chat }) => {
  const isUser = chat.role === "user";

  return (
    !chat.hideInChat && (
      <div
        className={`flex ${
          isUser ? "justify-end" : "justify-start"
        } items-center mx-2 ${chat.isError ? "error" : ""}`}
      >
        <div
          className={`p-3 md:p-4 rounded-lg max-w-[85%] md:max-w-[70%] text-sm md:text-base ${
            isUser 
              ? "bg-[#1E3A8A] text-white" 
              : "bg-[#2563EB] text-[#000000]"
          } ${
            chat.isError ? "bg-red-100 text-red-800 border border-red-200" : ""
          } break-words overflow-hidden`}
        >
          {!chat.isError && chat.text}
          {chat.isError && (
            <div className="flex items-center gap-2">
              <span className="material-icons text-sm">error</span>
              {chat.text}
            </div>
          )}
        </div>
      </div>
    )
  );
};

export default ChatMessage;