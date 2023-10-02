import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import clientRoutes from "../routes/clientRoutes.js";
import authRoutes from '../routes/authRoutes.js';
import cookieParser from 'cookie-parser'
dotenv.config();

const app = express();
app.use(express.json());
app.use(cookieParser());

app.use(cors({ origin: "*" }));

const PORT = 5000;

//
// connect to the database. We want to listen to PORT after when we succesfully connected to the database
// we also need .env to hide the database url
mongoose.connect(process.env.MONGO_URL).then(() => {
  console.log("Listening");
  app.listen(PORT);
});

// Use post when push data
// Use get when get/fetch data from somewhere
//
app.use("/clients", clientRoutes);
app.use("/auth", authRoutes);

