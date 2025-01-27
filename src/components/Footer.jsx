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
    <div className="bg-white px-4 py-3 shadow-md ">
      <form
        action="#"
        onSubmit={handleFormSubmit}
        className="flex items-center gap-3"
      >
        <input
          ref={inputRef}
          type="text"
          placeholder="Message..."
          required
          className="flex-grow bg-blue-100 border-2 border-blue-300 rounded-md px-4 py-2 outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          type="submit"
          className="rounded-full flex items-center justify-center h-10 w-10 bg-blue-400 text-white hover:bg-blue-300 transition-colors ease-in-out"
        >
          <span className="material-symbols-rounded">keyboard_arrow_up</span>
        </button>
      </form>
    </div>
  );
};

export default Footer;
