import React, { useState } from "react";
import axios from "axios";
import StaticSugestion from "./StaticSugestion";

function ChatSection() {
  const [question, setQuestion] = useState("");
  const [conversation, setConversation] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(true);

  const handleAsk = async () => {
    try {
      const res = await axios.post("/", { question });
      const newConversation = [
        ...conversation,
        { question, response: res.data.response },
      ];
      setConversation(newConversation);
      setQuestion("");
      setShowSuggestions(false);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="flex flex-col">
      {showSuggestions && <StaticSugestion />}
      <div className="flex-grow p-4">
        {conversation.map((item, index) => (
          <div key={index}>
            <div className="flex py-5">
              <img
                src="https://w7.pngwing.com/pngs/340/946/png-transparent-avatar-user-computer-icons-software-developer-avatar-child-face-heroes-thumbnail.png"
                className="h-12 w-12 rounded-full"
                alt="user"
              />
              <p className="bg-gray-200 rounded-lg p-2 mb-2">
                <span className="font-bold text-lg">You : </span>
                {item.question}
              </p>
            </div>
            <div className="flex py-5">
              <img
                src="https://www.soulhq.ai/assets/soul-ui-logo.webp"
                className="h-12 w-12 rounded-full"
                alt="user"
              />
              <p className="bg-blue-200 rounded-lg p-2">
                <span className="font-bold text-lg">SoulAI : </span>
                {item.response}
              </p>
            </div>
          </div>
        ))}
      </div>
      <div className="flex items-center p-4">
        <input
          type="text"
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          placeholder="Chat with AI model powerd by soul AI..."
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              handleAsk();
            }
          }}
          className="flex-grow rounded-lg p-4 mr-4 shadow-md border-gray-text border "
        />
        <button
          onClick={handleAsk}
          className="px-4 py-4 rounded-lg bg-blue-10 text-white-10">
          Ask
        </button>
      </div>
    </div>
  );
}

export default ChatSection;
