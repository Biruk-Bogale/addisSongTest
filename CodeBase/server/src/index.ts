import express, { Request, Response } from "express";
import cors from "cors";
import "dotenv/config";
import mongoose from "mongoose";
import songRoutes from "./routes/SongRoute";

mongoose
  .connect(process.env.MONGODB_CONNECTION_STRING as string)
  .then(() => console.log("connected to database"));

// initializes an express application
const app = express();

// adds middleware to parse incoming JSON requests
app.use(express.json());

// Enables Cross-Origin Resource Sharing
app.use(cors());

app.get("/health", (req: Request, res: Response) => {
  res.send({
    message: "Health OK!",
  });
});

// use songRoutes for any requests starting with '/api/song'
app.use("/api/song", songRoutes);

// start the server and listen for incoming connections on port 7777
app.listen(7777, () => {
  console.log("server started on localhost:7777");
});
