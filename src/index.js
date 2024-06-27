import bodyParser from "body-parser";
import cors from "cors";
import express from "express";
import routes from "./routes/index.js";

const app = express();

const PORT = process.env.PORT || 5000;

app.use(bodyParser.json());

app.use(cors());

app.use("/api", routes);

app.get("/", (req, res) => {
  res.send("This is OneMap Official APIs");
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
