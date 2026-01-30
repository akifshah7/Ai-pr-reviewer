import express from "express";

const app = express();

app.use(express.json());

app.post("/webhook/github", (req, res) => {
  console.log("Webhook received");
  res.status(200).send("OK");
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
