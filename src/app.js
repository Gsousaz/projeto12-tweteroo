import express from "express";
import cors from "cors";

const app = express();
const PORT = 5000;

const users = [];

app.use(cors());
app.use(express.json());

app.post("/sign-up", (req, res) => {
  const newUser = {
    username: req.body.username,
    avatar: req.body.avatar,
  };
  users.push(newUser);
  console.log(users);
  res.send(users);
});

app.listen(PORT, () => {
  console.log(`servidor rodando na porta ${PORT}`);
});
