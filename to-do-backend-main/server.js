import express from "express";
import dotenv from "dotenv";
import connectDB from "./src/config/db.js";
import todoRoutes from "./src/routes/todoRoutes.js";

dotenv.config();
connectDB();

const app = express();
app.use(express.json());

// Routes
app.use("/todos", todoRoutes);

// Health check
app.get("/", (req, res) => {
  res.json({ message: "Personal Todo API is running 🚀" });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
