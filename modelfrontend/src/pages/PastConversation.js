import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";

function PastConversation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [conversations, setConversations] = useState([]);

  useEffect(() => {
    fetchConversations();
  }, []);

  const fetchConversations = async () => {
    try {
      const response = await fetch("/conversations");
      if (!response.ok) {
        throw new Error("Failed to fetch conversations");
      }
      const data = await response.json();
      console.log("Fetched conversations:", data);
      setConversations(data);
    } catch (error) {
      console.error("Error fetching conversations:", error);
    }
  };

  return (
    <div className="flex h-screen overflow-hidden">
      {/* Sidebar */}
      <Sidebar
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
      />

      <div className="flex flex-col flex-1 overflow-hidden">
        {/* Header */}
        <Header setMobileMenuOpen={setMobileMenuOpen} />

        {/* Main Content */}
        <main className="flex-1 p-4 tablet:p-8 overflow-y-auto">
          <div className="mx-auto">
            <h1>Conversation History</h1>
            {conversations.map((conversation) => (
              <div key={conversation.id}>
                {conversation.conversations ? (
                  // If 'conversations' array exists
                  conversation.conversations.map((item, index) => (
                    <div key={index}>
                      <h1>Question: {item.question}</h1>
                      <h1>Response: {item.response}</h1>
                      {item.rating && <h1>Rating: {item.rating}</h1>}
                      {item.feedback && <h1>Feedback: {item.feedback}</h1>}
                    </div>
                  ))
                ) : (
                  // If 'conversations' array does not exist
                  <>
                    <h1>Question: {conversation.question}</h1>
                    <h1>Response: {conversation.response}</h1>
                    {conversation.rating && (
                      <h1>Rating: {conversation.rating}</h1>
                    )}
                    {conversation.feedback && (
                      <h1>Feedback: {conversation.feedback}</h1>
                    )}
                  </>
                )}
              </div>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
}

export default PastConversation;
