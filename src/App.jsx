import { useState } from "react";
import Body from "./components/Body";
import Header from "./components/Header";

const App = () => {
  const [chatVisible, setChatVisible] = useState(false);

  const toggleChatVisibility = () => {
    setChatVisible(!chatVisible);
  };

  return (
    <div
      style={{
        backgroundSize: "200% 200%",
        animation: "gradient-flow 6s ease infinite",
      }}
    >
     
      <div className="min-h-screen w-full flex items-center justify-center bg-black">
        <h1
          className="text-6xl md:text-8xl lg:text-[10rem] font-black 
          bg-gradient-to-r from-blue-500 via-purple-600 via-pink-500 to-blue-500 
          bg-[length:400%_400%] bg-clip-text text-transparent 
          animate-gradient-slow
          hover:scale-110 transition-transform duration-500 px-4 text-center"
        >
          CHAT-BOT
        </h1>
      </div>

    
      <button
        onClick={toggleChatVisibility}
        className="fixed right-5 bottom-5 bg-blue-300 rounded-3xl h-10 w-10 md:h-12 md:w-12 flex cursor-pointer items-center justify-center hover:bg-blue-400 transition-colors"
      >
        <span className="material-symbols-outlined md:text-2xl">chat_bubble</span>
      </button>


      <div
        className={`bg-white border-2 border-blue-800 rounded-lg shadow-2xl overflow-hidden fixed right-4 md:right-[35px] bottom-20 md:bottom-[90px] transition-all duration-500 text-[#1E3A8A]
          ${
            chatVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }
          w-full max-w-xs md:max-w-md lg:max-w-lg`}
      >
        <Header />
        <Body />
      </div>
    </div>
  );
};

export default App;