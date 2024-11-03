const chatInput = document.querySelector(".chat-input textarea");
const sendChatBtn = document.querySelector(".chat-input span");

let userMessage;
const createChatLi = (message, className) =>{
    const chatLi = document.createElement(  "li");
    chatLi.classList.add("chat",className);
    let chatContent = className === "outgoing" ? `<p>${message}.</p>`: `                    <span className="material-symbols-outlined">Smart_toy</span>
                    <span className="material-symbols-outlined">Smart_toy</span>
`;

}
const handleChat = () => {
    userMessage = chatInput.value.trim();
    if(!userMessage) return;

    createChatLi(userMessage,"outgoing");
}