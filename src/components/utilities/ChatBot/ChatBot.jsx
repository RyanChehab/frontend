import React, { useState } from "react";
import fetchData from "../../../utility/fetch";

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
  return()

}

export default Chatbot;