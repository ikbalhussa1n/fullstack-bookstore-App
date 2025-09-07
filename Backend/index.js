import express, { json } from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";
dotenv.config();
const app = express();

app.use(cors());

app.use(json());

import bookRoute from "./route/book.route.js";
import userRoute from "./route/user.router.js";

const port = process.env.PORT;
const mongoURI = process.env.mongoURI;

//connect to database
const startServer = async () => {
  try {
    await mongoose.connect(mongoURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connected to MongoDB");

    app.listen(port, () => {
      console.log(`Example app listening on port ${port}`);
    });
  } catch (error) {
    console.error("Failed to connect to MongoDB:", error);
  }
};

app.use("/book", bookRoute);

app.use("/user", userRoute);
startServer();
