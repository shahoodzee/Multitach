import React, { useState, useRef, useEffect } from "react";
import "./index.css";

const ChatBot = ({ messages, onSendMessage }) => {
  const [newMessage, setNewMessage] = useState("");
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleInputChange = (e) => {
    setNewMessage(e.target.value);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      onSendMessage(newMessage);
      setNewMessage("");
    }
  };

  return (
    <div className="px-4 chat-bot flex flex-col items-stretch text-white absolute bottom-0 right-0 left-96">
      <div className="px-4 chat-messages flex-grow max-h-96 overflow-y-auto flex flex-col mx-4 py-4">
        {messages.map((message, index) => (
          <div
            key={index}
            className={`px-4 message ${
              message.isBot
                ? "bg-blue-500 text-white rounded-xl mb-2 ml-auto"
                : "bg-white text-black rounded-xl mb-2 mr-auto"
            }`}
          >
            {message.text}
          </div>
        ))}
        <div ref={messagesEndRef}></div>
      </div>
      <div className="chat-input py-2 px-4">
        <input
          placeholder="Type your message..."
          value={newMessage}
          onChange={handleInputChange}
          onKeyPress={handleKeyPress}
          className="px-4 w-full bg-gray-700 text-white border-none rounded-xl h-14 resize-none focus:outline-none"
        />
      </div>
    </div>
  );
};

export default ChatBot;