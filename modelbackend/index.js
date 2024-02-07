import express from "express";
import fs from "fs";

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
    res.status(404).json({ error: "Response not found for the question." });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
