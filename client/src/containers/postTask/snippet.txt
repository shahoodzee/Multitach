import React, { useEffect, useState } from "react";
import ChatBot from "../../components/chatBot";
import RecommendWorker from "./../../components/chatBot/recommendWorker/index";

const PostTask = () => {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    // Send initial greeting message when the component is loaded
    const initialBotMessage = "Hello! Kindly, give me a title for your task.";
    setMessages([{ text: initialBotMessage, isBot: true }]);
  }, []);

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
    if (messages.length === 1) {
      // Ask the user for a description of the task
      return "Sure! Please provide a description of the task you need help with.";
    } else if (messages.length === 2) {
      // Ask the user when they want the task to be carried out
      return "Great! When would you like the task to be carried out?";
    } else if (messages.length === 3) {
      // Ask the user for their house address
      return "Perfect! Could you please provide your house address?";
    } else {
      // If the user has provided all necessary information, you can handle it accordingly
      // For simplicity, let's assume the conversation ends here
      return "Thank you for providing the information. I will process your request. The recommended workers will be shown on the left hand side of the screen.";
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
