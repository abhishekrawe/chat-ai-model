import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import StarRatings from "../components/Feedback/StartRating"

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
            <h1 className="text-3xl font-bold text-center text-gray-lightbulma">
              Conversation History
            </h1>
            {conversations.toReversed().map((conversation) => (
              <>
                <h1 className="text-xl px-5"> Todays </h1>
                <div
                  key={conversation.id}
                  className="flex-col gap-5 p-5 rounded-lg">
                  {conversation.conversations ? (
                    conversation.conversations.map((item, index) => (
                      <div
                        key={index}
                        className="bg-blue-20 p-5 rounded-lg w-full md:w-1/2 lg:w-1/2 my-2  shadow-lg">
                        <div className="font-bold text-md">
                          <div className="flex items-center gap-3">
                            <img
                              src="https://w7.pngwing.com/pngs/340/946/png-transparent-avatar-user-computer-icons-software-developer-avatar-child-face-heroes-thumbnail.png"
                              alt="user"
                              className="w-5 h-5 rounded-full"
                            />{" "}
                            You :
                            <span className="text-md font-normal">
                              {item.question}
                            </span>
                          </div>
                        </div>
                        <div className="flex gap-3 items-center font-bold text-md mt-4">
                          <img
                            src="https://www.soulhq.ai/assets/soul-ui-logo.webp"
                            alt="user"
                            className="w-5 h-5 rounded-full"
                          />{" "}
                          Soul AI :
                          <span className="text-md font-normal">
                            {" "}
                            {item.response}
                          </span>
                        </div>
                        <div className="px-8 mt-2">
                          {item.rating && (
                            <h1 className="font-bold text-md">
                              Rating:{" "}
                              <span className="text-md font-normal">
                                <StarRatings value={item.rating} />
                              </span>
                            </h1>
                          )}
                          {item.feedback && (
                            <h1 className="font-bold text-md mt-2">
                              {" "}
                              Feedback:{" "}
                              <span className="font-normal text-md">
                                {" "}
                                {item.feedback}
                              </span>
                            </h1>
                          )}
                        </div>
                      </div>
                    ))
                  ) : (
                    <> </>
                  )}
                </div>
              </>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
}

export default PastConversation;
