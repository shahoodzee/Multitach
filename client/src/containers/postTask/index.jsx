// PostTask.js
import React, { useState } from "react";
import ChatBot from "../../components/chatBot";
import RecommendWorker from "../../components/chatBot/recommendWorker";

const PostTask = () => {
  const [messages, setMessages] = useState([]);

  const addMessage = (text, isBot) => {
    setMessages((prevMessages) => [...prevMessages, { text, isBot }]);
  };

  const addUserMessage = async (userMessage) => {
    addMessage(userMessage, false);

    // Simulate backend response after a short delay
    await new Promise((resolve) => setTimeout(resolve, 500));

    const botResponse = generateBotResponse(userMessage);
    addMessage(botResponse, true);
  };

  // Function to generate a simulated bot response
  const generateBotResponse = (userMessage) => {
    // Implement your own logic here
    if (userMessage.toLowerCase().includes("hello")) {
      return "Hi there! How can I assist you?";
    } else if (userMessage.toLowerCase().includes("task")) {
      return "Sure, I can help you with that. Please provide more details about the task.";
    } else {
      return "I'm sorry, I didn't understand that. Can you please rephrase?";
    }
  };

  return (
    <div className="flex">
      <div className="w-1/4 mt-6 mr-4 px-2 items-center text-center">
        <h1 className="text-2xl px-2 font-bold mb-4">Recommended Workers</h1>
        <RecommendWorker />
      </div>
      <div className="flex-grow flex flex-col items-center ml-4 text-slate-200">
        <h1 className="p-4 text-4xl font-bold">Post Task</h1>
        <div className="w-full overflow-hidden">
          <ChatBot messages={messages} onSendMessage={addUserMessage} />
        </div>
      </div>
    </div>
  );
};

export default PostTask;
