import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import fs from "fs";

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());

// Read movies.json file
const movies = JSON.parse(fs.readFileSync("./movies.json", "utf-8"));

app.get("/movies", (req, res) => {
  res.json(movies);
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
