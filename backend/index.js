import express from "express";
import mongoose from "mongoose";
import router from "./routes/routes.js";
import bodyParser from "body-parser";
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.get("/", (req, res) => {
  res.send({ test: "hello" });
});

mongoose
  .connect(
    "mongodb+srv://wuchau:a68713445@nodejs.xxgcz.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
    }
  )
  .then(() => {
    console.log("connect mongodb");
  });

app.use("/api", router);

app.listen(3001, () => {
  console.log("running on port 3000");
});
