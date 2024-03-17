import express from "express";
import morgan from "morgan";
import cors from "cors";
import mongoose from "mongoose";
import contactsRouter from "./routes/contactsRouter.js";
import "dotenv/config";

const { PORT = 3000, DB_HOST } = process.env;
const app = express();

app.use(morgan("tiny"));
app.use(cors());
app.use(express.json());

app.use("/api/contacts", contactsRouter);

app.use((_, res) => {
  res.status(404).json({ message: "Route not found" });
});

app.use((err, req, res, next) => {
  const { status = 500, message = "Server error" } = err;
  res.status(status).json({ message });
});

mongoose
  .connect(DB_HOST)
  .then(() => {
    console.log("Database connection successful");

    app.listen(PORT, () => {
      console.log(`Server is running. Use our API on port: ${PORT}`);
    });
  })
  .catch((err) => {
    console.error("Database connection error:", err.message);
    process.exit(1);
  });
