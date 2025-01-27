const ChatMessage = ({ chat }) => {
    const isUser = chat.role === "user";
  
    return (
      !chat.hideInChat && (
      <div
        className={`flex ${
          isUser ? "justify-end" : "justify-start"
        } items-center ${chat.isError?"error":""}`}
      >
        <div
          className={`p-5 rounded-lg max-w-[70%] ${
            isUser ? "bg-[#1E3A8A] text-white" : "bg-[#2563EB] text-[#000000]"
          }`}
        >
          {chat.text}
        </div>
      </div>
    )
  )
  };
  
  export default ChatMessage;
  