import React, { useState } from "react";
import axios from "axios";
import StaticSugestion from "./StaticSugestion";
import ThumbsDownIcon from "../assets/icons/ThumbsDownIcon";
import ThumbsUpIcon from "../assets/icons/ThumbsUpIcon";
import StarRating from "./Feedback/StartRating";
import FeedbackModal from "./Feedback/FeedbackModal";


function ChatSection() {
  const [question, setQuestion] = useState("");
  const [conversation, setConversation] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(true);
  const [showRating, setShowRating] = useState(false);
  const [selectedQuestionIndex, setSelectedQuestionIndex] = useState(null);
  const [ratingValue, setRatingValue] = useState(0);
  const [showFeedbackModal, setShowFeedbackModal] = useState(false);
  const [feedbackMessages, setFeedbackMessages] = useState([]);
  
 const handleAsk = async () => {
   try {
     const res = await axios.post("/", { question });
     const newConversationItem = {
       question,
       response: res.data.response,
       rating: null, 
       feedback: null,
     };
     setConversation([...conversation, newConversationItem]);
     setQuestion("");
     setShowSuggestions(false);
   } catch (error) {
     console.error(error);
   }
 };
   

  const handleRatingChange = (newValue) => {
    const updatedConversation = [...conversation];
    updatedConversation[selectedQuestionIndex].rating = newValue;
    setConversation(updatedConversation);
    console.log("Updated conversation with rating:", updatedConversation);
  };

   const handleThumbsUpClick = (index) => {
     setSelectedQuestionIndex(index);
     setShowRating(true);
   };

   const handleThumbsDownClick = (index) => {
     setSelectedQuestionIndex(index);
     setShowFeedbackModal(true);
   };

   const handleFeedbackSubmit = (feedback) => {
     const updatedConversation = [...conversation];
     updatedConversation[selectedQuestionIndex].feedback = feedback;
     setConversation(updatedConversation);
     setFeedbackMessages([...feedbackMessages, feedback]);
   };

   const handleSaveConversation = async () => {
     try {
       const conversationToSave = conversation.map((item) => ({
         ...item,
         Ratings: item.rating, 
         Feedback: item.feedback,
       }));
       await axios.post("/saveConversation", {
         conversation: conversationToSave,
       });
       console.log("Conversation saved successfully!");
     } catch (error) {
       console.error("Error saving conversation:", error);
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
              <div className="relative group">
                <p className="bg-blue-200 rounded-lg p-2">
                  <span className="font-bold text-lg">SoulAI : </span>
                  {item.response}
                </p>
                {(index === conversation.length - 1 ||
                  conversation.length === 1) && (
                  <div className="hidden group-hover:flex absolute top-0 left-0 w-full h-full bg-gray-900 bg-opacity-50 items-center justify-end gap-10 pt-12">
                    <div onClick={() => handleThumbsDownClick(index)}>
                      <ThumbsDownIcon />
                    </div>
                    <div onClick={() => handleThumbsUpClick(index)}>
                      <ThumbsUpIcon />
                    </div>
                  </div>
                )}
              </div>
            </div>
            {showRating && selectedQuestionIndex === index && (
              <div className="px-14">
                <StarRating value={ratingValue} onChange={handleRatingChange} />
              </div>
            )}
          </div>
        ))}
        {feedbackMessages.map((feedback, index) => (
          <div key={index} className="bg-gray-200 rounded-lg p-2 mb-2 px-14">
            <span className="font-bold text-lg">Feedback : </span>
            {feedback}
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
        <button
          onClick={handleSaveConversation}
          className="px-4 py-4 ml-4 rounded-lg bg-blue-10 text-white-10">
          Save Conversation
        </button>
      </div>
      {showFeedbackModal && (
        <FeedbackModal
          handleClose={() => setShowFeedbackModal(false)}
          handleFeedbackSubmit={handleFeedbackSubmit}
        />
      )}
    </div>
  );
}

export default ChatSection;
