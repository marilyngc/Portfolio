import { useState,useRef ,useEffect } from "react";
import "./chatbot.scss";

export const ChatBot = () => {
  const [opend, setOpened] = useState(false);
  const openChatbot = () => {
    setOpened((prevOpened) => !prevOpened);
  };

  const [userMessage, setUserMessage] = useState("");
  const [chatMessages, setChatMessages] = useState([]);
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  const createChatLi = (message, className) => {
    return { message, className }; // Creamos un objeto para representar el mensaje
  };

  const generateResponse = () => {
    const API_URL = `https://generativelanguage.googleapis.com/v1/models/gemini-pro:generateContent?key=${import.meta.env.VITE_API_TOKEN}`;

    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        contents: [
          {
            role: "user",
            parts: [{ text: userMessage }],
          },
        ],
      }),
    };

    fetch(API_URL, requestOptions)
      .then((res) => res.json())
      .then((data) => {
        const chatbotResponse = data.candidates[0].content.parts[0].text;
        const incomingChatLi = createChatLi(chatbotResponse, "incoming");
        // Agregamos el mensaje a la lista de mensajes
        setChatMessages((prevMessages) => [...prevMessages, incomingChatLi]);
      })
      .catch((error) => {
     
        const errorMessage = createChatLi(
          "Oops! Ha ocurrido un error",
          "incoming error"
        );
        setChatMessages((prevMessages) => [...prevMessages, errorMessage]);
      });
  };
  const handleChat = () => {
    const trimmedMessage = userMessage.trim();
    if (!trimmedMessage) return;
    const outgoingChatLi = createChatLi(userMessage, "outgoing");
    // Agregamos el mensaje a la lista de mensajes
    setChatMessages((prevMessages) => [...prevMessages, outgoingChatLi]);
    // Limpiamos el campo de entrada
    setUserMessage("");
//hola >-<
    // Simulamos la respuesta del chatbot
    setIsTyping(true);
    setTimeout(() => {
      setIsTyping(false); // Muestra "escribiendo..." 

      generateResponse();
    }, 600);
  };
// Auto-scroll al final cuando se agrega un nuevo mensaje
useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [chatMessages]);

  return (
    <div className={opend ? "show-chatbot" : ""}>
      <button onClick={openChatbot} className="chatbot-toggler">
        <span className="material-symbols-outlined">mode_comment</span>

        <span className="material-symbols-outlined">close</span>
      </button>
      <div className="chatbot">
        <header>
          <h2 className="font-semibold">Chatbot</h2>
          <span onClick={openChatbot} className="material-symbols-outlined">
            close
          </span>
        </header>
        <ul className="chatbox">
          <li className="chat incoming">
            <span className="material-symbols-outlined">Smart_toy</span>
            <p>
              Hola! ✌️ <br />
              ¿Cómo puedo ayudarte?{" "}
            </p>
          </li>

          {chatMessages.map((chat, index) => (
            <li key={index} className={`chat ${chat.className}`}>
              {chat.className === "outgoing" ? (
                <>
                  <p>{chat.message}</p>
                </>
              ) : <>
               <span className="material-symbols-outlined">Smart_toy</span>
               <p>{chat.message}</p>
              </>}
            </li>
          ))}
          {isTyping && (
            <li className="chat incoming">
              <span className="material-symbols-outlined">Smart_toy</span>
              <p>escribiendo...</p> {/* Muestra el mensaje "escribiendo..." */}
            </li>
          )}
         <div ref={messagesEndRef} /> {/* Referencia para el auto-scroll */}
        </ul>
        <div className="chat-input">
          <textarea
            value={userMessage}
            onChange={(e) => setUserMessage(e.target.value)}
            placeholder="Enter a messaje"
            required
            id=""
          ></textarea>
          <span
            onClick={handleChat}
            id="send-btn"
            className=" material-symbols-outlined"
          >
            {" "}
            send
          </span>
        </div>
      </div>
      
    </div>
  );
};
