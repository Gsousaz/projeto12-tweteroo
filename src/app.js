import express from "express";
import cors from "cors";
const app = express(); // app do servidor
const PORT = 5000;
const users = [];
const tweets = [];
app.use(cors());
app.use(express.json());
app.post("/sign-up", (req, res) => {
  const newUser = {
    username: req.body.username,
    avatar: req.body.avatar,
  };
  users.push(newUser);
  res.send("OK");
});

app.post("/tweets", (req, res) => {
  const usuario = users.find((user) => user.username === req.body.username);
  if (usuario) {
    const novoTweet = {
      username: req.body.username,
      tweet: req.body.tweet,
    };
    tweets.push(novoTweet);
    res.send("OK");
  } else {
    res.send("UNAUTHORIZED");
  }
});

app.get("/tweets", (req, res) => {
  const lastTenTweets = tweets.slice(-10).map((tweet) => {
    const user = users.find((user) => user.username === tweet.username);
    return {
      ...tweet,
      avatar: user.avatar,
    };
  });
  res.send(lastTenTweets);
});

app.listen(PORT, () => {
  console.log(`servidor rodando na porta ${PORT}`);
});
