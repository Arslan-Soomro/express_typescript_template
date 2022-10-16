import express from "express";
import * as dotenv from "dotenv";

dotenv.config();
const app = express();
app.use(express.json());
const PORT = process.env.PORT || 9000;

app.get("/", (req, res) => {
  res.send("Hello World");
})

app.post("/", (req, res) => {
    console.log(req.body);
    res.json({...req.body, response: "Grettings"});
});

app.listen(PORT, () => {
  console.log("Server is running at PORT:" + PORT);
})