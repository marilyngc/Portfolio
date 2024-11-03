export const ChatBot = () => {
    return(
       
       <div className="show-chatbot">

       
        <button className="chatbot-toggler">
        <span className="material-symbols-outlined">mode_comment</span>
        <span className="material-symbols-outlined">close</span>


        </button>
        <div className="chatbot">
            <header>
                <h2>Chatbot (en proceso)</h2>
                <span className="material-symbols-outlined">close</span>
            </header>
            <ul className="chatbox">
                <li className="chat incoming">
                    <span className="material-symbols-outlined">Smart_toy</span>
                    <p>Hola! ✌️ <br/>¿Cómo puedo ayudarte?  </p> 
                    
                </li>
                <li className="chat outgoing">
                    <p>Lorem ipsum dolor sit amet consectetur.</p>
                </li>

            </ul>
            <div className="chat-input">
                <textarea placeholder="Enter a messaje" required id=""></textarea>
                <span id="send-btn" className=" material-symbols-outlined"> send</span>
            </div>
        </div>
        </div>
       
    )
}