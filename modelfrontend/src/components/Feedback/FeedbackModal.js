import React, { useState } from "react";
import ThumbsDownIcon from "../../assets/icons/ThumbsDownIcon";

function FeedbackModal({ handleClose }) {
  const [feedback, setFeedback] = useState("");

  const handleSubmit = () => {
    // Here you can handle the submission of the feedback, e.g., send it to a server
    console.log("Feedback submitted:", feedback);
    // Close the modal after submission
    handleClose();
  };

  return (
    <div className="fixed top-0 left-0 flex items-center justify-center bg-gray-900 bg-opacity-50 z-50 md:inset-0 h-[calc(150%-1rem)] max-h-full">
      <div className="bg-white-10 rounded-lg p-4 max-w-md w-1/4">
          <h1 className="text-md font-bold mb-4">
           👎 Provide additional feedback
          </h1>
        <textarea
          value={feedback}
          onChange={(e) => setFeedback(e.target.value)}
          placeholder="What was the issue with the response? How could it be improved?"
          className="p-2 h-36 w-full resize-none rounded-md shadow-md"
        />
        <div className="flex justify-end">
          <button
            onClick={handleSubmit}
            className="px-4 py-2 bg-blue-10 text-white rounded-md hover:bg-blue-20 text-white-10">
            Submit
          </button>
          <button
            onClick={handleClose}
            className="px-4 py-2 ml-4 bg-gray-text text-white rounded-md hover:bg-gray-500 text-white-10">
            Close
          </button>
        </div>
      </div>
    </div>
  );
}

export default FeedbackModal;

