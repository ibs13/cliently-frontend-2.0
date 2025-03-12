import express from "express";
import cors from "cors";
import path from "path";

const app = express();

// Enable CORS
app.use(cors());

// Serve JSON file
app.get("/Language/Frontend/en.json", (req, res) => {
  res.sendFile(path.join(process.cwd(), "Language/Frontend", "en.json"));
});

// Start server
const PORT = 4000;
app.listen(PORT, () =>
  console.log(`Server running on http://localhost:${PORT}`)
);
