import express from "express";
import dotenv from "dotenv";



dotenv.config();

const app = express();
const port = process.env.PORT;

app.use(express.json());



app.get("/test", (req, res) => {
  res.status(200).json({
    message: "working!!!",
  });
});

app.listen(port, () => {
  console.log(`My server is running at http://localhost:${port}`);
});

