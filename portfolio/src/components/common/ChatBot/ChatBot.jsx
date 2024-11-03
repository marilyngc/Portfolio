import { useState } from "react"


export const ChatBot = () => {
    const [opend,setOpened] = useState(false);
    const openChatbot = () => {
        setOpened(prevOpened => !prevOpened);
    };

    const [userMessage, setUserMessage] = useState('');
    const [chatMessages, setChatMessages] = useState([]);
    const [isTyping, setIsTyping] = useState(false);
    
    const createChatLi = (message, className) => {
        return { message, className }; // Creamos un objeto para representar el mensaje
    };

    const handleChat = () => {
        const trimmedMessage = userMessage.trim();
        if (!trimmedMessage) return;

        // Agregamos el mensaje a la lista de mensajes
        setChatMessages(prevMessages => [
            ...prevMessages,
            createChatLi(trimmedMessage, 'outgoing')
        ]);
        
        // Limpiamos el campo de entrada
        setUserMessage('');

             // Simulamos la respuesta del chatbot
        setIsTyping(true);
        setTimeout(() => {
            setIsTyping(false); // Muestra "escribiendo..." durante 2 segundos
            setChatMessages(prevMessages => [
                ...prevMessages,
                createChatLi('Esta es una respuesta del chatbot', 'incoming') // Aquí puedes cambiar el mensaje
            ]);
        }, 2000);
    };

    return(
       
       <div className={opend?"show-chatbot": ""}>

       
        <button onClick={openChatbot} className="chatbot-toggler">
        <span className="material-symbols-outlined">mode_comment</span>
        
        
        <span className="material-symbols-outlined">close</span>


        </button>
        <div className="chatbot">
            <header>
                <h2>Chatbot (en proceso)</h2>
                <span onClick={openChatbot} className="material-symbols-outlined">close</span>
            </header>
            <ul className="chatbox">
                <li className="chat incoming">
                    <span className="material-symbols-outlined">Smart_toy</span>
                    <p>Hola! ✌️ <br/>¿Cómo puedo ayudarte?  </p> 
                    
                </li>
               
                {chatMessages.map((chat,index) =>(
                    <li key={index} className={`chat ${chat.className}`}>
                        {chat.className === "outgoing" ? (
                            <p>{chat.message}</p>
                        ): (
                            <span className="material-symbols-outlined">Smart_toy</span>

                        )}


                    </li>
                    
                ))}
               {isTyping && (
                    <li className="chat incoming">
                        <span className="material-symbols-outlined">Smart_toy</span>
                        <p>escribiendo...</p> {/* Muestra el mensaje "escribiendo..." */}
                    </li>
                )}

            </ul>
            <div className="chat-input">
                <textarea
                value={userMessage}
                onChange={(e) => setUserMessage(e.target.value)}
                placeholder="Enter a messaje" required id=""></textarea>
                <span onClick={handleChat} id="send-btn" className=" material-symbols-outlined"> send</span>
            </div>
        </div>
        </div>
       
    )
}