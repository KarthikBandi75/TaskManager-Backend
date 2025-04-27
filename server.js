import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from 'dotenv';
import userRouter from "./routes/userRoute.js";
import taskRouter from "./routes/taskRoute.js";

dotenv.config(); 
const app = express();


const corsOptions = {
  origin: 'https://task-manager-frontend-kappa-three.vercel.app', 
  methods: 'GET,POST,PUT,DELETE', 
  allowedHeaders: 'Content-Type,Authorization', 
};


app.use(cors(corsOptions));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("Database connection successful!"))
  .catch((err) => console.log(err));


app.use("/api/user", userRouter);
app.use("/api/task", taskRouter);


app.listen(7000, () => console.log("App running on port 7000"));
