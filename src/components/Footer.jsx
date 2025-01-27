import { useRef } from "react";

const Footer = ({ chatHistory, setchatHistory, generateActualBotResponse }) => {
  const inputRef = useRef();

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const userMessage = inputRef.current.value.trim();
    if (!userMessage) return;

    // Update chat history with the user message
    setchatHistory((history) => [
      ...history,
      { role: "user", text: userMessage },
    ]);
    // Clear the input field
    inputRef.current.value = "";

    setTimeout(() => {
      setchatHistory((history) => [
        ...history,
        { role: "model", text: "Thinking..." },
      ]);
      //calling the function to genrat response
      generateActualBotResponse([
        ...chatHistory,
        { role: "user",text: `${userMessage}\nIMPORTANT: Answer like a barista - friendly, accurate, and brief. Focus on key details. For pricing, use € symbol. Fetch relevant information from the provided data, and never invent anything.`
      },
      ]);
    }, 600);
  };

  return (
    <div className="bg-white px-3 md:px-4 py-3 shadow-md border-t border-blue-100">
      <form
        onSubmit={handleFormSubmit}
        className="flex items-center gap-2 md:gap-3"
      >
        <input
          ref={inputRef}
          type="text"
          placeholder="Message..."
          required
          className="flex-1 bg-blue-100 border-2 border-blue-300 rounded-lg px-3 md:px-4 py-2 md:py-3 text-sm md:text-base outline-none focus:ring-2 focus:ring-blue-500 ring-offset-1 transition-all"
        />
        <button
          type="submit"
          className="rounded-full flex items-center justify-center h-12 w-12 md:h-10 md:w-10 bg-blue-400 text-white hover:bg-blue-500 transition-colors ease-in-out active:scale-95"
        >
          <span className="material-symbols-rounded text-2xl md:text-xl">
            keyboard_arrow_up
          </span>
        </button>
      </form>
    </div>
  );
};

export default Footer;