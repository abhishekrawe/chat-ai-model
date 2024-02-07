import React, { useState } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [question, setQuestion] = useState("");
  const [response, setResponse] = useState("");

  const handleAsk = async () => {
    try {
      const res = await axios.post("/", { question });
      setResponse(res.data.response);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h1>Ask a Question</h1>
      <input
        type="text"
        value={question}
        onChange={(e) => setQuestion(e.target.value)}
      />
      <button onClick={handleAsk}>Ask</button>
      <p>Response: {response}</p>
    </div>
  );
}

export default App;

