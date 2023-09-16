import express from "express";
const app = express();
import mongoose, { Schema } from "mongoose";
import * as dotenv from "dotenv";
dotenv.config();
import cookieParser from "cookie-parser";
const uri: string | undefined = process.env.MONGODB_URI;

app.use(cookieParser());

if (uri) {
  mongoose
    .connect(uri)
    .then(() => console.log("Connected to MongoDB"))
    .catch((err) => console.log(err));
} else {
  console.log("No uri provided");
}

app.use(express.json())
app.use(express.static("./pesonal-website/public"))

//import routes
import contactsRouter from './API/contacts/contactsRouter';
app.use('/api/contacts', contactsRouter);

app.listen(4000,()=>{
    console.log("Server running on port 4000")
})