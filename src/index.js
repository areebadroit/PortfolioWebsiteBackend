import express from "express";
import dotenv from "dotenv";
import routes from "./Routes/index.js";
import mongoose from "mongoose";
dotenv.config();
const app = express();
app.use(express.json()); //Helps to parse the incoming request body as json
app.use(express.urlencoded({ extended: true }));
app.get("/", (req, res) => {
  res.send("Portfolio backend server is live!");
});
app.use("/api", routes);

app.listen(process.env.PORT, async () => {
  console.log(`Example app listening on port ${process.env.PORT}`);
  await mongoose.connect(
    `mongodb+srv://areeb:${process.env.MONGOKEY}@test.icewh.mongodb.net/?retryWrites=true&w=majority`
  );
  console.log("connected");
});
