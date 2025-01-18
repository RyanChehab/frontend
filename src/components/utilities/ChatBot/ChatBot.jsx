import React, { useState } from "react";
import fetchData from "../../../utility/fetch";
import './ChatBot.css';

const Chatbot = () => {
  const [messages, setMessages] = useState([]);
  const [userMessage, setUserMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [isOpen, setIsOpen] = useState(false); 

  const toggleChatbot = () => {
    setIsOpen((prevState) => !prevState);
  };

  const sendMessage = async () => {
    if (!userMessage.trim()) return;

    const newMessages = [...messages, { role: "user", content: userMessage }];
    setMessages(newMessages);
    setUserMessage("");
    setLoading(true);

    try{
        const response = await fetchData(
            "http://localhost:8000/api/chat",
            'POST',
            {message: userMessage}
        )

        const botReply = { role: "assistant", content: response.reply };
        // update state for bot 
        setMessages((prevMessages) => [...prevMessages, botReply]);
    }catch (error) {
        console.error("Error fetching chatbot response:", error);
        setMessages((prevMessages) => [
          ...prevMessages,
          { role: "assistant", content: "Sorry, something went wrong." },
        ]);
      } finally {
        setLoading(false);
      }

  }

  return(<div>
      {/* Toggle Button */}
      <button className="chatbot-toggle" onClick={toggleChatbot}>
        {isOpen ? "✖" : "🤖"}
      </button>

      {/* Chatbot Interface */}
      {isOpen && (
        <div className="chatbot-container">
          <div className="messages">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`message ${msg.role === "user" ? "user" : "bot"}`}
              >
                {msg.content}
              </div>
            ))}
            {loading && <div className="loading">Typing...</div>}
          </div>
          <div className="chat-input">
            <input
              type="text"
              value={userMessage}
              onChange={(e) => setUserMessage(e.target.value)}
              placeholder="Type your message..."
              onKeyDown={(e) => e.key === "Enter" && sendMessage()}
            />
            <button onClick={sendMessage} disabled={loading}>
              Send
            </button>
          </div>
        </div>
      )}
    </div>)

}

export default Chatbot;