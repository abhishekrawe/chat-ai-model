import express from "express";
import fs from "fs";
import { v4 as uuidv4 } from "uuid";

const app = express();
const PORT = 5000;

app.use(express.json());

const data = JSON.parse(fs.readFileSync("data.json", "utf-8"));

app.get("/", (req, res) => {
  res.send("Welcome to backend");
});

app.post("/", (req, res) => {
  const question = req.body.question;
  const matchedResponse = data.find((item) => item.question === question);
  if (matchedResponse) {
    res.json({ response: matchedResponse.response });
  } else {
    const defaultResponse = data.find((item) => item.question === "default");
    res.json({ response: defaultResponse.response });
  }
});

app.post("/saveConversation", (req, res) => {
  const conversationGroup = req.body.conversation.map((item) => ({
    question: item.question,
    response: item.response,
    rating: item.rating,
    feedback: item.feedback,
  }));
  const conversationWithId = {
    id: uuidv4(),
    conversations: conversationGroup,
  };
  fs.readFile("conversation.json", "utf-8", (err, data) => {
    let conversations = [];
    if (!err) {
      conversations = JSON.parse(data);
    }
    conversations.push(conversationWithId);
    fs.writeFile("conversation.json", JSON.stringify(conversations), (err) => {
      if (err) {
        console.error("Error saving conversation:", err);
        res.status(500).send("Error saving conversation");
      } else {
        console.log("Conversation saved successfully!");
        // Log the saved conversation data in the desired format
        console.log("Saved Conversation:");
        console.log(conversationWithId);
        res.send("Conversation saved successfully");
      }
    });
  });
});

app.get("/conversations", (req, res) => {
  fs.readFile("conversation.json", "utf-8", (err, data) => {
    if (err) {
      console.error("Error reading conversation:", err);
      res.status(500).send("Error reading conversation");
    } else {
      const conversations = JSON.parse(data);
      res.json(conversations);
    }
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
